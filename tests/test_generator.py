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
        'want_error': 'provided schema is not valid',
    }, {
        'about': 'invalid facades',
        'schema': {'Facades': 42, 'TypeInfo': {}},
        'want_error': 'provided facades in the schema is not a list',
    }, {
        'about': 'invalid type info',
        'schema': {'Facades': [], 'TypeInfo': {}},
        'want_error': 'provided type info in the schema is not valid',
    }, {
        'about': 'empty facade list',
        'schema': {'Facades': [], 'TypeInfo': {'Types': {}}},
    }, {
        'about': 'agent facade',
        'schema': {
            'Facades': [{
                'Name': 'FireStarter',
                'Version': 1,
                'Methods': [{'Name': 'StartTheFire'}],
                'AvailableTo': [
                    'controller-machine-agent',
                    'machine-agent',
                    'unit-agent',
                ],
            }],
            'TypeInfo': {'Types': {}},
        },
    }, {
        'about': 'single simple facade',
        'schema': {
            'Facades': [{
                'Name': 'Pinger',
                'Version': 42,
                'Methods': [{
                    'Name': 'Ping',
                }, {
                    'Name': 'Stop', 'Doc': 'Stop the pinger',
                }],
                'AvailableTo': [
                    'controller-machine-agent',
                    'machine-agent',
                    'unit-agent',
                    'controller-user',
                    'model-user',
                ],
                'Doc': 'pinger describes a resource that can be pinged.\n',
            }],
            'TypeInfo': {'Types': {}},
        },
        'want_files': {
            'pinger-v42.js': helpers.read_data('pinger.js'),
        },
    }, {
        'about': 'single facade with definitions',
        'schema': {
            'Facades': [{
                'Name': 'AllWatcher',
                'Version': 1,
                'Doc': 'Watch all!',
                'Methods': [{
                    'Name': 'Next',
                    'Result': {
                        'Name': 'github.com/juju/juju/apiserver/params'
                                '#AllWatcherNextResults',
                    },
                }, {
                    'Name': 'Stop',
                    'Doc': 'Stop stops the watcher.\n'
                }],
                'AvailableTo': ['model-user'],
            }],
            'TypeInfo': {'Types': {
                'github.com/juju/juju/apiserver/params'
                '#AllWatcherNextResults': {
                    'Name': 'github.com/juju/juju/apiserver/params'
                            '#AllWatcherNextResults',
                    'Kind': 'struct',
                    'Fields': [{
                        'Name': 'Deltas',
                        'Type': {
                            'Kind': 'slice',
                            'Elem': {
                                'Name': 'github.com/juju/juju/state/'
                                        'multiwatcher#Delta',
                            },
                        },
                        'Tag': 'json:"deltas"',
                    }],
                },
                'github.com/juju/juju/state/multiwatcher#Delta': {
                    'Name': 'github.com/juju/juju/state/multiwatcher#Delta',
                    'Kind': 'struct',
                    'Methods': {},
                    'Fields': [{
                        'Name': 'Removed',
                        'Type': {
                            'Name': 'bool',
                            'Kind': 'bool',
                        },
                        'Tag': 'json:"removed"',
                    }, {
                        'Name': 'Entity',
                        'Type': {
                            'Name': 'github.com/juju/juju/state/multiwatcher'
                                    '#EntityInfo',
                        },
                        'Tag': 'json:"entity"',
                    }],
                },
                'github.com/juju/juju/state/multiwatcher#EntityInfo': {
                    'Name': 'github.com/juju/juju/state/multiwatcher'
                            '#EntityInfo',
                    'Kind': 'interface',
                    'Methods': {
                        'EntityId': {
                            'PtrReceiver': False,
                            'Name': 'EntityId',
                            'Type': {
                                'Kind': 'func',
                                'Out': [{
                                    'Name': 'github.com/juju/juju/state/'
                                            'multiwatcher#EntityId',
                                }],
                            },
                        },
                    },
                },
            }},
        },
        'want_files': {
            'all-watcher-v1.js': helpers.read_data('watcher.js'),
        },
    }, {
        'about': 'multiple facades',
        'schema': {
            'Facades': [{
                'Name': 'Bundle',
                'Version': 1,
                'Doc': 'Bundle defines the API endpoint used for changes.\n',
                'Methods': [{
                    'Name': 'GetChanges',
                    'Doc': 'GetChanges returns the list of changes required '
                           'to deploy the given\nbundle data.\n',
                    'Param': {
                        'Name': 'github.com/juju/juju/apiserver/params'
                                '#BundleChangesParams',
                    },
                    'Result': {
                        'Name': 'github.com/juju/juju/apiserver/params'
                                '#BundleChangesResults',
                    },
                }],
                'AvailableTo': ['controller-user', 'model-user'],
            }, {
                'Name': 'Annotations',
                'Version': 2,
                'Doc': 'Annotations!\n',
                'Methods': [{
                    'Name': 'Get',
                    'Doc': 'Get returns annotations for given entities.\n'
                           'If annotations cannot be retrieved for a given '
                           'entity, an error is returned.\nEach entity is '
                           'treated independently and, hence, will fail or '
                           'succeed independently.\n',
                    'Param': {
                        'Name': 'github.com/juju/juju/apiserver/params'
                                '#Entities',
                    },
                    'Result': {
                        'Name': 'github.com/juju/juju/apiserver/params'
                                '#AnnotationsGetResults',
                    },
                }, {
                    'Name': 'Set',
                    'Doc': 'Set stores annotations for given entities\n',
                    'Param': {
                        'Name': 'github.com/juju/juju/apiserver/params'
                                '#AnnotationsSet',
                    },
                    'Result': {
                        'Name': 'github.com/juju/juju/apiserver/params'
                                '#ErrorResults',
                    },
                }],
                'AvailableTo': ['model-user'],
            }],
            'TypeInfo': {'Types': {
                'github.com/juju/juju/apiserver/params#BundleChangesParams': {
                    'Name': 'github.com/juju/juju/apiserver/params'
                            '#BundleChangesParams',
                    'Kind': 'struct',
                    'Fields': [{
                        'Name': 'BundleDataYAML',
                        'Type': {
                            'Name': 'string',
                            'Kind': 'string',
                        },
                        'Tag': 'json:"yaml"',
                    },
                    ],
                },
                'github.com/juju/juju/apiserver/params#BundleChangesResults': {
                    'Name': 'github.com/juju/juju/apiserver/params'
                            '#BundleChangesResults',
                    'Kind': 'struct',
                    'Fields': [{
                        'Name': 'Changes',
                        'Type': {
                            'Kind': 'slice',
                            'Elem': {
                                'Kind': 'ptr',
                                'Elem': {
                                    'Name': 'github.com/juju/juju/apiserver/'
                                            'params#BundleChange',
                                },
                            },
                        },
                        'Tag': 'json:"changes,omitempty"',
                    }, {
                        'Name': 'Errors',
                        'Type': {
                            'Kind': 'slice',
                            'Elem': {
                                'Name': 'string',
                                'Kind': 'string',
                            },
                        },
                        'Tag': 'json:"errors,omitempty"',
                    }],
                },
                'github.com/juju/juju/apiserver/params#BundleChange': {
                    'Name': 'github.com/juju/juju/apiserver/params'
                            '#BundleChange',
                    'Kind': 'struct',
                    'Fields': [{
                        'Name': 'Id',
                        'Type': {
                            'Name': 'string',
                            'Kind': 'string',
                        },
                        'Tag': 'json:"id"',
                    }, {
                        'Name': 'Method',
                        'Type': {
                            'Name': 'string',
                            'Kind': 'string',
                        },
                        'Tag': 'json:"method"',
                    }, {
                        'Name': 'Args',
                        'Type': {
                            'Kind': 'slice',
                            'Elem': {
                                'Kind': 'interface',
                            },
                        },
                        'Tag': 'json:"args"',
                    }, {
                        'Name': 'Requires',
                        'Type': {
                            'Kind': 'slice',
                            'Elem': {
                                'Name': 'string',
                                'Kind': 'string',
                            },
                        },
                        'Tag': 'json:"requires"',
                    }],
                },
                'github.com/juju/juju/apiserver/params#Entities': {
                    'Name': 'github.com/juju/juju/apiserver/params#Entities',
                    'Kind': 'struct',
                    'Fields': [{
                        'Name': 'Entities',
                        'Type': {
                            'Kind': 'slice',
                            'Elem': {
                                'Name': 'github.com/juju/juju/apiserver/'
                                        'params#Entity',
                            },
                        },
                        'Tag': 'json:"entities"',
                    }],
                },
                'github.com/juju/juju/apiserver/params#Entity': {
                    'Name': 'github.com/juju/juju/apiserver/params#Entity',
                    'Kind': 'struct',
                    'Fields': [{
                        'Name': 'Tag',
                        'Type': {
                            'Name': 'string',
                            'Kind': 'string',
                        },
                        'Tag': 'json:"tag"',
                    }],
                },
                'github.com/juju/juju/apiserver/params'
                '#AnnotationsGetResults': {
                    'Name': 'github.com/juju/juju/apiserver/params'
                            '#AnnotationsGetResults',
                    'Kind': 'struct',
                    'Fields': [{
                        'Name': 'Results',
                        'Type': {
                            'Kind': 'slice',
                            'Elem': {
                                'Name': 'github.com/juju/juju/apiserver/'
                                        'params#AnnotationsGetResult',
                            },
                        },
                        'Tag': 'json:"results"',
                    }],
                },
                'github.com/juju/juju/apiserver/params#AnnotationsGetResult': {
                    'Name': 'github.com/juju/juju/apiserver/params'
                            '#AnnotationsGetResult',
                    'Kind': 'struct',
                    'Fields': [{
                        'Name': 'EntityTag',
                        'Type': {
                            'Name': 'string',
                            'Kind': 'string',
                        },
                        'Tag': 'json:"entity"',
                    }, {
                        'Name': 'Annotations',
                        'Type': {
                            'Kind': 'map',
                            'Elem': {
                                'Name': 'string',
                                'Kind': 'string',
                            },
                            'Key': {
                                'Name': 'string',
                                'Kind': 'string',
                            },
                        },
                        'Tag': 'json:"annotations"',
                    }, {
                        'Name': 'Error',
                        'Type': {
                            'Name': 'github.com/juju/juju/apiserver/params'
                                    '#ErrorResult',
                        },
                        'Tag': 'json:"error,omitempty"',
                    }],
                },
                'github.com/juju/juju/apiserver/params#ErrorResults': {
                    'Name': 'github.com/juju/juju/apiserver/params'
                            '#ErrorResults',
                    'Kind': 'struct',
                    'Fields': [{
                        'Name': 'Results',
                        'Type': {
                            'Kind': 'slice',
                            'Elem': {
                                'Name': 'github.com/juju/juju/apiserver/'
                                        'params#ErrorResult',
                            },
                        },
                        'Tag': 'json:"results"',
                    }],
                },
                'github.com/juju/juju/apiserver/params#ErrorResult': {
                    'Name': 'github.com/juju/juju/apiserver/params'
                            '#ErrorResult',
                    'Kind': 'struct',
                    'Fields': [{
                        'Name': 'Error',
                        'Type': {
                            'Kind': 'ptr',
                            'Elem': {
                                'Name': 'github.com/juju/juju/apiserver/'
                                        'params#Error',
                            },
                        },
                        'Tag': 'json:"error,omitempty"',
                    }],
                },
                'github.com/juju/juju/apiserver/params#Error': {
                    'Name': 'github.com/juju/juju/apiserver/params#Error',
                    'Kind': 'struct',
                    'Fields': [{
                        'Name': 'Message',
                        'Type': {
                            'Name': 'string',
                            'Kind': 'string',
                        },
                        'Tag': 'json:"message"',
                    }, {
                        'Name': 'Code',
                        'Type': {
                            'Name': 'string',
                            'Kind': 'string',
                        },
                        'Tag': 'json:"code"',
                    }],
                },
                'github.com/juju/juju/apiserver/params#AnnotationsSet': {
                    'Name': 'github.com/juju/juju/apiserver/params'
                            '#AnnotationsSet',
                    'Kind': 'struct',
                    'Fields': [{
                        'Name': 'Annotations',
                        'Type': {
                            'Kind': 'slice',
                            'Elem': {
                                'Name': 'github.com/juju/juju/apiserver/'
                                        'params#EntityAnnotations',
                            },
                        },
                        'Tag': 'json:"annotations"',
                    }],
                },
                'github.com/juju/juju/apiserver/params#EntityAnnotations': {
                    'Name': 'github.com/juju/juju/apiserver/params'
                            '#EntityAnnotations',
                    'Kind': 'struct',
                    'Fields': [{
                        'Name': 'EntityTag',
                        'Type': {
                            'Name': 'string',
                            'Kind': 'string',
                        },
                        'Tag': 'json:"entity"',
                    }, {
                        'Name': 'Annotations',
                        'Type': {
                            'Kind': 'map',
                            'Elem': {
                                'Name': 'string',
                                'Kind': 'string',
                            },
                            'Key': {
                                'Name': 'string',
                                'Kind': 'string',
                            },
                        },
                        'Tag': 'json:"annotations"',
                    }],
                },
            }},
        },
        'want_files': {
            'annotations-v2.js': helpers.read_data('annotations.js'),
            'bundle-v1.js': helpers.read_data('bundle.js'),
        },
    }, {
        'about': 'recursive properties',
        'schema': {
            'Facades': [{
                'Name': 'Recursive',
                'Version': 47,
                'Methods': [{
                    'Name': 'FullStatus',
                    'Result': {
                        'Name': 'github.com/juju/juju#RecursiveStruct',
                    },
                }],
                'AvailableTo': ['model-user'],
            }],
            'TypeInfo': {'Types': {
                'github.com/juju/juju#RecursiveStruct': {
                    'Name': 'github.com/juju/juju#RecursiveStruct',
                    'Kind': 'struct',
                    'Fields': [{
                        'Name': 'Self',
                        'Type': {
                            'Name': 'github.com/juju/juju#RecursiveStruct',
                        },
                        'Tag': 'json:"self"',
                    }],
                },
            }},
        },
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
        with helpers.patch_datetime_utcnow():
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
            self.assertEqual(
                got_code, want_code,
                '\n### CODE START ###\n{}\n### CODE END ###'.format(got_code))
