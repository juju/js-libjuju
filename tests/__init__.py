# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

import unittest


# Show full diff in unittest.
# TODO(frankban): is it possible that this is the only way to do it?
unittest.util._MAX_LENGTH = 9000
unittest.TestCase.maxDiff = None
