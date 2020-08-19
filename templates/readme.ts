import type { ReadmeTemplate } from "../generator/interfaces";

export default (r: ReadmeTemplate): string => {
  return `
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

\`\`\`javascript
import ApplicationV5 from "jujulib/api/facades/application-v5.js";
import ClientV1 from "jujulib/api/facades/client-v1.js";
import ClientV2 from "jujulib/api/facades/client-v2.js";

const juju = await jujulib.connect(
  'wss://example.com/model/x-y-z/api',
  {facades: [ApplicationV5, ClientV1, ClientV2]}
);
\`\`\`

In the code above, a connection is being established to the provided model API URL, and the client declares to be interested in using the specified set of facades. When multiple versions of the same facade are included (like the two client versions in the example), the most recent version supported by the server is made available to the client.

The \`connect\` method returns a \`juju\` object which can be used to log into the controller or model by providing a userpass credentials or macaroons. See The various [examples](#examples) below.

## Client API Reference

Visit the [full API documentation](https://js-libjuju.github.io/) for detailed information on the Client API.

## Facade API Reference

Defailed Facade documentation van be found by visiting the [full API documentation](https://js-libjuju.github.io/) or you can visit the facade source directly using the links below.

${r.facadeList
  .map((f) => {
    return `- [${f.name}](${f.path})`;
  })
  .join("\n")}

## Examples

We have a number of examples showing how to perform a few common tasks. Those can be found in the examples folder.

${r.exampleList
  .map((e) => {
    return `- [${e.name}](${e.path})`;
  })
  .join("\n")}

## Library Maintenance

### Updating Library Facades

The Juju facade API files are generated from a supplied Juju schema. To update these facades this project provides a build script that can be run with \`npm run build\`. This will generate the facades using the schema stored at \`$GOPATH/src/github.com/juju/juju/apiserver/facades/schema.json\`. It will also pull the SHA and Juju version from this repository.

### Releasing to NPM

- Update the version number, respecting semver.
- Run the tests with \`npm test\`.
- Run the examples to ensure that everything works as expected.
- Upgrade the [Juju Dashboard](https://github.com/canonical-web-and-design/jaas-dashboard) to this version using \`npm link\` and ensure that everything works as expected.
- Tag the version in the git repository with the version number from above.
- \`npm publish\`.
- Update the release notes in the [repository](https://github.com/juju/js-libjuju/releases).
- Create a post on the [Juju Discourse](https://discourse.juju.is/) with information about the release.

`;
};
