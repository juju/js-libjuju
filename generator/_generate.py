# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

"""A command line tool for generating the JavaScript Juju API client."""

import argparse
import json
import os

from ._exceptions import AppError
from ._render import render_facades


def setup(args):
    """Set up the argument parser."""
    here = os.path.dirname(__file__)
    out = os.path.abspath(os.path.join(here, '..', 'api'))
    parser = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawTextHelpFormatter)
    parser.add_argument('schema', type=str, help='the schema JSON file')
    parser.add_argument(
        'out', type=str, nargs='?', default=out,
        help='the output directory where the facades and doc subdirectories '
             'will be created (%(default)s)')
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
    try:
        types = typeinfo['Types']
    except (KeyError, TypeError, ValueError):
        raise AppError('provided type info in the schema is not valid')
    try:
        render_facades(facades, types, ns.out)
    except(TypeError, ValueError) as err:
        raise AppError(str(err))
