# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

"""A command line tool for generating the JavaScript Juju API client."""

import argparse
import collections
import json
import os

from ._prop import (
    from_bare_properties,
    Method,
    uncapitalize,
)
from ._templates import facade_template


def setup(args):
    """Set up the argument parser."""
    here = os.path.dirname(__file__)
    out = os.path.abspath(os.path.join(here, '..', 'api', 'facades'))
    parser = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawTextHelpFormatter)
    parser.add_argument('schema', type=str, help='the schema JSON file')
    parser.add_argument(
        'out', type=str, nargs='?',
        help='the output directory (%(default)s)', default=out)
    ns = parser.parse_args(args)
    try:
        with open(ns.schema) as f:
            ns.schema = json.load(f)
    except Exception as err:
        parser.error('cannot parse schema: {}'.format(err))
        return
    if not os.path.isdir(ns.out):
        parser.error('invalid output directory: {!r}'.format(ns.out))
    return ns


def run(ns):
    """Run the application with the given parsed namespace."""
    for facade in ns.schema:
        methods = _handle_facade(facade['Schema'])
        name, version = facade['Name'], facade['Version']
        filename = '{}-v{}.js'.format(_hyphenize(uncapitalize(name)), version)
        facade_template.stream(
            name=name, methods=methods, version=version
        ).dump(os.path.join(ns.out, filename))


def _handle_facade(schema):
    props, defs = schema['properties'], schema.get('definitions', {})
    methods = []
    for name, info in props.items():
        params, result = _handle_prop(info, defs)
        methods.append(Method(request=name, params=params, result=result))
    return methods


def _handle_prop(info, defs):
    props = info.get('properties')
    if not props:
        return None, None
    params, result = props.get('Params', {}), props.get('Result', {})
    params = from_bare_properties(_dereference(params, defs))
    result = from_bare_properties(_dereference(result, defs))
    return params, result


def _dereference(data, defs, current_ref=None):
    result = {}
    for key, value in data.items():
        if key == '$ref':
            ref = value.rsplit("/", 1)[-1]
            if ref == current_ref:
                # TODO(frankban) handle recursive references.
                return '$self'
            return _dereference(defs[ref], defs, current_ref=ref)
        if isinstance(value, collections.Mapping):
            value = _dereference(value, defs, current_ref=current_ref)
        result[key] = value
    return result


def _hyphenize(string):
    """Convert thisString into this-string."""
    parts = []
    for char in string:
        if char.isupper():
            char = '-' + char.lower()
        parts.append(char)
    return ''.join(parts)
