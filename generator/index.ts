import { readFileSync } from "fs";
import { resolve } from "path";
import { inspect } from "util";

import RefParser from "@apidevtools/json-schema-ref-parser";
import clone from "clone-deep";

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
  // XXX REMOVE ME
  if (facade.Name !== "Bundle") {
    return;
  }
  console.log(inspect(facade.Schema, true, null, true));
  let expandedFacade = null;
  // We clone the definitions value here because the RefParser.dereference
  // modifies the schema facade in place.
  const definitions = clone(facade.Schema.definitions);
  try {
    expandedFacade = await RefParser.dereference(facade.Schema);
  } catch (e) {
    console.error(e);
  }
  // console.log(inspect(expandedFacade, true, null, true));
  const facadeTemplateData: FacadeTemplate = {
    name: facade.Name,
    version: facade.Version,
    methods: generateMethods(expandedFacade),
    interfaces: generateInterfaces(definitions),
    availableTo: facade.AvailableTo,
    docBlock: facade.Description,
    jujuVersion,
    jujuGitSHA,
  };

  generateFile(facadeTemplateData);
});

/**
  Generate the list of methods available for the facade. While the API may
  expose methods, the actual data sent over the wire is an RPC call.
*/
function generateMethods(methods: SchemaProperties): FacadeMethod[] {
  // console.log(inspect(methods, true, null, true));
  const facadeMethods: FacadeMethod[] = Object.entries(methods.properties).map(
    (method) => {
      return {
        name: method[0],
        params: extractProperties("Params", method[1]),
        result: extractProperties("Result", method[1]),
        docBlock: method[1].description,
      };
    }
  );
  // console.log(inspect(facadeMethods, true, null, true));
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
  // XXX remove me below
  Object.entries(definitions).forEach((definition, index) => {
    console.log(inspect(definition[1], true, null, true));
    console.log(inspect(interfaces[index], true, null, true));
  });
  console.log(inspect(interfaces[interfaces.length - 1], true, null, true));

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

  function getRefString(ref: string): string {
    const parts = ref.split("/");
    return parts[parts.length - 1];
  }

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

function extractProperties(
  segment: string,
  methodData: any
): (string | object)[] {
  let segmentData = null;
  if (methodData?.properties[segment]?.properties) {
    segmentData = Object.entries(methodData.properties[segment].properties).map(
      // XXX Go recursive to remove properties object nesting
      (prop) => {
        // console.log(prop);
        return prop;
      }
    );
  }
  return segmentData;
}

function generateFile(facadeTemplateData: FacadeTemplate): void {
  const output = facadeTemplateGenerator(facadeTemplateData);
  // console.log(output);
}
