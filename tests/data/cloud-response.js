// Copyright 2018 Canonical Ltd.
'use strict';

const clouds = {
  'request-id': 4,
  'response': {
    'clouds': {
      'cloud-aws': {
        'type': 'ec2',
        'auth-types': ['access-key'],
        'regions': [{
          'name': 'ap-northeast-1',
          'endpoint': 'https://ec2.ap-northeast-1.amazonaws.com'
        }, {
          'name': 'ap-northeast-2',
          'endpoint': 'https://ec2.ap-northeast-2.amazonaws.com'
        }, {
          'name': 'ap-south-1',
          'endpoint': 'https://ec2.ap-south-1.amazonaws.com'
        }, {
          'name': 'ap-southeast-1',
          'endpoint': 'https://ec2.ap-southeast-1.amazonaws.com'
        }, {
          'name': 'ap-southeast-2',
          'endpoint': 'https://ec2.ap-southeast-2.amazonaws.com'
        }, {
          'name': 'eu-central-1',
          'endpoint': 'https://ec2.eu-central-1.amazonaws.com'
        }, {
          'name': 'eu-west-1',
          'endpoint': 'https://ec2.eu-west-1.amazonaws.com'
        }, {
          'name': 'sa-east-1',
          'endpoint': 'https://ec2.sa-east-1.amazonaws.com'
        }, {
          'name': 'us-east-1',
          'endpoint': 'https://ec2.us-east-1.amazonaws.com'
        }, {
          'name': 'us-east-2',
          'endpoint': 'https://ec2.us-east-2.amazonaws.com'
        }, {
          'name': 'us-west-1',
          'endpoint': 'https://ec2.us-west-1.amazonaws.com'
        }, {
          'name': 'us-west-2',
          'endpoint': 'https://ec2.us-west-2.amazonaws.com'
        }]
      },
      'cloud-azure': {
        'type': 'azure',
        'auth-types': ['interactive', 'service-principal-secret'],
        'regions': [{
          'name': 'brazilsouth',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'canadaeast',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'centralindia',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'centralus',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'eastasia',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'eastus',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'eastus2',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'japaneast',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'japanwest',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'koreacentral',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'koreasouth',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'northeurope',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'southindia',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'uksouth',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'ukwest',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'westindia',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'westus2',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'australiaeast',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'australiasoutheast',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'canadacentral',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'northcentralus',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'southcentralus',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'southeastasia',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'westcentralus',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'westeurope',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }, {
          'name': 'westus',
          'endpoint': 'https://management.azure.com',
          'identity-endpoint': 'https://graph.windows.net',
          'storage-endpoint': 'https://core.windows.net'
        }]
      },
      'cloud-google': {
        'type': 'gce',
        'auth-types': ['jsonfile', 'oauth2'],
        'regions': [{
          'name': 'asia-east1',
          'endpoint': 'https://www.googleapis.com'
        }, {
          'name': 'europe-west1',
          'endpoint': 'https://www.googleapis.com'
        }, {
          'name': 'us-central1',
          'endpoint': 'https://www.googleapis.com'
        }, {
          'name': 'us-east1',
          'endpoint': 'https://www.googleapis.com'
        }]
      }
    }
  }
};

const userCredentials = {
  'request-id': 4,
  'response': {
    'results': [{
      'result': [
        'cloudcred-aws_thedr@external_base',
        'cloudcred-aws_thedr@external_tester'
      ]
    }, {
      'result': [
        'cloudcred-azure_thedr@external_default'
      ]
    }, {
      'result': [
        'cloudcred-google_thedr@external_admin',
        'cloudcred-google_thedr@external_default',
        'cloudcred-google_thedr@external_test2',
        'cloudcred-google_thedr@external_juju'
      ]
    }]
  }
};

module.exports = {
  clouds,
  userCredentials
};
