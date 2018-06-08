# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

from unittest import (
    mock,
    TestCase,
)

from . import helpers
import generator


class TestGenerator(TestCase):

    tests = [{
        'about': 'example',
        'args': (),
    }, {
        'about': 'another example',
        'args': (),
    }]

    def test_generate(self):
        # The generate command generates API facades.
        for test in self.tests:
            with self.subTest(test['about']):
                self.check(
                    test.get('args', ())
                )

    def check(self, args):
        # TODO(frankban): implement the check. Now making lint happy.
        generator.generate
        mock.Mock
        helpers
