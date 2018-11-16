/**
  Juju CAASOperatorProvisioner version 1.
  This API facade is available on model connections.

  NOTE: this file has been generated by the generate command in js-libjuju
  on Fri 2018/11/16 13:11:58 UTC. Do not manually edit this file.
*/

'use strict';

const {autoBind, createAsyncHandler} = require('../transform.js');

/**
  There is no documentation for this facade.
*/
class CAASOperatorProvisionerV1 {

  constructor(transport, info) {
    this._transport = transport;
    this._info = info;
    this.version = 1;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    APIAddresses returns the list of addresses used to connect to the API.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          error: {
            message: string,
            code: string,
            info: {
              macaroon: anything,
              macaroonPath: string
            }
          },
          result: []string
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  apiAddresses(callback) {
    return new Promise((resolve, reject) => {
      const params = {};
      // Prepare the request to the Juju API.
      const req = {
        type: 'CAASOperatorProvisioner',
        request: 'APIAddresses',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#StringsResult
        if (resp) {
          result = {};
          // github.com/juju/juju/apiserver/params#Error
          if (resp['error']) {
            result.error = {};
            result.error.message = resp['error']['message'];
            result.error.code = resp['error']['code'];
            // github.com/juju/juju/apiserver/params#ErrorInfo
            if (resp['error']['info']) {
              result.error.info = {};
              // gopkg.in/macaroon.v2-unstable#Macaroon
              result.error.info.macaroon = resp['error']['info']['macaroon'];
              result.error.info.macaroonPath = resp['error']['info']['macaroon-path'];
            }
          }
          result.result = [];
          resp['result'] = resp['result'] || [];
          for (let i = 0; i < resp['result'].length; i++) {
            result.result[i] = resp['result'][i];
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    APIHostPorts returns the API server addresses.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          servers: [][]{
            address: {
              value: string,
              type: string,
              scope: string,
              spaceName: string
            },
            port: int
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  apiHostPorts(callback) {
    return new Promise((resolve, reject) => {
      const params = {};
      // Prepare the request to the Juju API.
      const req = {
        type: 'CAASOperatorProvisioner',
        request: 'APIHostPorts',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#APIHostPortsResult
        if (resp) {
          result = {};
          result.servers = [];
          resp['servers'] = resp['servers'] || [];
          for (let i = 0; i < resp['servers'].length; i++) {
            result.servers[i] = [];
            resp['servers'][i] = resp['servers'][i] || [];
            for (let i2 = 0; i2 < resp['servers'][i].length; i2++) {
              // github.com/juju/juju/apiserver/params#HostPort
              if (resp['servers'][i][i2]) {
                result.servers[i][i2] = {};
                // github.com/juju/juju/apiserver/params#Address
                if (resp['servers'][i][i2]['Address']) {
                  result.servers[i][i2].address = {};
                  result.servers[i][i2].address.value = resp['servers'][i][i2]['Address']['value'];
                  result.servers[i][i2].address.type = resp['servers'][i][i2]['Address']['type'];
                  result.servers[i][i2].address.scope = resp['servers'][i][i2]['Address']['scope'];
                  result.servers[i][i2].address.spaceName = resp['servers'][i][i2]['Address']['space-name'];
                }
                result.servers[i][i2].port = resp['servers'][i][i2]['port'];
              }
            }
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    Life returns the life status of every supplied entity, where available.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          entities: []{
            tag: string
          }
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          results: []{
            life: string,
            error: {
              message: string,
              code: string,
              info: {
                macaroon: anything,
                macaroonPath: string
              }
            }
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  life(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#Entities
      if (args) {
        params = {};
        params['entities'] = [];
        args.entities = args.entities || [];
        for (let i = 0; i < args.entities.length; i++) {
          // github.com/juju/juju/apiserver/params#Entity
          if (args.entities[i]) {
            params['entities'][i] = {};
            params['entities'][i]['tag'] = args.entities[i].tag;
          }
        }
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'CAASOperatorProvisioner',
        request: 'Life',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#LifeResults
        if (resp) {
          result = {};
          result.results = [];
          resp['results'] = resp['results'] || [];
          for (let i = 0; i < resp['results'].length; i++) {
            // github.com/juju/juju/apiserver/params#LifeResult
            if (resp['results'][i]) {
              result.results[i] = {};
              // github.com/juju/juju/apiserver/params#Life
              result.results[i].life = resp['results'][i]['life'];
              // github.com/juju/juju/apiserver/params#Error
              if (resp['results'][i]['error']) {
                result.results[i].error = {};
                result.results[i].error.message = resp['results'][i]['error']['message'];
                result.results[i].error.code = resp['results'][i]['error']['code'];
                // github.com/juju/juju/apiserver/params#ErrorInfo
                if (resp['results'][i]['error']['info']) {
                  result.results[i].error.info = {};
                  // gopkg.in/macaroon.v2-unstable#Macaroon
                  result.results[i].error.info.macaroon = resp['results'][i]['error']['info']['macaroon'];
                  result.results[i].error.info.macaroonPath = resp['results'][i]['error']['info']['macaroon-path'];
                }
              }
            }
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    ModelUUID returns the model UUID to connect to the model that the current
    connection is for.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          error: {
            message: string,
            code: string,
            info: {
              macaroon: anything,
              macaroonPath: string
            }
          },
          result: string
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  modelUUID(callback) {
    return new Promise((resolve, reject) => {
      const params = {};
      // Prepare the request to the Juju API.
      const req = {
        type: 'CAASOperatorProvisioner',
        request: 'ModelUUID',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#StringResult
        if (resp) {
          result = {};
          // github.com/juju/juju/apiserver/params#Error
          if (resp['error']) {
            result.error = {};
            result.error.message = resp['error']['message'];
            result.error.code = resp['error']['code'];
            // github.com/juju/juju/apiserver/params#ErrorInfo
            if (resp['error']['info']) {
              result.error.info = {};
              // gopkg.in/macaroon.v2-unstable#Macaroon
              result.error.info.macaroon = resp['error']['info']['macaroon'];
              result.error.info.macaroonPath = resp['error']['info']['macaroon-path'];
            }
          }
          result.result = resp['result'];
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    OperatorProvisioningInfo returns the info needed to provision an operator.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          imagePath: string,
          version: anything,
          apiAddresses: []string,
          tags: map[string]string,
          charmStorage: {
            storagename: string,
            size: int,
            provider: string,
            attributes: map[string]anything,
            tags: map[string]string,
            attachment: {
              provider: string,
              mountPoint: string,
              readOnly: bool
            }
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  operatorProvisioningInfo(callback) {
    return new Promise((resolve, reject) => {
      const params = {};
      // Prepare the request to the Juju API.
      const req = {
        type: 'CAASOperatorProvisioner',
        request: 'OperatorProvisioningInfo',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#OperatorProvisioningInfo
        if (resp) {
          result = {};
          result.imagePath = resp['image-path'];
          // github.com/juju/version#Number
          result.version = resp['version'];
          result.apiAddresses = [];
          resp['api-addresses'] = resp['api-addresses'] || [];
          for (let i = 0; i < resp['api-addresses'].length; i++) {
            result.apiAddresses[i] = resp['api-addresses'][i];
          }
          result.tags = {};
          resp['tags'] = resp['tags'] || {};
          for (let k in resp['tags']) {
            result.tags[k] = resp['tags'][k];
          }
          // github.com/juju/juju/apiserver/params#KubernetesFilesystemParams
          if (resp['charm-storage']) {
            result.charmStorage = {};
            result.charmStorage.storagename = resp['charm-storage']['storagename'];
            result.charmStorage.size = resp['charm-storage']['size'];
            result.charmStorage.provider = resp['charm-storage']['provider'];
            result.charmStorage.attributes = {};
            resp['charm-storage']['attributes'] = resp['charm-storage']['attributes'] || {};
            for (let k in resp['charm-storage']['attributes']) {
              result.charmStorage.attributes[k] = resp['charm-storage']['attributes'][k];
            }
            result.charmStorage.tags = {};
            resp['charm-storage']['tags'] = resp['charm-storage']['tags'] || {};
            for (let k in resp['charm-storage']['tags']) {
              result.charmStorage.tags[k] = resp['charm-storage']['tags'][k];
            }
            // github.com/juju/juju/apiserver/params#KubernetesFilesystemAttachmentParams
            if (resp['charm-storage']['attachment']) {
              result.charmStorage.attachment = {};
              result.charmStorage.attachment.provider = resp['charm-storage']['attachment']['provider'];
              result.charmStorage.attachment.mountPoint = resp['charm-storage']['attachment']['mount-point'];
              result.charmStorage.attachment.readOnly = resp['charm-storage']['attachment']['read-only'];
            }
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    SetPasswords sets the given password for each supplied entity, if possible.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          changes: []{
            tag: string,
            password: string
          }
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          results: []{
            error: {
              message: string,
              code: string,
              info: {
                macaroon: anything,
                macaroonPath: string
              }
            }
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  setPasswords(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#EntityPasswords
      if (args) {
        params = {};
        params['changes'] = [];
        args.changes = args.changes || [];
        for (let i = 0; i < args.changes.length; i++) {
          // github.com/juju/juju/apiserver/params#EntityPassword
          if (args.changes[i]) {
            params['changes'][i] = {};
            params['changes'][i]['tag'] = args.changes[i].tag;
            params['changes'][i]['password'] = args.changes[i].password;
          }
        }
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'CAASOperatorProvisioner',
        request: 'SetPasswords',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#ErrorResults
        if (resp) {
          result = {};
          result.results = [];
          resp['results'] = resp['results'] || [];
          for (let i = 0; i < resp['results'].length; i++) {
            // github.com/juju/juju/apiserver/params#ErrorResult
            if (resp['results'][i]) {
              result.results[i] = {};
              // github.com/juju/juju/apiserver/params#Error
              if (resp['results'][i]['error']) {
                result.results[i].error = {};
                result.results[i].error.message = resp['results'][i]['error']['message'];
                result.results[i].error.code = resp['results'][i]['error']['code'];
                // github.com/juju/juju/apiserver/params#ErrorInfo
                if (resp['results'][i]['error']['info']) {
                  result.results[i].error.info = {};
                  // gopkg.in/macaroon.v2-unstable#Macaroon
                  result.results[i].error.info.macaroon = resp['results'][i]['error']['info']['macaroon'];
                  result.results[i].error.info.macaroonPath = resp['results'][i]['error']['info']['macaroon-path'];
                }
              }
            }
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    WatchAPIHostPorts watches the API server addresses.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          notifywatcherid: string,
          error: {
            message: string,
            code: string,
            info: {
              macaroon: anything,
              macaroonPath: string
            }
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  watchAPIHostPorts(callback) {
    return new Promise((resolve, reject) => {
      const params = {};
      // Prepare the request to the Juju API.
      const req = {
        type: 'CAASOperatorProvisioner',
        request: 'WatchAPIHostPorts',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#NotifyWatchResult
        if (resp) {
          result = {};
          result.notifywatcherid = resp['NotifyWatcherId'];
          // github.com/juju/juju/apiserver/params#Error
          if (resp['error']) {
            result.error = {};
            result.error.message = resp['error']['message'];
            result.error.code = resp['error']['code'];
            // github.com/juju/juju/apiserver/params#ErrorInfo
            if (resp['error']['info']) {
              result.error.info = {};
              // gopkg.in/macaroon.v2-unstable#Macaroon
              result.error.info.macaroon = resp['error']['info']['macaroon'];
              result.error.info.macaroonPath = resp['error']['info']['macaroon-path'];
            }
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    WatchApplications starts a StringsWatcher to watch CAAS applications
    deployed to this model.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          watcherId: string,
          changes: []string,
          error: {
            message: string,
            code: string,
            info: {
              macaroon: anything,
              macaroonPath: string
            }
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  watchApplications(callback) {
    return new Promise((resolve, reject) => {
      const params = {};
      // Prepare the request to the Juju API.
      const req = {
        type: 'CAASOperatorProvisioner',
        request: 'WatchApplications',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#StringsWatchResult
        if (resp) {
          result = {};
          result.watcherId = resp['watcher-id'];
          result.changes = [];
          resp['changes'] = resp['changes'] || [];
          for (let i = 0; i < resp['changes'].length; i++) {
            result.changes[i] = resp['changes'][i];
          }
          // github.com/juju/juju/apiserver/params#Error
          if (resp['error']) {
            result.error = {};
            result.error.message = resp['error']['message'];
            result.error.code = resp['error']['code'];
            // github.com/juju/juju/apiserver/params#ErrorInfo
            if (resp['error']['info']) {
              result.error.info = {};
              // gopkg.in/macaroon.v2-unstable#Macaroon
              result.error.info.macaroon = resp['error']['info']['macaroon'];
              result.error.info.macaroonPath = resp['error']['info']['macaroon-path'];
            }
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }
}


const wrappers = require('../wrappers.js');
if (wrappers.wrapCAASOperatorProvisioner) {
  // Decorate the facade class in order to improve user experience.
  CAASOperatorProvisionerV1 = wrappers.wrapCAASOperatorProvisioner(CAASOperatorProvisionerV1);
}

module.exports = CAASOperatorProvisionerV1;