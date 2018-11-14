# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

"""Test helpers."""

from contextlib import contextmanager
from datetime import datetime
import os
from unittest import mock


_here = os.path.dirname(__file__)
_wrappers = os.path.join(_here, '..', 'templates', 'wrappers.md')
with open(os.path.abspath(_wrappers)) as f:
    wrappers_content = f.read().strip()


@contextmanager
def maybe_raises(exception):
    """Assume the code in the block may or may not raise an exception.

    Report wether an exception with the given type has been raised.
    Raise an exception if one exception is raised but not the one provided.
    """
    ctx = type('Context', (), {'exc': None})()
    try:
        yield ctx
    except exception as err:
        ctx.exc = err


def read_data(filename):
    """Return the content of the file with the given name in the data dir."""
    path = os.path.abspath(os.path.join(_here, 'data', filename))
    with open(path) as f:
        return f.read().strip()


def patch_datetime_utcnow():
    mock_datetime = mock.Mock()
    mock_datetime.utcnow.return_value = datetime(2042, 1, 1, 16, 42, 47)
    return mock.patch('generator._render.datetime', mock_datetime)
