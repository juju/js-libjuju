import { readFileSync } from "fs";
import { resolve, join } from "path";
import { inspect } from "util";

import RefParser from "@apidevtools/json-schema-ref-parser";

import { facadeTemplate, facadeMethod } from "./interfaces";
import { isInController, isInModel } from "./categorizer.js";

interface Facade {
  Name: string;
  Version: number;
  Schema: FacadeSchema;
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

const __dirname = resolve();

const schemaLocation: string = process.env.SCHEMA;
const schemaData: string = readFileSync(join(__dirname, schemaLocation), {
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
  let expandedFacade = null;
  try {
    expandedFacade = await RefParser.dereference(facade.Schema);
  } catch (e) {
    console.error(e);
  }

  const facadeTemplateData: facadeTemplate = {
    name: facade.Name,
    version: facade.Version,
    methods: generateMethods(expandedFacade),
    availableOnControllers: isInController(facade.Name),
    availableOnModels: isInModel(facade.Name),
    docBlock: "", // Not currently available in the new Juju schema.
  };
});

/**
  Generate the list of methods available for the facade. While the API may
  expose methods, the actual data sent over the wire is an RPC call.
*/
function generateMethods(methods: SchemaProperties): facadeMethod[] {
  const facadeMethods: facadeMethod[] = Object.entries(methods.properties).map(
    (method) => {
      return {
        name: method[0],
        params: extractProperties("Params", method[1]),
        result: extractProperties("Result", method[1]),
        docBlock: "", // Not currently available in the new Juju schema.
      };
    }
  );
  // console.log(inspect(facadeMethods, true, null, true));
  return facadeMethods;
}

function extractProperties(
  segment: string,
  methodData: any
): (string | object)[] {
  let segmentData = null;
  if (methodData?.properties[segment]?.properties) {
    segmentData = Object.entries(methodData.properties[segment].properties).map(
      // XXX Go recursive to remove properties object nesting
      (prop) => prop
    );
  }
  return segmentData;
}
