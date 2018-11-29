// Copyright 2018 Canonical Ltd.
'use strict';

const watchAll = {
  'request-id': 3,
  'response': {
    'watcher-id': '1'
  }
};

const next = {
  'request-id': 6,
  'response': {
    'deltas': [
      ['relation', 'change', {
        'model-uuid': '99dc7d5b-ae90-40ce-809d-251f03df97dc',
        'key': 'elasticsearch:peer',
        'id': 0,
        'endpoints': [{
          'application-name': 'elasticsearch',
          'relation': {
            'name': 'peer',
            'role': 'peer',
            'interface': 'http',
            'optional': false,
            'limit': 1,
            'scope': 'global'
          }
        }]
      }],
      ['annotation', 'change', {
        'model-uuid': '99dc7d5b-ae90-40ce-809d-251f03df97dc',
        'tag': 'application-elasticsearch',
        'annotations': {
          'gui-x': '300',
          'gui-y': '300'
        }
      }],
      ['annotation', 'change', {
        'model-uuid': '99dc7d5b-ae90-40ce-809d-251f03df97dc',
        'tag': 'application-kibana',
        'annotations': {
          'gui-x': '695',
          'gui-y': '395'
        }
      }],
      ['relation', 'change', {
        'model-uuid': '99dc7d5b-ae90-40ce-809d-251f03df97dc',
        'key': 'kibana:rest elasticsearch:client',
        'id': 1,
        'endpoints': [{
          'application-name': 'kibana',
          'relation': {
            'name': 'rest',
            'role': 'requirer',
            'interface': 'elasticsearch',
            'optional': false,
            'limit': 1,
            'scope': 'global'
          }
        }, {
          'application-name': 'elasticsearch',
          'relation': {
            'name': 'client',
            'role': 'provider',
            'interface': 'elasticsearch',
            'optional': false,
            'limit': 0,
            'scope': 'global'
          }
        }]
      }],
      ['machine', 'change', {
        'model-uuid': '99dc7d5b-ae90-40ce-809d-251f03df97dc',
        'id': '0',
        'instance-id': 'juju-df97dc-0',
        'agent-status': {
          'current': 'started',
          'message': '',
          'since': '2018-11-28T23:08:57.473298907Z',
          'version': ''
        },
        'instance-status': {
          'current': 'running',
          'message': 'RUNNING',
          'since': '2018-11-28T23:07:47.871294558Z',
          'version': ''
        },
        'life': 'alive',
        'series': 'xenial',
        'supported-containers': ['lxd'],
        'supported-containers-known': true,
        'hardware-characteristics': {
          'arch': 'amd64',
          'mem': 1700,
          'root-disk': 10240,
          'cpu-cores': 1,
          'cpu-power': 138,
          'availability-zone': 'us-east1-b'
        },
        'jobs': ['JobHostUnits'],
        'addresses': [{
          'value': '35.185.84.11',
          'type': 'ipv4',
          'scope': 'public'
        }, {
          'value': '10.142.0.2',
          'type': 'ipv4',
          'scope': 'local-cloud'
        }, {
          'value': '252.0.32.1',
          'type': 'ipv4',
          'scope': 'local-fan'
        }, {
          'value': '127.0.0.1',
          'type': 'ipv4',
          'scope': 'local-machine'
        }, {
          'value': '::1',
          'type': 'ipv6',
          'scope': 'local-machine'
        }],
        'has-vote': false,
        'wants-vote': false
      }],
      ['machine', 'change', {
        'model-uuid': '99dc7d5b-ae90-40ce-809d-251f03df97dc',
        'id': '1',
        'instance-id': 'juju-df97dc-1',
        'agent-status': {
          'current': 'started',
          'message': '',
          'since': '2018-11-28T23:09:19.07761864Z',
          'version': ''
        },
        'instance-status': {
          'current': 'running',
          'message': 'RUNNING',
          'since': '2018-11-28T23:08:06.990555658Z',
          'version': ''
        },
        'life': 'alive',
        'series': 'bionic',
        'supported-containers': ['lxd'],
        'supported-containers-known': true,
        'hardware-characteristics': {
          'arch': 'amd64',
          'mem': 1700,
          'root-disk': 10240,
          'cpu-cores': 1,
          'cpu-power': 138,
          'availability-zone': 'us-east1-c'
        },
        'jobs': ['JobHostUnits'],
        'addresses': [{
          'value': '35.196.141.122',
          'type': 'ipv4',
          'scope': 'public'
        }, {
          'value': '10.142.0.3',
          'type': 'ipv4',
          'scope': 'local-cloud'
        }, {
          'value': '252.0.48.1',
          'type': 'ipv4',
          'scope': 'local-fan'
        }, {
          'value': '127.0.0.1',
          'type': 'ipv4',
          'scope': 'local-machine'
        }, {
          'value': '::1',
          'type': 'ipv6',
          'scope': 'local-machine'
        }],
        'has-vote': false,
        'wants-vote': false
      }],
      ['application', 'change', {
        'model-uuid': '99dc7d5b-ae90-40ce-809d-251f03df97dc',
        'name': 'elasticsearch',
        'exposed': false,
        'charm-url': 'cs:elasticsearch-32',
        'owner-tag': '',
        'life': 'alive',
        'min-units': 0,
        'constraints': {},
        'config': {
          'apt-key-url': 'https://artifacts.elastic.co/GPG-KEY-elasticsearch',
          'apt-repository': 'deb https://artifacts.elastic.co/packages/5.x/apt stable main',
          'cluster-name': 'elasticsearch',
          'es-heap-size': 3,
          'firewall_enabled': true,
          'gpg-key-id': 'D88E42B4'
        },
        'subordinate': false,
        'status': {
          'current': 'active',
          'message': 'Ready',
          'since': '2018-11-28T23:10:37.044158497Z',
          'version': ''
        },
        'workload-version': ''
      }],
      ['unit', 'change', {
        'model-uuid': '99dc7d5b-ae90-40ce-809d-251f03df97dc',
        'name': 'elasticsearch/0',
        'application': 'elasticsearch',
        'series': 'bionic',
        'charm-url': 'cs:elasticsearch-32',
        'public-address': '35.196.141.122',
        'private-address': '10.142.0.3',
        'machine-id': '1',
        'ports': [{
          'protocol': 'tcp',
          'number': 9200
        }],
        'port-ranges': [{
          'from-port': 9200,
          'to-port': 9200,
          'protocol': 'tcp'
        }],
        'subordinate': false,
        'workload-status': {
          'current': 'active',
          'message': 'Ready',
          'since': '2018-11-28T23:10:37.044158497Z',
          'version': ''
        },
        'agent-status': {
          'current': 'idle',
          'message': '',
          'since': '2018-11-28T23:10:44.724765857Z',
          'version': ''
        }
      }],
      ['application', 'change', {
        'model-uuid': '99dc7d5b-ae90-40ce-809d-251f03df97dc',
        'name': 'kibana',
        'exposed': false,
        'charm-url': 'cs:kibana-19',
        'owner-tag': '',
        'life': 'alive',
        'min-units': 0,
        'constraints': {},
        'config': {
          'kibana_source': 'https://artifacts.elastic.co/downloads/kibana/kibana-5.6.7-linux-x86_64.tar.gz',
          'kibana_source_checksum': 'fba56f9259dbfb9dab4003cf9d00b04549c9b8b1',
          'port': 80
        },
        'subordinate': false,
        'status': {
          'current': 'active',
          'message': 'ready',
          'since': '2018-11-28T23:10:45.176458927Z',
          'version': ''
        },
        'workload-version': ''
      }],
      ['unit', 'change', {
        'model-uuid': '99dc7d5b-ae90-40ce-809d-251f03df97dc',
        'name': 'kibana/0',
        'application': 'kibana',
        'series': 'xenial',
        'charm-url': 'cs:kibana-19',
        'public-address': '35.185.84.11',
        'private-address': '10.142.0.2',
        'machine-id': '0',
        'ports': [{
          'protocol': 'tcp',
          'number': 80
        }, {
          'protocol': 'tcp',
          'number': 9200
        }],
        'port-ranges': [{
          'from-port': 80,
          'to-port': 80,
          'protocol': 'tcp'
        }, {
          'from-port': 9200,
          'to-port': 9200,
          'protocol': 'tcp'
        }],
        'subordinate': false,
        'workload-status': {
          'current': 'active',
          'message': 'ready',
          'since': '2018-11-28T23:10:45.176458927Z',
          'version': ''
        },
        'agent-status': {
          'current': 'idle',
          'message': '',
          'since': '2018-11-28T23:10:45.295572438Z',
          'version': ''
        }
      }]
    ]
  }
};

module.exports = {
  next,
  watchAll
};
