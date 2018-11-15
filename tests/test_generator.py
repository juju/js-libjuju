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
        'schema': {'Facades': 42, 'TypeInfo': {'Types': {}}},
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
        'want_jsfiles': {
            'pinger-v42.js': helpers.read_data('pinger.js'),
        },
        'want_mdfiles': {
            'pinger-v42.md': helpers.read_data('pinger.md'),
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
        'want_jsfiles': {
            'all-watcher-v1.js': helpers.read_data('watcher.js'),
        },
        'want_mdfiles': {
            'all-watcher-v1.md': helpers.read_data('watcher.md'),
        },
    }, {
        'about': 'single facade with MarshalJSON',
        'schema': {
            'Facades': [{
                'Name': 'Marshal',
                'Version': 0,
                'Doc': 'Watch anything!',
                'Methods': [{
                    'Name': 'Next',
                    'Result': {
                        'Name': 'github.com/juju/juju/apiserver/params'
                                '#AllWatcherNextResults',
                    },
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
                    'Methods': {'MarshalJSON': {}},
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
            }},
        },
        'want_jsfiles': {
            'marshal-v0.js': helpers.read_data('marshal.js'),
        },
        'want_mdfiles': {
            'marshal-v0.md': helpers.read_data('marshal.md'),
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
        'want_jsfiles': {
            'annotations-v2.js': helpers.read_data('annotations.js'),
            'bundle-v1.js': helpers.read_data('bundle.js'),
        },
        'want_mdfiles': {
            'annotations-v2.md': helpers.read_data('annotations.md'),
            'bundle-v1.md': helpers.read_data('bundle.md'),
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
        'want_jsfiles': {
            'recursive-v47.js': helpers.read_data('recursive.js'),
        },
        'want_mdfiles': {
            'recursive-v47.md': helpers.read_data('recursive.md'),
        },
    }]

    def test_generate_facades(self):
        # The generate command generates API facades.
        for test in self.tests:
            with self.subTest(test['about']):
                self.check_facades(
                    test.get('schema', ''),
                    test.get('want_jsfiles', {}),
                    test.get('want_mdfiles', {}),
                    test.get('want_error', ''),
                )

    def check_facades(self, schema, want_jsfiles, want_mdfiles, want_error):
        out = self.execute(schema, want_error=want_error)
        # Check generated code.
        self.check_files(os.path.join(out, 'facades'), want_jsfiles)
        self.check_files(os.path.join(out, 'doc'), want_mdfiles)

    def test_generate_index(self):
        # The documentation index is properly generated.
        test = self.get_multiple_facades_test()
        out = self.execute(test['schema'])
        self.check_files(os.path.join(out, 'doc'), {
            'index.md': helpers.read_data('index.md')})

    def test_generate_wrappers(self):
        # The documentation for wrappers is properly generated.
        test = self.get_multiple_facades_test()
        out = self.execute(test['schema'])
        self.check_files(os.path.join(out, 'doc'), {
            'wrappers.md': helpers.wrappers_content})

    def get_multiple_facades_test(self):
        for test in self.tests:
            if test['about'] == 'multiple facades':
                return test
        self.fail('multiple facades test not found')

    def execute(self, schema, want_error=None):
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
        else:
            self.assertIsNone(ctx.exc)
        return out

    def check_files(self, directory, want_files):
        for filename, want_content in want_files.items():
            with open(os.path.join(directory, filename)) as f:
                got_content = f.read().strip()
            self.assertEqual(
                got_content, want_content,
                '\n\n### START ###\n{}\n### END ###'.format(got_content))
