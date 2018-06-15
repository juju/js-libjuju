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
                    'Stop': {'type': 'object'},
                },
            },
        }],
        'want_files': {
            'pinger-v42.js': helpers.read_data('pinger.js'),
        },
    }, {
        'about': 'single facade with definitions',
        'schema': [{
            'Name': 'AllWatcher',
            'Version': 1,
            'Schema': {
                'type': 'object',
                'properties': {
                    'Next': {
                        'type': 'object',
                        'properties': {
                            'Result': {
                                '$ref': '#/definitions/AllWatcherNextResults',
                            },
                        },
                    },
                    'Stop': {'type': 'object'},
                },
                'definitions': {
                    'AllWatcherNextResults': {
                        'type': 'object',
                        'properties': {
                            'deltas': {
                                'type': 'array',
                                'items': {'$ref': '#/definitions/Delta'},
                            },
                        },
                        'additionalProperties': False,
                        'required': ['deltas'],
                    },
                    'Delta': {
                        'type': 'object',
                        'properties': {
                            'entity': {
                                'type': 'object',
                                'additionalProperties': True,
                            },
                            'removed': {'type': 'boolean'},
                        },
                        'additionalProperties': False,
                        'required': ['removed', 'entity'],
                    },
                },
            },
        }],
        'want_files': {
            'all-watcher-v1.js': helpers.read_data('watcher.js'),
        },
    }, {
        'about': 'multiple facades',
        'schema': [{
            'Name': 'Bundle',
            'Version': 1,
            'Schema': {
                'type': 'object',
                'properties': {
                    'GetChanges': {
                        'type': 'object',
                        'properties': {
                            'Params': {
                                '$ref': '#/definitions/BundleChangesParams',
                            },
                            'Result': {
                                '$ref': '#/definitions/BundleChangesResults',
                            },
                        },
                    },
                },
                'definitions': {
                    'BundleChange': {
                        'type': 'object',
                        'properties': {
                            'args': {
                                'type': 'array',
                                'items': {
                                    'type': 'object',
                                    'additionalProperties': True,
                                },
                            },
                            'id': {'type': 'string'},
                            'method': {'type': 'string'},
                            'requires': {
                                'type': 'array',
                                'items': {'type': 'string'},
                            },
                        },
                        'additionalProperties': False,
                        'required': ['id', 'method', 'args', 'requires'],
                    },
                    'BundleChangesParams': {
                        'type': 'object',
                        'properties': {
                            'yaml': {'type': 'string'},
                        },
                        'additionalProperties': False,
                        'required': ['yaml'],
                    },
                    'BundleChangesResults': {
                        'type': 'object',
                        'properties': {
                            'changes': {
                                'type': 'array',
                                'items': {
                                    '$ref': '#/definitions/BundleChange',
                                },
                            },
                            'errors': {
                                'type': 'array',
                                'items': {'type': 'string'},
                            },
                        },
                        'additionalProperties': False,
                    },
                },
            },
        }, {
            'Name': 'Annotations',
            'Version': 2,
            'Schema': {
                'type': 'object',
                'properties': {
                    'Get': {
                        'type': 'object',
                        'properties': {
                            'Params': {
                                '$ref': '#/definitions/Entities',
                            },
                            'Result': {
                                '$ref': '#/definitions/AnnotationsGetResults',
                            },
                        },
                    },
                    'Set': {
                        'type': 'object',
                        'properties': {
                            'Params': {
                                '$ref': '#/definitions/AnnotationsSet',
                            },
                            'Result': {
                                '$ref': '#/definitions/ErrorResults',
                            },
                        },
                    },
                },
                'definitions': {
                    'AnnotationsGetResult': {
                        'type': 'object',
                        'properties': {
                            'annotations': {
                                'type': 'object',
                                'patternProperties': {
                                    '.*': {'type': 'string'},
                                },
                            },
                            'entity': {'type': 'string'},
                            'error': {
                                '$ref': '#/definitions/ErrorResult',
                            },
                        },
                        'additionalProperties': False,
                        'required': ['entity', 'annotations'],
                    },
                    'AnnotationsGetResults': {
                        'type': 'object',
                        'properties': {
                            'results': {
                                'type': 'array',
                                'items': {
                                    '$ref': '#/definitions/'
                                            'AnnotationsGetResult',
                                },
                            },
                        },
                        'additionalProperties': False,
                        'required': ['results'],
                    },
                    'AnnotationsSet': {
                        'type': 'object',
                        'properties': {
                            'annotations': {
                                'type': 'array',
                                'items': {
                                    '$ref': '#/definitions/EntityAnnotations',
                                },
                            },
                        },
                        'additionalProperties': False,
                        'required': ['annotations'],
                    },
                    'Entities': {
                        'type': 'object',
                        'properties': {
                            'entities': {
                                'type': 'array',
                                'items': {
                                    '$ref': '#/definitions/Entity',
                                },
                            },
                        },
                        'additionalProperties': False,
                        'required': ['entities'],
                    },
                    'Entity': {
                        'type': 'object',
                        'properties': {
                            'tag': {'type': 'string'},
                        },
                        'additionalProperties': False,
                        'required': ['tag'],
                    },
                    'EntityAnnotations': {
                        'type': 'object',
                        'properties': {
                            'annotations': {
                                'type': 'object',
                                'patternProperties': {
                                    '.*': {'type': 'string'},
                                },
                            },
                            'entity': {'type': 'string'},
                        },
                        'additionalProperties': False,
                        'required': ['entity', 'annotations'],
                    },
                    'Error': {
                        'type': 'object',
                        'properties': {
                            'code': {'type': 'string'},
                            'info': {
                                '$ref': '#/definitions/ErrorInfo',
                            },
                            'message': {'type': 'string'},
                        },
                        'additionalProperties': False,
                        'required': ['message', 'code'],
                    },
                    'ErrorInfo': {
                        'type': 'object',
                        'properties': {
                            'macaroon': {
                                '$ref': '#/definitions/Macaroon',
                            },
                            'macaroon-path': {'type': 'string'},
                        },
                        'additionalProperties': False,
                    },
                    'ErrorResult': {
                        'type': 'object',
                        'properties': {
                            'error': {'$ref': '#/definitions/Error'},
                        },
                        'additionalProperties': False,
                    },
                    'ErrorResults': {
                        'type': 'object',
                        'properties': {
                            'results': {
                                'type': 'array',
                                'items': {
                                    '$ref': '#/definitions/ErrorResult',
                                },
                            },
                        },
                        'additionalProperties': False,
                        'required': ['results'],
                    },
                    'Macaroon': {
                        'type': 'object',
                        'additionalProperties': False,
                    },
                },
            },
        }],
        'want_files': {
            'annotations-v2.js': helpers.read_data('annotations.js'),
            'bundle-v1.js': helpers.read_data('bundle.js'),
        },
    }, {
        'about': 'recursive properties',
        'schema': [{
            'Name': 'Recursive',
            'Version': 47,
            'Schema': {
                'type': 'object',
                'properties': {
                    'FullStatus': {
                        'type': 'object',
                        'properties': {
                            'machines': {
                                'type': 'object',
                                'patternProperties': {
                                    '.*': {
                                        '$ref': '#/definitions/MachineStatus',
                                    },
                                },
                            },
                        },
                        'additionalProperties': False,
                        'required': ['machines'],
                    },
                },
                'definitions': {
                    'MachineStatus': {
                        'type': 'object',
                        'properties': {
                            'constraints': {'type': 'string'},
                            'containers': {
                                'type': 'object',
                                'patternProperties': {
                                    '.*': {
                                        '$ref': '#/definitions/MachineStatus',
                                    },
                                },
                            },
                            'dns-name': {'type': 'string'},
                        },
                    },
                },
            },
        }],
        'want_files': {
            'recursive-v47.js': helpers.read_data('recursive.js'),
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
        self.assertCountEqual(os.listdir(out), want_files.keys())
        for filename, want_code in want_files.items():
            with open(os.path.join(out, filename)) as f:
                got_code = f.read()
            self.assertEqual(got_code, want_code, got_code)
