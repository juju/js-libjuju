# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

import json
import os
import shutil
import tempfile
from unittest import TestCase

from . import helpers
import generator


class TestGenerator(TestCase):

    tests = [{
        'about': 'invalid schema',
        'schema': 'invalid',
        'want_error': 'provided schema does not contain a list of facades',
    }, {
        'about': 'invalid facade',
        'schema': ['invalid'],
        'want_error': 'schema for facades is not valid',
    }, {
        'about': 'empty facade list',
        'schema': [],
    }, {
        'about': 'single simple facade',
        'schema': [{
            'Name': 'Pinger',
            'Version': 42,
            'Schema': {
                'type': 'object',
                'properties': {
                    'Ping': {'type': 'object'},
                    'Stop': {'type': 'object'}
                },
            },
        }],
        'want_files': {
            'pinger-v42.js': helpers.read_data('pinger.js'),
        },
    }]

    def test_generate(self):
        # The generate command generates API facades.
        for test in self.tests:
            with self.subTest(test['about']):
                self.check(
                    test.get('schema', ''),
                    test.get('want_files', {}),
                    test.get('want_error', ''),
                )

    def check(self, schema, want_files, want_error):
        # Create the schema file.
        dump = json.dumps(schema)
        with tempfile.NamedTemporaryFile(delete=False) as f:
            f.write(dump.encode('utf-8'))
        self.addCleanup(os.remove, f.name)
        # Set up a directory for the generated code.
        out = tempfile.mkdtemp()
        self.addCleanup(shutil.rmtree, out)
        # Execute the command.
        with helpers.maybe_raises(SystemExit) as ctx:
            generator.generate([f.name, out])
        # Check errors.
        if want_error:
            self.assertIsNotNone(ctx.exc)
            self.assertEqual(str(ctx.exc), want_error)
            return
        self.assertIsNone(ctx.exc)
        # Check generated code.
        self.assertEqual(os.listdir(out), sorted(want_files.keys()))
        for filename, want_code in want_files.items():
            with open(os.path.join(out, filename)) as f:
                got_code = f.read()
            self.assertIn(want_code, got_code)
