# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

"""Templates rendering helpers for generating the JavaScript API client."""

import os
import textwrap

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


def wrap_text(text, indent='  ', trailing_newline=False):
    """Return the given text indented and wraped at 79."""
    width = 79 - len(indent)
    wrapper = textwrap.TextWrapper(subsequent_indent=indent, width=width)
    wrapped = wrapper.fill(text)
    if trailing_newline:
        wrapped += '\n'
    return wrapped
