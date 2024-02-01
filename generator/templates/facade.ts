import type {
  FacadeTemplate,
  InterfaceData,
  InterfaceType,
  InterfaceValueType,
} from "../interfaces.js";

const padString = (doc: string, indent: number): string => {
  if (!doc) {
    return "";
  }
  const segments = doc
    .split("\n")
    .map((segment) =>
      segment ? segment.padStart(segment.length + indent) : ""
    );
  return segments.join("\n");
};

const generateType = (
  interfaceType: InterfaceType | InterfaceValueType
): string => {
  if (typeof interfaceType === "string") {
    return interfaceType;
  }
  return interfaceType.type === "object" && interfaceType.valueType
    ? `Record<string, ${generateType(interfaceType.valueType)}>`
    : interfaceType.type;
};

export const generateInterface = (i: InterfaceData) => {
  return `
export interface ${i.name} {
${i.types
  .map((t) => {
    let name: string = t.name;
    if (name.indexOf("-") !== -1) {
      name = `"${name}"`;
    }
    // Don't make index signatures optional (this is a syntax error).
    const optional = !t.required && !name.endsWith("]") ? "?" : "";
    return padString(`${name}${optional}: ${generateType(t)};`, 2);
  })
  .join("\n")}
}`;
};

const lowerCaseFirstChar = (name: string): string =>
  name.charAt(0).toLowerCase() + name.slice(1);

const upperCaseFirstChar = (name: string): string =>
  name.charAt(0).toUpperCase() + name.slice(1);

const generateAvailableList = (availableTo: string[]) =>
  padString(
    availableTo
      .map((env) => upperCaseFirstChar(env.replace("-user", "s")))
      .join("\n"),
    4
  );

export function generateMethods(facadeTemplate: FacadeTemplate): string {
  return facadeTemplate.methods
    .map((m) => {
      const paramsType =
        m.params && typeof m.params === "object"
          ? `{ ${Object.entries(m.params)
              .map(([key, value]) => `${key}: ${value};`)
              .join(" ")} }`
          : m.params;

      const paramsBlock = m.params
        ? `${
            typeof m.params === "object"
              ? Object.keys(m.params)
                  .map((key) => `        ${key}: params.${key},`)
                  .join("\n")
              : "        params: params,"
          }
      };`
        : null;
      return `/**
${padString(m.docBlock || "", 4)}
  */
  ${lowerCaseFirstChar(m.name)}(${
        m.params ? `params: ${paramsType}` : ""
      }): Promise<${m.result}> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "${facadeTemplate.name}",
        request: "${m.name}",
        version: ${facadeTemplate.version},
${paramsBlock ?? "    };"}

      this._transport.write(req, resolve, reject);
    });
  }
`;
    })
    .join("\n");
}

export default function generateFacadeTemplate(
  facadeTemplate: FacadeTemplate
): string {
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
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";
${facadeTemplate.interfaces.map(generateInterface).join("\n")}

/**
${padString(facadeTemplate.docBlock, 2)}
*/
class ${facadeTemplate.name}V${facadeTemplate.version} implements Facade {
  static NAME = "${facadeTemplate.name}";
  static VERSION = ${facadeTemplate.version};

  NAME = "${facadeTemplate.name}";
  VERSION = ${facadeTemplate.version};

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  ${generateMethods(facadeTemplate)}
}

export default ${facadeTemplate.name}V${facadeTemplate.version};
`;
}
