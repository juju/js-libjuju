# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

"""A command line tool for generating the JavaScript Juju API client."""

import argparse
import collections
import json

from ._prop import from_bare_properties, kinds


def setup(args):
    """Set up the argument parser."""
    parser = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawTextHelpFormatter)
    parser.add_argument('schema', type=str, help='the schema JSON file')
    ns = parser.parse_args(args)
    try:
        with open(ns.schema) as f:
            ns.schema = json.load(f)
    except Exception as err:
        parser.error('cannot parse schema: {}'.format(err))
        return
    return ns


def run(ns):
    """Run the application with the given parsed namespace."""
    for facade in ns.schema:
        _handle_facade(facade['Name'], facade['Version'], facade['Schema'])
    print(kinds)


def _handle_facade(name, version, schema):
    props, defs = schema['properties'], schema.get('definitions', {})
    for name, info in props.items():
        _handle_prop(name, info, defs)


def _handle_prop(name, info, defs):
    props = info.get('properties')
    if not props:
        return
    params, result = props.get('Params', {}), props.get('Result', {})
    params = from_bare_properties('params', _dereference(params, defs))
    result = from_bare_properties('result', _dereference(result, defs))


def _dereference(data, defs):
    print(data)
    result = {}
    for key, value in data.items():
        if key == '$ref':
            ref = value.rsplit("/", 1)[-1]
            return _dereference(defs[ref], defs)
        if isinstance(value, collections.Mapping):
            value = _dereference(value, defs)
        result[key] = value
    return result
