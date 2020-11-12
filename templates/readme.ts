import type { ReadmeTemplate } from "../generator/interfaces";

export default (r: ReadmeTemplate): string => {
  return `
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

To access the Juju API, a connection must be made to either a Juju
controller or a Juju model.

\`\`\`javascript
import ApplicationV5 from "jujulib/api/facades/application-v5.js";
import ClientV1 from "jujulib/api/facades/client-v1.js";
import ClientV2 from "jujulib/api/facades/client-v2.js";

const juju = await jujulib.connect(
  'wss://example.com/model/x-y-z/api',
  {facades: [ApplicationV5, ClientV1, ClientV2]}
);
\`\`\`

In the code above, a connection is established to the provided model API URL, and the client declares interest in using the specified set of facades.

**Note:** When multiple versions of the same facade are included (like the two client versions in the example), the most recent version supported by the server is made available to the client.

The \`connect\` method returns a \`juju\` object which is used to log into the controller or model by providing a user/pass credentials or macaroons. See the [various examples](#examples).

## Client API Reference

Visit the [full API documentation](https://juju.github.io/js-libjuju/) for detailed information on the Client API.

## Facade API Reference

Detailed Facade documentation is available as part of the [full API documentation](https://juju.github.io/js-libjuju/) or you can visit the facade source directly using the following links:

${r.facadeList
  .map((f) => {
    return `- [${f.name}](${f.path})`;
  })
  .join("\n")}

## Examples

We have a number of examples showing how to perform a few common tasks. Those can be found in the \`examples\` folder.

${r.exampleList
  .map((e) => {
    return `- [${e.name}](${e.path})`;
  })
  .join("\n")}

## Library Maintenance

### Updating Library Facades

The Juju facade API files are generated from a supplied Juju schema.

To generate this schema you will need to clone the [Juju repository](https://github.com/juju/juju/) and then run \`go run github.com/juju/juju/generate/schemagen -admin-facades --facade-group=client,jimm ./apiserver/facades/schema.json\` to generate a schema file that contains the publicly available facades as well as the set of facades for JAAS. Other \`--facade-group\` options are \`latest\` and \`all\`.

To update the facades, run \`npm run build\` on this project. This will generate the facades using the schema stored at \`$GOPATH/src/github.com/juju/juju/apiserver/facades/schema.json\`. It will also pull the SHA and Juju version from this repository.

### Releasing to NPM

- Update the version number in \`package.json\`, respecting semver.
- Run the tests with \`npm test\`.
- Run the examples with \`node\` to ensure that everything works as expected.
- Upgrade the [Juju Dashboard](https://github.com/canonical-web-and-design/jaas-dashboard) to this version using \`npm link\` and ensure that everything works as expected.
- Tag the version in the git repository with the version number from above.
- \`npm publish\`.
- Update the release notes in the [repository](https://github.com/juju/js-libjuju/releases).
- Create a post on the [Juju Discourse](https://discourse.juju.is/) with information about the release.

`;
};