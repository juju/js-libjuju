# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

"""A command line tool for generating the JavaScript Juju API client."""

import argparse
import collections
from datetime import datetime
import json
import os

from ._code import (
    from_gotype,
    Method,
    uncapitalize,
)
from ._exceptions import AppError
from ._templates import (
    get_template,
    wrap_text,
)


def setup(args):
    """Set up the argument parser."""
    here = os.path.dirname(__file__)
    out = os.path.abspath(os.path.join(here, '..', 'api', 'facades'))
    parser = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawTextHelpFormatter)
    parser.add_argument('schema', type=str, help='the schema JSON file')
    parser.add_argument(
        'out', type=str, nargs='?', default=out,
        help='the output directory (%(default)s)')
    ns = parser.parse_args(args)
    try:
        with open(ns.schema) as f:
            ns.schema = json.load(f)
    except Exception as err:
        parser.error('cannot parse schema: {}'.format(err))
        return
    if not os.path.isdir(ns.out):
        parser.error('invalid output directory: {!r}'.format(ns.out))
        return
    return ns


def run(ns):
    """Run the application with the given parsed namespace."""
    try:
        facades, typeinfo = ns.schema['Facades'], ns.schema['TypeInfo']
    except (KeyError, TypeError, ValueError):
        raise AppError('provided schema is not valid')
    if not isinstance(facades, list):
        raise AppError('provided facades in the schema is not a list')
    try:
        types = typeinfo['Types']
    except (KeyError, TypeError, ValueError):
        raise AppError('provided type info in the schema is not valid')
    if not isinstance(types, collections.Mapping):
        raise AppError('provided types in the schema is not a map')
    facade_template = get_template('facade.js')
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
        except (KeyError, TypeError, ValueError) as err:
            raise AppError('cannot retrieve name and version for facade')
        if name in _BLACKLIST or facade['Methods'] is None:
            continue
        try:
            methods = _handle_methods(name, facade['Methods'], types)
        except (KeyError, TypeError, ValueError) as err:
            raise AppError(
                'cannot retrieve methods for facade {}: {}'.format(name, err))
        doc = facade.get('Doc', 'There is no documentation for this facade.')
        # Render the facade.
        filename = '{}-v{}.js'.format(_hyphenize(uncapitalize(name)), version)
        facade_template.stream(
            # Whether this facade is available on controller connections.
            available_on_controllers=available_on_controllers,
            # Whether this facade is available on model connections.
            available_on_models=available_on_models,
            # The docstring for the facade.
            doc=wrap_text(doc),
            # A set of _code.Method instances provided by the facade.
            methods=methods,
            # The name of the facade.
            name=name,
            # The current time as a string.
            time=datetime.utcnow().strftime('%a %Y/%m/%d %H:%M:%S UTC'),
            # The facade version as an int.
            version=version,
        ).dump(os.path.join(ns.out, filename))


def _handle_methods(name, methods, types):
    if not isinstance(methods, list):
        raise AppError('methods for facade {} is not a list'.format(name))
    resulting_methods = []
    for method in methods:
        if not isinstance(method, collections.Mapping):
            raise AppError('method for facade {} is not a map'.format(name))
        try:
            method_name = method['Name']
        except KeyError:
            raise AppError('method for facade {} has no name'.format(name))
        try:
            params = from_gotype(types, method.get('Param'))
            result = from_gotype(types, method.get('Result'))
        except (KeyError, ValueError) as err:
            raise AppError(
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
