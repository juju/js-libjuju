import { execSync } from "child_process";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "fs";
import glob from "glob";
import { join, resolve } from "path";

import {
  FacadeMethod,
  FacadeTemplate,
  FileInfo,
  InterfaceData,
  InterfaceType,
  InterfaceValueType,
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
import {
  attributeOverrides,
  definitionsOverrides,
  methodOverrides,
} from "./overrides.js";

export function generator() {
  // if present, only generate the README and use links to docs instead of Github repo
  const onlyReadmeForDocs = Boolean(process.env.README_FOR_DOCS);
  if (!onlyReadmeForDocs) generateFacadeFiles();
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
  if (!onlyReadmeForDocs) generateFacadeIndexTemplate(facadesGroupedByName);

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
        name: `${facadeName}V${FacadeVersion}.ts`,
        path: `/api/facades/${facadeFolderName(
          facadeName
        )}/${facadeName}V${FacadeVersion}.ts`,
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
  generateReadmeFile(readmeTemplateData, onlyReadmeForDocs);
}

function getRefString(ref: string): string {
  const parts = ref.split("/");
  return parts[parts.length - 1];
}

function extractType(
  method: SchemaMethod,
  segment: keyof SchemaProperties
): string | undefined {
  if (method.properties?.[segment]) {
    const ref = method.properties[segment]?.["$ref"];
    const type = method.properties[segment]?.["type"];
    if (ref) {
      return getRefString(ref);
    }
    return type;
  }
  return undefined;
}

function generateFacadeFiles() {
  const schemaLocation: string = process.env.SCHEMA || "";
  const jujuVersion: string = process.env.JUJU_VERSION || "";
  const jujuGitSHA: string = process.env.JUJU_GIT_SHA || "";
  let schema: Array<Facade>;
  try {
    const schemaData: string = readFileSync(resolve(schemaLocation), {
      encoding: "utf8",
    });
    schema = JSON.parse(schemaData);
  } catch (e) {
    console.error("Unable to parse schema", e);
    process.exit(1);
  }

  schema.forEach(async (facade) => {
    const facadeTemplateData: FacadeTemplate = {
      name: facade.Name,
      version: facade.Version,
      methods: generateMethods(facade.Schema.properties, facade.Name),
      interfaces: generateInterfaces(facade.Schema.definitions, facade.Name),
      availableTo: facade.AvailableTo,
      docBlock: facade.Description,
      jujuVersion,
      jujuGitSHA,
    };

    generateFile(facadeTemplateData);
  });
}

/**
  Generate the list of methods available for the facade. While the API may
  expose methods, the actual data sent over the wire is an RPC call.
*/
export function generateMethods(
  methods: SchemaMethods,
  facadeName: string
): FacadeMethod[] {
  const facadeMethods: FacadeMethod[] = Object.entries(methods).map(
    ([name, method]) => {
      const generatedMethod: FacadeMethod = {
        name,
        params:
          methodOverrides[facadeName]?.[name]?.Params ||
          extractType(method, "Params") ||
          "any",
        result:
          methodOverrides[facadeName]?.[name]?.Result ||
          extractType(method, "Result") ||
          "any",
        docBlock: method.description,
      };
      if (methodOverrides[facadeName]?.[name]?.paramsAtTop) {
        generatedMethod.paramsAtTop = true;
      }
      return generatedMethod;
    }
  );
  return facadeMethods;
}

export function generateInterfaces(
  definitions: SchemaDefinitions,
  facadeName: string
): InterfaceData[] {
  if (!definitions) {
    return [];
  }
  const interfaces = Object.entries(definitions).map(([name, definition]) => {
    return generateInterface([
      name,
      definitionsOverrides[facadeName]?.[name] ?? definition,
    ]);
  });
  interfaces.push(
    generateInterface([
      "AdditionalProperties",
      { properties: { "[key: string]": { type: "any" } }, type: "object" },
    ])
  );
  return interfaces;
}

function generateInterface([name, definition]: [
  string,
  SchemaDefinition
]): InterfaceData {
  let types: InterfaceType[];
  if (definition.properties) {
    types = generateTypes(definition.properties, definition.required || []);
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
    name,
    types,
  };
}

export function generateTypes(
  properties: DefinitionProperties,
  required: string[]
): InterfaceType[] {
  function extractType(values: JSONSchemaType): InterfaceValueType {
    if (values.type) {
      if (values.type === "object") {
        if (values.patternProperties) {
          const regex = Object.keys(values.patternProperties)?.[0];
          // Handle the pattern properties if the regex is matching all keys.
          if (
            Object.keys(values.patternProperties).length === 1 &&
            regex === ".*"
          ) {
            const patternProperty = values.patternProperties[regex];
            // If pattern is a ref then use that for the object value type.
            if (patternProperty["$ref"]) {
              return {
                type: "object",
                valueType: getRefString(patternProperty["$ref"]),
              };
            }
            const valueType = extractType(patternProperty);
            // If the pattern is additionalProperties then use that as the
            // object type.
            if (valueType === "AdditionalProperties") {
              return valueType;
            }
            // If the pattern has an explicit primitive type then use that for
            // the object value type.
            if (patternProperty.type)
              return {
                type: "object",
                valueType,
              };
          }
          // Return unknown if the schema doesn't match what we expect. This
          // shouldn't occur.
          return "unknown";
        }
        if (values.additionalProperties) {
          // There are additional unknown properties defined.
          return "AdditionalProperties";
        }
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

  return Object.entries(properties).map(([name, property]) => {
    let valueType: string;
    const extractedType = extractType(property);
    const hasOverride = name in attributeOverrides;
    if (hasOverride) {
      valueType = attributeOverrides[name];
    } else {
      valueType =
        typeof extractedType === "object" ? extractedType.type : extractedType;
    }
    const interfaceType: InterfaceType = {
      name,
      type: valueType,
      required: isRequired(required, name),
    };
    if (!hasOverride && typeof extractedType === "object") {
      interfaceType.valueType = extractedType.valueType;
    }
    return interfaceType;
  });
}

function generateFile(facadeTemplateData: FacadeTemplate): void {
  const output: string = generateFacadeTemplate(facadeTemplateData);
  const filename = `${facadeTemplateData.name}V${facadeTemplateData.version}`;
  const facadeFoldername = facadeFolderName(facadeTemplateData.name);

  const outputFolder = `api/facades/${facadeFoldername}/`;
  mkdirSync(outputFolder, { recursive: true });
  const newFacadeFilePath = join(outputFolder, `${filename}.ts`);
  // Avoid overriding existing files, in case you need to regenerate
  // given files, delete the files first
  if (!existsSync(newFacadeFilePath))
    writeFileSync(join(outputFolder, `${filename}.ts`), output);
}

function generateReadmeFile(
  readmeTemplateData: ReadmeTemplate,
  onlyReadmeForDocs: boolean
): void {
  if (onlyReadmeForDocs) {
    readmeTemplateData.exampleList.forEach((example) => {
      // instead of relative path for docs page which will 404
      // return the example page on the Github repo
      example.path = `https://github.com/juju/js-libjuju/blob/master/${example.path}`;
    });
    Object.entries(readmeTemplateData.facadeList).forEach(
      ([facadeName, facade]) =>
        facade.forEach((facadeVersion) => {
          // instead of the default (404) /api/facades/action-pruner/v1.ts
          // return https://juju.github.io/js-libjuju/modules/facades_action_pruner_ActionPrunerV1.html
          facadeVersion.path = `https://juju.github.io/js-libjuju/modules/facades_${facadeFolderName(
            facadeName
          ).replace(/-/g, "_")}_${facadeVersion.name.split(".")[0]}.html`;
        })
    );
  }
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
