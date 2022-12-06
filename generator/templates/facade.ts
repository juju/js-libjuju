import type { FacadeTemplate, InterfaceData } from "../interfaces.js";

export default function generateFacadeTemplate(
  facadeTemplate: FacadeTemplate
): string {
  const lowerCaseFirstChar = (name: string): string =>
    name.charAt(0).toLowerCase() + name.slice(1);

  const upperCaseFirstChar = (name: string): string =>
    name.charAt(0).toUpperCase() + name.slice(1);

  const padString = (doc: string, indent: number): string => {
    if (!doc) {
      return "";
    }
    const segments = doc
      .split("\n")
      .map((segment) => segment.padStart(segment.length + indent));
    return segments.join("\n");
  };

  const generateAvailableList = (availableTo: string[]) =>
    padString(
      availableTo
        .map((env) => upperCaseFirstChar(env.replace("-user", "s")))
        .join("\n"),
      4
    );

  const generateInterface = (i: InterfaceData) => {
    return `
export interface ${i.name} {
${i.types
  .map((t) => {
    let name: string = t.name;
    if (name.indexOf("-") !== -1) {
      name = `'${name}'`;
    }
    const optional = !t.required ? "?" : "";
    return padString(`${name}${optional}: ${t.type};`, 2);
  })
  .join("\n")}
}`;
  };

  return `/**
  Juju ${facadeTemplate.name} version ${facadeTemplate.version}.
  This facade is available on:
${generateAvailableList(facadeTemplate.availableTo)}

  NOTE: This file was generated using the Juju schema
  from Juju ${facadeTemplate.jujuVersion} at the git SHA ${
    facadeTemplate.jujuGitSHA
  }.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { autoBind } from "../../utils.js";

${facadeTemplate.interfaces.map(generateInterface).join("\n")}

/**
${padString(facadeTemplate.docBlock, 2)}
*/
class ${facadeTemplate.name}V${facadeTemplate.version} {
  static NAME: string = '${facadeTemplate.name}';
  static VERSION: number = ${facadeTemplate.version};

  version: number;
  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this.version = ${facadeTemplate.version};
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  ${facadeTemplate.methods
    .map(
      (m) => `
  /**
${padString(m.docBlock, 4)}
  */
  ${lowerCaseFirstChar(m.name)}(${
        m.params ? `params: ${m.params}` : ""
      }): Promise<${m.result}> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: '${facadeTemplate.name}',
        request: '${m.name}',
        version: ${facadeTemplate.version},
      ${
        m.params
          ? `  params: params,
      };`
          : "};"
      }

      this._transport.write(req, resolve, reject);
    });
  }
  `
    )
    .join("")}
}

export default ${facadeTemplate.name}V${facadeTemplate.version};
`;
}
