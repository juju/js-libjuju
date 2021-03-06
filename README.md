
<!--
  This file is automatically generated when building the project. Do not make
  changes to this file. Update the template templates/readme.ts instead.
-->

# JS Jujulib

This project provides a JavaScript API client library for interacting with the Juju
WebSocket API.

- [Getting Started](#getting-started)
- [Client API Reference](#client-api-reference)
- [Facade API Reference](#facade-api-reference)
- [Examples](#examples)
- [Library Maintenance](#library-maintenance)
  - [Updating Library Facades](#updating-library-facades)
  - [Releasing to NPM](#releasing-to-npm)

## Getting Started

In order to access the Juju API, a connection must be made, to either a Juju
controller or model.

```javascript
import ApplicationV5 from "jujulib/api/facades/application-v5.js";
import ClientV1 from "jujulib/api/facades/client-v1.js";
import ClientV2 from "jujulib/api/facades/client-v2.js";

const juju = await jujulib.connect(
  'wss://example.com/model/x-y-z/api',
  {facades: [ApplicationV5, ClientV1, ClientV2]}
);
```

In the code above, a connection is being established to the provided model API URL, and the client declares interest in using the specified set of facades.

**Note** When multiple versions of the same facade are included (like the two client versions in the example), the most recent version supported by the server is made available to the client.

The `connect` method returns a `juju` object which can be used to log into the controller or model by providing a userpass credentials or macaroons. See The various [examples](#examples) below.

## Client API Reference

Visit the [full API documentation](https://juju.github.io/js-libjuju/) for detailed information on the Client API.

## Facade API Reference

Defailed Facade documentation can be found by visiting the [full API documentation](https://juju.github.io/js-libjuju/) or you can visit the facade source directly using the links below.

- [action-v6.ts](api/facades/action-v6.ts)
- [admin-v3.ts](api/facades/admin-v3.ts)
- [all-model-watcher-v2.ts](api/facades/all-model-watcher-v2.ts)
- [all-watcher-v1.ts](api/facades/all-watcher-v1.ts)
- [annotations-v2.ts](api/facades/annotations-v2.ts)
- [application-offers-v2.ts](api/facades/application-offers-v2.ts)
- [application-v12.ts](api/facades/application-v12.ts)
- [backups-v2.ts](api/facades/backups-v2.ts)
- [block-v2.ts](api/facades/block-v2.ts)
- [bundle-v1.ts](api/facades/bundle-v1.ts)
- [bundle-v4.ts](api/facades/bundle-v4.ts)
- [charms-v2.ts](api/facades/charms-v2.ts)
- [client-v2.ts](api/facades/client-v2.ts)
- [cloud-v1.ts](api/facades/cloud-v1.ts)
- [cloud-v2.ts](api/facades/cloud-v2.ts)
- [cloud-v3.ts](api/facades/cloud-v3.ts)
- [cloud-v4.ts](api/facades/cloud-v4.ts)
- [cloud-v5.ts](api/facades/cloud-v5.ts)
- [cloud-v7.ts](api/facades/cloud-v7.ts)
- [controller-v3.ts](api/facades/controller-v3.ts)
- [controller-v4.ts](api/facades/controller-v4.ts)
- [controller-v5.ts](api/facades/controller-v5.ts)
- [controller-v6.ts](api/facades/controller-v6.ts)
- [controller-v7.ts](api/facades/controller-v7.ts)
- [controller-v8.ts](api/facades/controller-v8.ts)
- [controller-v9.ts](api/facades/controller-v9.ts)
- [credential-manager-v1.ts](api/facades/credential-manager-v1.ts)
- [firewall-rules-v1.ts](api/facades/firewall-rules-v1.ts)
- [high-availability-v2.ts](api/facades/high-availability-v2.ts)
- [image-manager-v2.ts](api/facades/image-manager-v2.ts)
- [image-metadata-manager-v1.ts](api/facades/image-metadata-manager-v1.ts)
- [key-manager-v1.ts](api/facades/key-manager-v1.ts)
- [machine-manager-v6.ts](api/facades/machine-manager-v6.ts)
- [metrics-debug-v2.ts](api/facades/metrics-debug-v2.ts)
- [model-config-v2.ts](api/facades/model-config-v2.ts)
- [model-generation-v4.ts](api/facades/model-generation-v4.ts)
- [model-manager-v2.ts](api/facades/model-manager-v2.ts)
- [model-manager-v3.ts](api/facades/model-manager-v3.ts)
- [model-manager-v4.ts](api/facades/model-manager-v4.ts)
- [model-manager-v5.ts](api/facades/model-manager-v5.ts)
- [model-manager-v8.ts](api/facades/model-manager-v8.ts)
- [payloads-v1.ts](api/facades/payloads-v1.ts)
- [pinger-v1.ts](api/facades/pinger-v1.ts)
- [resources-v1.ts](api/facades/resources-v1.ts)
- [spaces-v6.ts](api/facades/spaces-v6.ts)
- [sshclient-v2.ts](api/facades/sshclient-v2.ts)
- [storage-v6.ts](api/facades/storage-v6.ts)
- [subnets-v4.ts](api/facades/subnets-v4.ts)
- [user-manager-v1.ts](api/facades/user-manager-v1.ts)
- [user-manager-v2.ts](api/facades/user-manager-v2.ts)

## Examples

We have a number of examples showing how to perform a few common tasks. Those can be found in the examples folder.

- [add-machine.js](examples/add-machine.js)
- [deploy.js](examples/deploy.js)
- [login-with-bakery.js](examples/login-with-bakery.js)
- [ping.js](examples/ping.js)
- [watch-all-models.js](examples/watch-all-models.js)
- [watch.js](examples/watch.js)

## Library Maintenance

### Updating Library Facades

The Juju facade API files are generated from a supplied Juju schema.

To generate this schema you will need to clone the [Juju repository](https://github.com/juju/juju/) and then run `go run github.com/juju/juju/generate/schemagen -admin-facades --facade-group=client,jimm ./apiserver/facades/schema.json` to generate a schema file that contains the publicly available facades as well as the set of facades for JAAS. Other `--facade-group` options are `latest` and `all`.

To update the facades run `npm run build` on this project. This will generate the facades using the schema stored at `$GOPATH/src/github.com/juju/juju/apiserver/facades/schema.json`. It will also pull the SHA and Juju version from this repository.

### Releasing to NPM

- Update the version number in `package.json`, respecting semver.
- Run the tests with `npm test`.
- Run the examples with `node` to ensure that everything works as expected.
- Upgrade the [Juju Dashboard](https://github.com/canonical-web-and-design/jaas-dashboard) to this version using `npm link` and ensure that everything works as expected.
- Tag the version in the git repository with the version number from above.
- `npm publish`.
- Update the release notes in the [repository](https://github.com/juju/js-libjuju/releases).
- Create a post on the [Juju Discourse](https://discourse.juju.is/) with information about the release.

