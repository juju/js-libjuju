# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

"""Test helpers."""

from contextlib import contextmanager


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
