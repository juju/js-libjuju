import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { inspect } from "util";

import { FacadeTemplate, FacadeMethod } from "./interfaces";
import facadeTemplateGenerator from "../templates/facade.js";

interface Facade {
  Name: string;
  Version: number;
  Schema: FacadeSchema;
  Description: string;
  AvailableTo: string[];
}

interface FacadeSchema {
  type: string;
  properties: SchemaProperties;
  definitions: object;
}

interface SchemaProperties {
  [any: string]: Properties;
}

interface Properties {
  type: string;
  properties: object;
}

const schemaLocation: string = process.env.SCHEMA;
const jujuVersion: string = process.env.JUJU_VERSION.replace(/\"/g, "");
const jujuGitSHA: string = process.env.JUJU_GIT_SHA;
const schemaData: string = readFileSync(resolve(schemaLocation), {
  encoding: "utf8",
});

let schema: Array<Facade> = null;
try {
  schema = JSON.parse(schemaData);
} catch (e) {
  console.error("Unable to parse schema", e);
}

schema.forEach(async (facade) => {
  const facadeTemplateData: FacadeTemplate = {
    name: facade.Name,
    version: facade.Version,
    methods: generateMethods(facade.Schema.properties),
    interfaces: generateInterfaces(facade.Schema.definitions),
    availableTo: facade.AvailableTo,
    docBlock: facade.Description,
    jujuVersion,
    jujuGitSHA,
  };

  generateFile(facadeTemplateData);
});

function getRefString(ref: string): string {
  const parts = ref.split("/");
  return parts[parts.length - 1];
}

function extractRef(method, segment: string): string {
  return method.properties?.[segment]
    ? getRefString(method.properties[segment]["$ref"])
    : undefined;
}

/**
  Generate the list of methods available for the facade. While the API may
  expose methods, the actual data sent over the wire is an RPC call.
*/
function generateMethods(methods: SchemaProperties): FacadeMethod[] {
  const facadeMethods: FacadeMethod[] = Object.entries(methods).map(
    (method) => {
      return {
        name: method[0],
        params: extractRef(method[1], "Params"),
        result: extractRef(method[1], "Result"),
        docBlock: method[1].description,
      };
    }
  );
  return facadeMethods;
}

function generateInterfaces(definitions: object): object[] {
  const interfaces = Object.entries(definitions).map(generateInterface);
  interfaces.push(
    generateInterface([
      "AdditionalProperties",
      { properties: { "[key: string]": { type: "any" } } },
    ])
  );
  return interfaces;
}

function generateInterface(definition: object): object {
  return {
    name: definition[0],
    types: generateTypes(definition[1].properties),
  };
}

function generateTypes(properties: object): object[] {
  // XXX Add optional flag based on value in 'required' key.

  function extractType(values: object): string {
    if (values.type) {
      if (values.patternProperties || values.additionalProperties) {
        // There are additional unknown properties defined.
        if (values.type === "object") {
          return "AdditionalProperties";
        }
        return;
      }
      if (values.type === "array" && values.items) {
        if (values.items["$ref"]) {
          return `${getRefString(values.items["$ref"])}[]`;
        }
        return `${values.items.type}[]`;
      }
      return values.type;
    }
    if (values["$ref"]) {
      return getRefString(values["$ref"]);
    }
    return "any"; // If we don't know the type then type it as any.
  }
  return Object.entries(properties).map((property) => {
    return {
      name: property[0],
      type: extractType(property[1]),
    };
  });
}

function generateFile(facadeTemplateData: FacadeTemplate): void {
  const output: string = facadeTemplateGenerator(facadeTemplateData);
  const filename: string = `${facadeTemplateData.name}-v${facadeTemplateData.version}`
    .replace(/\W+/g, "-")
    .replace(/([a-z\d])([A-Z])/g, "$1-$2")
    .toLowerCase();
  writeFileSync(`facades/${filename}.ts`, output);
}
