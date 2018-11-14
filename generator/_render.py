# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

"""Logic for rendering the Juju API facades into files."""

import collections
from datetime import datetime
import operator
import os
import subprocess

from ._code import (
    from_gotype,
    Method,
    uncapitalize,
)
from ._templates import (
    get_template,
    wrap_text,
)


# Define the pubic API for the JavaScript client.
PUBLIC_API = (
    'connect',
    'connectAndLogin',
    'Client',
    'Connection',
    'Transport',
)


def render_facades(facades, types, out):
    """Render the given facades, including docs, saving to the out directory.

    The provided facades is a list of facade objects, optionally referencing
    types in the types map. The output consists of files generated in the
    facades and doc subdirectories of the given out directory. Those
    directories are created if they don't exist.

    This function can raise TypeErrors and ValueErrors.
    """
    if not isinstance(facades, list):
        raise TypeError('provided facades in the schema is not a list')
    if not isinstance(types, collections.Mapping):
        raise TypeError('provided types in the schema is not a map')
    # Set up output dirs.
    jsout = os.path.join(out, 'facades')
    mdout = os.path.join(out, 'doc')
    if not os.path.exists(jsout):
        os.makedirs(jsout)
    if not os.path.exists(mdout):
        os.makedirs(mdout)
    # Set up templates.
    templates = (
        [get_template('facade.js'), jsout, '.js'],
        [get_template('facade.md'), mdout, '.md'],
    )
    wrappers_info = _render_doc_wrappers(mdout)
    facade_info = {}
    for facade in facades:
        # Check whether this facade is available for end users.
        possible_clients = facade.get('AvailableTo', [])
        available_on_controllers = 'controller-user' in possible_clients
        available_on_models = 'model-user' in possible_clients
        if not (available_on_controllers or available_on_models):
            continue
        # Resolve methods and facade metadata.
        try:
            name, version = facade['Name'], facade['Version']
        except (KeyError, TypeError, ValueError):
            raise ValueError('cannot retrieve name and version for facade')
        # Do not process blacklisted facades or facades with no methods.
        if name in _BLACKLIST or facade['Methods'] is None:
            continue
        # Retrieve wrapped methods.
        try:
            methods = _handle_methods(name, facade['Methods'], types)
        except (KeyError, TypeError, ValueError) as err:
            raise ValueError(
                'cannot retrieve methods for facade {}: {}'.format(name, err))
        doc = facade.get('Doc', 'There is no documentation for this facade.')
        # Render the facade.
        jsname = '{}-v{}'.format(_hyphenize(uncapitalize(name)), version)
        versions = facade_info.setdefault(name, {})
        versions[version] = jsname + '.md'
        lowername = uncapitalize(name)
        wrapper_methods = wrappers_info.get(lowername, {})
        for template, directory, ext in templates:
            template.stream(
                # Whether this facade is available on controller connections.
                available_on_controllers=available_on_controllers,
                # Whether this facade is available on model connections.
                available_on_models=available_on_models,
                # The docstring for the facade.
                doc=wrap_text(doc),
                # The name to be used to import the facade from JavaScript.
                jsname=jsname,
                # The lowerName for the facade.
                lowername=lowername,
                # A set of _code.Method instances provided by the facade.
                methods=methods,
                # The name of the facade.
                name=name,
                # The current time as a string.
                time=_nowstr(),
                # The facade version as an int.
                version=version,
                # A map of names and docs for wrapper methods.
                wrapper_methods=wrapper_methods,
            ).dump(os.path.join(directory, jsname + ext))
    info = list(sorted([{
        'name': n,
        'versions': list(sorted([{
            'number': num,
            'file': file
        } for num, file in vs.items()], key=operator.itemgetter('number')))
    } for n, vs in facade_info.items()], key=operator.itemgetter('name')))
    try:
        _render_doc_index(info, mdout)
    except Exception as err:
        raise ValueError('cannot generate doc index: {}'.format(err))


def _render_doc_index(info, out):
    """Render documentation index using the given info.

    The info argument is a list of facades as produced by render_facades
    (see above), something like:
        [{
            'name': 'Application',
            'versions': [{
                'number': 3,
                'file': 'application-v3.js',
            }],
        }, {
            'name': 'Client',
            'versions': [{
                'number': 2,
                'file': 'client-v2.js',
            }, {
                'number': 1,
                'file': 'client-v1.js',
            }],
        }, {
            ...
        }]
    The list is ordered by facade name, and versions are ordered so that most
    recent version comes last.

    The out argument is the directory where the resulting file is generated.
    """
    here = os.path.dirname(__file__)
    # Handle examples.
    example_dir = os.path.abspath(os.path.join(here, '..', 'examples'))
    examples = [
        {'name': os.path.splitext(ex)[0].replace('-', ' '), 'file': ex}
        for ex in sorted(os.listdir(example_dir))
    ]
    # Handle the API reference.
    doccmd = os.path.abspath(
        os.path.join(here, '..', 'node_modules', '.bin', 'documentation'))
    output = subprocess.check_output([
        doccmd, 'build', 'api/client.js',
        '-f', 'md', '--markdown-toc', 'false', '--shallow']).decode('utf-8')
    api_reference = []
    for part in output.replace('\n### ', '\n#### ').split('\n## '):
        name = part.split('\n')[0].strip()
        if name in PUBLIC_API:
            api_reference.append('### ' + part)
    refs_start = '\n[1]: '
    _, refs = output.split(refs_start)
    api_reference.append(refs_start + refs)
    # Render the index.
    index_template = get_template('index.md')
    path = os.path.join(out, 'index.md')
    index_template.stream(
        api_reference='\n---\n'.join(api_reference),
        examples=examples,
        facades=info,
        public_api=PUBLIC_API,
        time=_nowstr(),
    ).dump(path)


def _render_doc_wrappers(out):
    """Render the wrappers documentation saving to the given out directory.

    Return info on the wrappers as a dict mapping facade names to another
    ordered dict mapping method names to method named tuples, like:
        {
            'client': {
                'watch': (
                    name='watch',
                    link='watchcallback',
                    doc='## watch(callback) ...',
                ),
                'foo': (
                    name='foo',
                    link='fooargs-callback',
                    doc='## foo(args, callback) ...',
                ),
            },
        }
    """
    template = get_template('wrappers.md')
    outfile = os.path.join(out, 'wrappers.md')
    template.stream().dump(outfile)
    with open(outfile) as stream:
        content = stream.read()
    wrappers_info = {}
    method = collections.namedtuple('Method', 'name link doc')
    for part in content.split('\n## '):
        if part.startswith('#'):
            continue
        facade_name, method_doc = part.split('.', 1)
        method_name = method_doc.split('(', 1)[0]
        method_link = method_doc.split('\n', 1)[0].replace(' ', '-')
        for char in '(),':
            method_link = method_link.replace(char, '')
        methods = wrappers_info.setdefault(
            facade_name, collections.OrderedDict())
        methods[method_name] = method(
            name=method_name, link=method_link, doc='## ' + method_doc)
    return wrappers_info


def _handle_methods(name, methods, types):
    if not isinstance(methods, list):
        raise TypeError('methods for facade {} is not a list'.format(name))
    resulting_methods = []
    for method in methods:
        if not isinstance(method, collections.Mapping):
            raise TypeError('method for facade {} is not a map'.format(name))
        try:
            method_name = method['Name']
        except KeyError:
            raise ValueError('method for facade {} has no name'.format(name))
        try:
            params = from_gotype(types, method.get('Param'))
            result = from_gotype(types, method.get('Result'))
        except (KeyError, ValueError) as err:
            raise ValueError(
                'method {}.{} is not valid: {}'.format(name, method_name, err))
        doc = method.get('Doc', 'There is no documentation for this method.')
        resulting_methods.append(Method(
            request=method_name,
            params=params,
            result=result,
            doc=wrap_text(doc, indent='    ', trailing_newline=True)))
    # Resulting methods are sorted mostly for making tests deterministic.
    return sorted(resulting_methods)


def _hyphenize(string):
    """Convert thisString into this-string."""
    parts = []
    for char in string:
        if char.isupper():
            char = '-' + char.lower()
        parts.append(char)
    return ''.join(parts)


def _nowstr():
    """Return the current time in UTC as a string."""
    return datetime.utcnow().strftime('%a %Y/%m/%d %H:%M:%S UTC')


# A black list for facades that surely are not available to users.
_BLACKLIST = (
    'AgentTools',
    'EntityWatcher',
    'FanConfigurer',
    'FilesystemAttachmentsWatcher',
    'Firewaller',
    'InstancePoller',
    'MigrationFlag',
    'MigrationMaster',
    'MigrationMinion',
    'MigrationStatusWatcher',
    'MigrationTarget',
    'ProxyUpdater',
    'StorageProvisioner',
    'StringsWatcher',
    'Undertaker',
    'Uniter',
)
