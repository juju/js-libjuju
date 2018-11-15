// Copyright 2018 Canonical Ltd.
'use strict';

const listModelSummaries = {
  'request-id': 5,
  'response': {
    'results': [{
      'result': {
        'name': 'group-test',
        'uuid': '57650e3c-815f-4540-89df-81fd5d70b7ef',
        'type': '',
        'controller-uuid': 'a030379b-940f-4760-9fcf-3062b41a04e7',
        'provider-type': 'gce',
        'default-series': 'bionic',
        'cloud-tag': 'cloud-google',
        'cloud-region': 'us-central1',
        'cloud-credential-tag': 'cloudcred-google_thedr@external_admin',
        'owner-tag': 'user-thedr@external',
        'life': 'alive',
        'status': {
          'status': 'available',
          'info': '',
          'since': '2018-11-07T05:02:42.436Z'
        },
        'user-access': 'admin',
        'last-connection': null,
        'counts': [{
          'entity': 'machines',
          'count': 0
        }, {
          'entity': 'cores',
          'count': 0
        }],
        'sla': null,
        'agent-version': '2.4.5'
      }
    }, {
      'result': {
        'name': 'mymodel',
        'uuid': '9ed7302e-6f44-4c87-8ac5-68bb38efb843',
        'type': '',
        'controller-uuid': 'a030379b-940f-4760-9fcf-3062b41a04e7',
        'provider-type': 'gce',
        'default-series': 'xenial',
        'cloud-tag': 'cloud-google',
        'cloud-region': 'us-central1',
        'cloud-credential-tag': 'cloudcred-google_thedr@external_admin',
        'owner-tag': 'user-thedr@external',
        'life': 'alive',
        'status': {
          'status': 'available',
          'info': '',
          'since': '2018-11-07T05:02:41.712Z'
        },
        'user-access': 'admin',
        'last-connection': null,
        'counts': [{
          'entity': 'machines',
          'count': 0
        }, {
          'entity': 'cores',
          'count': 0
        }],
        'sla': null,
        'agent-version': '2.4.5'
      }
    }, {
      'result': {
        'name': 'single-cred',
        'uuid': '9ed7302e-6f22-4c87-8ac5-68bb38efb843',
        'type': '',
        'controller-uuid': 'a030379b-940f-4760-9fcf-3022b41a04e7',
        'provider-type': 'gce',
        'default-series': 'xenial',
        'cloud-tag': 'cloud-google',
        'cloud-region': 'us-central1',
        'cloud-credential-tag': 'cloudcred-google_thedr@external_juju',
        'owner-tag': 'user-thedr@external',
        'life': 'alive',
        'status': {
          'status': 'available',
          'info': '',
          'since': '2018-11-07T05:02:41.712Z'
        },
        'user-access': 'admin',
        'last-connection': null,
        'counts': [{
          'entity': 'machines',
          'count': 0
        }, {
          'entity': 'cores',
          'count': 0
        }],
        'sla': null,
        'agent-version': '2.4.5'
      }
    }, {
      'result': {
        'name': 'kpi',
        'uuid': '06b11eb5-abd6-48f3-8910-b54cf5905e60',
        'type': '',
        'controller-uuid': 'a030379b-940f-4760-9fcf-3062b41a04e7',
        'provider-type': 'gce',
        'default-series': 'xenial',
        'cloud-tag': 'cloud-google',
        'cloud-region': 'us-east1',
        'cloud-credential-tag': 'cloudcred-google_radman@external_google-radmanbot',
        'owner-tag': 'user-radman@external',
        'life': 'alive',
        'status': {
          'status': 'available',
          'info': '',
          'since': '2018-10-29T08:12:59.512Z'
        },
        'user-access': 'read',
        'last-connection': null,
        'counts': [{
          'entity': 'machines',
          'count': 13
        }, {
          'entity': 'cores',
          'count': 13
        }],
        'sla': null,
        'agent-version': '2.4.3'
      }
    }, {
      'result': {
        'name': 'ci',
        'uuid': '4e8a5213-c34a-4ac9-83fa-1175165467d7',
        'type': '',
        'controller-uuid': 'a030379b-940f-4760-9fcf-3062b41a04e7',
        'provider-type': 'gce',
        'default-series': 'xenial',
        'cloud-tag': 'cloud-google',
        'cloud-region': 'us-east1',
        'cloud-credential-tag': 'cloudcred-google_bigboss@external_gce',
        'owner-tag': 'user-bigboss@external',
        'life': 'alive',
        'status': {
          'status': 'available',
          'info': '',
          'since': '2018-10-29T08:12:58.792Z'
        },
        'user-access': 'admin',
        'last-connection': null,
        'counts': [{
          'entity': 'machines',
          'count': 3
        }, {
          'entity': 'cores',
          'count': 5
        }],
        'sla': null,
        'agent-version': '2.2.6'
      }
    }]
  }
};

const destroyModelsError = {
  'request-id': 7,
  response: {
    results: [{
      error: {
        message: 'unable to destroy model',
      }
    }]
  }
};

module.exports = {
  destroyModelsError,
  listModelSummaries
};
