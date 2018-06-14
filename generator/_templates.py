# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

"""Templates rendering helpers for generating the JavaScript API client."""

import os

from jinja2 import (
    Environment,
    FileSystemLoader,
)


_here = os.path.dirname(__file__)
_templatedir = os.path.abspath(os.path.join(_here, '..', 'templates'))


def get_template(name):
    """Return a template with the given name."""
    loader = FileSystemLoader(_templatedir)
    env = Environment(loader=loader)
    return env.get_template(name)
