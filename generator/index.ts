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
  properties: SchemaMethods;
  definitions: SchemaDefinitions;
}

interface SchemaMethods {
  [methodName: string]: SchemaMethod;
}

interface SchemaDefinitions {
  [definitionName: string]: SchemaDefinition;
}

interface SchemaMethod {
  type: string;
  properties: SchemaProperties;
  description: string;
}

interface SchemaDefinition {
  type: string;
  properties: DefinitionProperties;
  additionalProperties?: boolean;
  required?: string[];
}

interface DefinitionProperties {
  [argumentName: string]: JSONSchemaType;
}

interface JSONSchemaType {
  type: string;
  items?: JSONSchemaType;
  additionalProperties?: boolean;
  patternProperties?: any;
  $ref?: string;
}

interface SchemaProperties {
  Params: object;
  Result: object;
}

interface InterfaceData {
  name: string;
  types: InterfaceType[];
}

interface InterfaceType {
  name: string;
  type: string;
  required: boolean;
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

function extractType(method, segment: string): string {
  if (method.properties?.[segment]) {
    if (method.properties[segment]["$ref"]) {
      return getRefString(method.properties[segment]["$ref"]);
    } else if (method.properties[segment].type) {
      return method.properties[segment].type;
    }
  }
  return undefined;
}

/**
  Generate the list of methods available for the facade. While the API may
  expose methods, the actual data sent over the wire is an RPC call.
*/
function generateMethods(methods: SchemaMethods): FacadeMethod[] {
  const facadeMethods: FacadeMethod[] = Object.entries(methods).map(
    (method) => {
      return {
        name: method[0],
        params: extractType(method[1], "Params"),
        result: extractType(method[1], "Result"),
        docBlock: method[1].description,
      };
    }
  );
  return facadeMethods;
}

function generateInterfaces(definitions?: SchemaDefinitions): InterfaceData[] {
  if (!definitions) {
    return [];
  }
  const interfaces = Object.entries(definitions).map(generateInterface);
  interfaces.push(
    generateInterface([
      "AdditionalProperties",
      { properties: { "[key: string]": { type: "any" } }, type: "object" },
    ])
  );
  return interfaces;
}

function generateInterface(
  definition: [string, SchemaDefinition]
): InterfaceData {
  let types: InterfaceType[];
  if (definition[1].properties) {
    types = generateTypes(definition[1].properties, definition[1].required);
  } else {
    types = [
      {
        name: "[key: string]",
        type: "AdditionalProperties",
        required: false,
      },
    ];
  }
  return {
    name: definition[0],
    types,
  };
}

function generateTypes(
  properties: DefinitionProperties,
  required: string[]
): InterfaceType[] {
  // XXX Add optional flag based on value in 'required' key.
  function extractType(values: JSONSchemaType): string {
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
      if (values.type === "integer") {
        return "number";
      }
      return values.type;
    }
    if (values["$ref"]) {
      return getRefString(values["$ref"]);
    }
    return "any"; // If we don't know the type then type it as any.
  }

  function isRequired(requiredArgs: string[], propertyName: string): boolean {
    if (!requiredArgs) {
      // If requiredArgs doesn't exist then it's likely that this is a
      // response interface.
      return true;
    }
    return requiredArgs.includes(propertyName);
  }

  return Object.entries(properties).map((property) => {
    return {
      name: property[0],
      type: extractType(property[1]),
      required: isRequired(required, property[0]),
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
