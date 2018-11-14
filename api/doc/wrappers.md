# Facade Wrappers

Some additional helpers and method wrappers are provided in order to make the
experience of consuming the Juju API more user-friendly. Those methods can be
accessed as usual via facades.

Go back to [index](index.md).

## admin.redirectInfo(callback)

RedirectInfo returns redirected host information for the model. In Juju it
always returns an error because the Juju controller does not multiplex
controllers.

- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors,
  the result is provided as an object like the following:
```javascript
{
  servers: []{
    value: string,
    type: string,
    scope: string,
    port: string
  },
  caCert: string
}
```
- *@return {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## allModelWatcher.next(watcherId, callback)

Ask for next watcher messages corresponding to changes in the models.

- *@param {String} watcherId* The id of the currently used watcher. The id is
  retrieved by calling the Controller.watchAllModels API call.
- *@param {Function} callback* Called when the next messages arrive, the
  callback receives an error and the changes. If there are no errors,
  changes are provided as an object like the following:
```javascript
{
  deltas: []anything
}
```
- *@return {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## allModelWatcher.stop(watcherId, callback)

Stop watching all models.

- *@param {String} watcherId* The id of the currently used watcher. The id is
  retrieved by calling the Controller.watchAllModels API call.
- *@param {Function} callback* Called after the watcher has been stopped, the
  callback receives an error.
- *@return {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## allWatcher.next(watcherId, callback)

Ask for next watcher messages corresponding to changes in the model.

- *@param {String} watcherId* The id of the currently used watcher. The id is
  retrieved by calling the Client.watchAll API call.
- *@param {Function} callback* Called when the next messages arrive, the
  callback receives an error and the changes. If there are no errors,
  changes are provided as an object like the following:
```javascript
{
  deltas: []anything
}
```
- *@return {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## allWatcher.stop(watcherId, callback)

Stop watching the model.

- *@param {String} watcherId* The id of the currently used watcher. The id is
  retrieved by calling the Client.watchAll API call.
- *@param {Function} callback* Called after the watcher has been stopped, the
  callback receives an error.
- *@return {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## application.addCharmAndDeploy(args, callback)

Add a charm store charm to the model and then deploy the application.

- *@param {Object} args* Arguments to be provided to Juju, as an object like
  the following:
```javascript
{
  charmUrl: string,
  application: string,
  series: string,
  channel: string,
  numUnits: int,
  config: map[string]string,
  configYaml: string,
  constraints: {
    arch: string,
    container: string,
    cores: int,
    cpuPower: int,
    mem: int,
    rootDisk: int,
    tags: []string,
    instanceType: string,
    spaces: []string,
    virtType: string
  },
  placement: []{
    scope: string,
    directive: string
  },
  policy: string,
  storage: map[string]{
    pool: string,
    size: int,
    count: int
  },
  attachStorage: []string,
  endpointBindings: map[string]string,
  resources: map[string]string
}
```
  The charmUrl, application and series (for multi-series charm) arguments
  are required.
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no connection
  errors, the deployment result is provided as an object like:
```javascript
{
  error: {
    message: string,
    code: string,
  }
}
```
- *@return {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## client.addMachine(args, callback)

Add a new machine to the model.

- *@param {Object} args* Arguments fot creating a machine, like the following:
```javascript
{
  series: string,
  constraints: {
    arch: string,
    container: string,
    cores: int,
    cpuPower: int,
    mem: int,
    rootDisk: int,
    tags: []string,
    instanceType: string,
    spaces: []string,
    virtType: string
  },
  jobs: []string,
  disks: []{
    pool: string,
    size: int,
    count: int
  },
  placement: {
    scope: string,
    directive: string
  },
  parentId: string,
  containerType: string,
  instanceId: string,
  nonce: string,
  hardwareCharacteristics: {
    arch: string,
    mem: int,
    rootDisk: int,
    cpuCores: int,
    cpuPower: int,
    tags: []string,
    availabilityZone: string
  },
  addresses: []{
    value: string,
    type: string,
    scope: string,
    spaceName: string
  }
}
```
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors,
  the result is provided as an object like the following:
```javascript
{
  machine: string,
  error: {
    message: string,
    code: string,
    info: {
      macaroon: anything,
      macaroonPath: string
    }
  }
}
```
- *@return {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## client.watch(callback)

Watch changes in the current model, and call the provided callback every
time changes arrive.

This method requires the AllWatcher facade to be loaded and available to the
client.

- *@param {Function} callback* Called every time changes arrive from Juju, the
  callback receives an error and a the changes. If there are no errors,
  changes are provided as an object like the following:
```javascript
{
  deltas: []anything
}
```
- *@returns {Object}* A handle that can be used to stop watching, via its stop
  method which can be provided a callback receiving an error.

## controller.watch(callback)

Watch changes in the all models on this controller, and call the provided
callback every time changes arrive.

This method requires the AllModelWatcher facade to be loaded and available
to the client.

- *@param {Function} callback* Called every time changes arrive from Juju, the
  callback receives an error and a the changes. If there are no errors,
  changes are provided as an object like the following:
```javascript
{
  deltas: []anything
}
```
- *@returns {Object}* A handle that can be used to stop watching, via its stop
  method which can be provided a callback receiving an error.

## pinger.pingForever(interval, callback)

Start pinging repeatedly with the give interval.

This can be useful for preventing proxies to close a connection to Juju due
to inactivity.

- *@param {Integer} interval* Milliseconds between pings.
- *@param {Function} callback* Called every time a pong is received from the
  server, the callback receives an error.
- *@returns {Object}* A handle that can be used to stop pinging via its stop
  method.