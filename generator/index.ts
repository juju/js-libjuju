import { execSync } from "child_process";
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "fs";
import glob from "glob";
import { join, resolve } from "path";
import {
  FacadeMethod,
  FacadeTemplate,
  FileInfo,
  InterfaceData,
  InterfaceType,
  ReadmeTemplate,
} from "./interfaces.js";
import generateFacadeIndexTemplate from "./templates/facade-index.js";
import generateFacadeTemplate from "./templates/facade.js";
import readmeTemplateGenerator from "./templates/readme.js";
import {
  DefinitionProperties,
  Facade,
  FacadeList,
  JSONSchemaType,
  SchemaDefinition,
  SchemaDefinitions,
  SchemaMethod,
  SchemaMethods,
  SchemaProperties,
} from "./templates/types.js";

const schemaLocation: string = process.env.SCHEMA || "";
const jujuVersion: string = process.env.JUJU_VERSION || "";
const jujuGitSHA: string = process.env.JUJU_GIT_SHA || "";
const schemaData: string = readFileSync(resolve(schemaLocation), {
  encoding: "utf8",
});

let schema: Array<Facade>;
try {
  schema = JSON.parse(schemaData);
} catch (e) {
  console.error("Unable to parse schema", e);
  process.exit(1);
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
const facadesGroupedByName: FacadeList = {};
type ExistingFacade = {
  folder: string;
  name: string;
  version: number;
};
const allExistingFacades: ExistingFacade[] = glob
  .sync("./api/facades/*/*V[0-9]*.ts")
  .map((f: string) => f.split("/"))
  .map((f: string[]) => {
    // e.g. ClientV5.ts
    const filename = f[f.length - 1].match(
      /(?<name>[a-z-]+)V(?<version>\d+)\.ts/i
    )!.groups!;
    return { folder: f[f.length - 2], ...filename };
  }) as ExistingFacade[];

allExistingFacades.forEach((facade) => {
  if (!facadesGroupedByName[facade.name]) {
    facadesGroupedByName[facade.name] = [];
  }
  facadesGroupedByName[facade.name].push(facade.version);
});
generateFacadeIndexTemplate(facadesGroupedByName);

const clientAPIInfo: string = execSync(
  "./node_modules/.bin/documentation build api/client.ts --document-exported --shallow --markdown-toc false -f md",
  { encoding: "utf8" }
);

const facadeList: {
  [key: string]: FileInfo[];
} = {};
Object.keys(facadesGroupedByName).forEach((facadeName) => {
  facadeList[facadeName] = facadesGroupedByName[facadeName].map(
    (FacadeVersion) => ({
      name: `v${FacadeVersion}.ts`,
      path: `/api/facades/${facadeFolderName(facadeName)}/v${FacadeVersion}.ts`,
    })
  );
});

const readmeTemplateData: ReadmeTemplate = {
  clientAPIInfo,
  exampleList: readdirSync("examples").map((f) => ({
    name: f,
    path: `examples/${f}`,
  })),
  facadeList,
};
generateReadmeFile(readmeTemplateData);

function getRefString(ref: string): string {
  const parts = ref.split("/");
  return parts[parts.length - 1];
}

function extractType(
  method: SchemaMethod,
  segment: keyof SchemaProperties
): string | undefined {
  if (method.properties?.[segment]) {
    const ref = method.properties[segment]["$ref"];
    const type = method.properties[segment]["type"];
    if (ref) {
      return getRefString(ref);
    }
    return type;
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
      const generatedMethod: FacadeMethod = {
        name: method[0],
        params: extractType(method[1], "Params") || "any",
        result: extractType(method[1], "Result") || "any",
        docBlock: method[1].description,
      };
      return generatedMethod;
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
    types = generateTypes(
      definition[1].properties,
      definition[1].required || []
    );
  } else {
    types = [
      {
        name: "[key: string]",
        type: "AdditionalProperties",
        // This isn't actually required but we don't want to add the ? for
        // optional with this key type.
        required: true,
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
  function extractType(values: JSONSchemaType): string {
    if (values.type) {
      if (
        values.patternProperties ||
        (values.additionalProperties && values.type === "object")
      ) {
        // There are additional unknown properties defined.
        return "AdditionalProperties";
      }
      // TODO: Recirsify this conditional.
      if (values.type === "array" && values.items) {
        if (values.items["$ref"]) {
          return `${getRefString(values.items["$ref"])}[]`;
        }
        if (values.items.type === "integer") {
          values.items.type = "number";
        } else if (values.items.type === "array" && values.items.items) {
          // multi-dimensional array
          if (values.items.items["$ref"]) {
            return `${getRefString(values.items.items["$ref"])}[][]`;
          }
          return "[]";
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
    if (!requiredArgs.length) {
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
  const output: string = generateFacadeTemplate(facadeTemplateData);
  const filename = `${facadeTemplateData.name}V${facadeTemplateData.version}`;
  const facadeFoldername = facadeFolderName(facadeTemplateData.name);

  const outputFolder = `api/facades/${facadeFoldername}/`;
  mkdirSync(outputFolder, { recursive: true });
  writeFileSync(join(outputFolder, `${filename}.ts`), output);
}

function generateReadmeFile(readmeTemplateData: ReadmeTemplate): void {
  const output: string = readmeTemplateGenerator(readmeTemplateData);
  writeFileSync("README.md", output);
}

export function facadeFolderName(facadeName: string) {
  // from CamelCase to kebab-case
  return facadeName
    .replace(/\W+/g, "-")
    .replace(/([a-z\d])([A-Z])/g, "$1-$2")
    .toLowerCase();
}
