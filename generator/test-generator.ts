import {
  generateInterfaces,
  generateMethods,
  generateTypes,
} from "./generator";

describe("generateMethods", () => {
  it("generates methods", () => {
    expect(
      generateMethods(
        {
          DesiredVersion: {
            description: "Gets the desired version.",
            type: "object",
            properties: {
              Params: { $ref: "#/definitions/Entities" },
              Result: { $ref: "#/definitions/VersionResults" },
            },
          },
          SetTools: {
            type: "object",
            properties: {
              Params: { $ref: "#/definitions/EntitiesVersion" },
              Result: { $ref: "#/definitions/ErrorResults" },
            },
          },
        },
        "Upgrader"
      )
    ).toStrictEqual([
      {
        name: "DesiredVersion",
        params: "Entities",
        result: "VersionResults",
        docBlock: "Gets the desired version.",
      },
      {
        name: "SetTools",
        params: "EntitiesVersion",
        result: "ErrorResults",
        docBlock: undefined,
      },
    ]);
  });

  it("overrides AllWatcher methods", () => {
    expect(
      generateMethods(
        {
          Next: {
            type: "object",
            properties: {
              Result: { $ref: "#/definitions/AllWatcherNextResults" },
            },
            description:
              "Next will return the current state of everything on the first call\n" +
              "and subsequent calls will",
          },
          Stop: { type: "object", description: "Stop stops the watcher." },
        },
        "AllWatcher"
      )
    ).toStrictEqual([
      {
        name: "Next",
        params: { id: "string" },
        paramsAtTop: true,
        result: "AllWatcherNextResults",
        docBlock:
          "Next will return the current state of everything on the first call\n" +
          "and subsequent calls will",
      },
      {
        name: "Stop",
        paramsAtTop: true,
        params: { id: "string" },
        result: "any",
        docBlock: "Stop stops the watcher.",
      },
    ]);
  });
});

describe("generateInterfaces", () => {
  it("generates interfaces", () => {
    expect(
      generateInterfaces(
        {
          UserInfoRequest: {
            type: "object",
            properties: {
              entities: { type: "array", $ref: "#/definitions/Entity" },
              "include-disabled": {
                type: "boolean",
              },
            },
          },
          UserInfoResult: {
            type: "object",
            properties: {
              error: {
                $ref: "#/definitions/Error",
              },
              result: {
                $ref: "#/definitions/UserInfo",
              },
            },
          },
        },
        "UserInfo"
      )
    ).toStrictEqual([
      {
        name: "UserInfoRequest",
        types: [
          { name: "entities", required: false, type: "array" },
          { name: "include-disabled", required: false, type: "boolean" },
        ],
      },
      {
        name: "UserInfoResult",
        types: [
          { name: "error", required: false, type: "Error" },
          { name: "result", required: false, type: "UserInfo" },
        ],
      },
      {
        name: "AdditionalProperties",
        types: [{ name: "[key: string]", required: false, type: "any" }],
      },
    ]);
  });

  it("handles required properties", () => {
    expect(
      generateInterfaces(
        {
          UserInfoRequest: {
            type: "object",
            properties: {
              entities: { type: "array", $ref: "#/definitions/Entity" },
              "include-disabled": {
                type: "boolean",
              },
            },
            required: ["entities"],
          },
        },
        "UserInfo"
      )
    ).toStrictEqual([
      {
        name: "UserInfoRequest",
        types: [
          { name: "entities", required: true, type: "array" },
          { name: "include-disabled", required: false, type: "boolean" },
        ],
      },
      {
        name: "AdditionalProperties",
        types: [{ name: "[key: string]", required: false, type: "any" }],
      },
    ]);
  });

  it("handles additionalProperties", () => {
    expect(
      generateInterfaces(
        {
          UserInfoRequest: {
            type: "object",
            properties: {
              entities: {
                type: "object",
                additionalProperties: true,
              },
            },
            required: ["entities", "include-disabled"],
          },
        },
        "UserInfo"
      )
    ).toStrictEqual([
      {
        name: "UserInfoRequest",
        types: [
          { name: "entities", required: true, type: "AdditionalProperties" },
        ],
      },
      {
        name: "AdditionalProperties",
        types: [{ name: "[key: string]", required: false, type: "any" }],
      },
    ]);
  });

  it("overrides AllWatcher methods", () => {
    expect(
      generateInterfaces(
        {
          AllWatcherNextResults: {
            type: "object",
            properties: {
              deltas: {
                type: "array",
                $ref: "#/definitions/Delta",
              },
            },
            additionalProperties: false,
            required: ["removed", "entity"],
          },
          Delta: {
            type: "object",
            properties: {
              entity: {
                type: "object",
                additionalProperties: true,
              },
              removed: {
                type: "boolean",
              },
            },
            additionalProperties: false,
            required: ["removed", "entity"],
          },
        },
        "AllWatcher"
      )
    ).toStrictEqual([
      {
        name: "AllWatcherNextResults",
        types: [
          {
            name: "deltas",
            required: true,
            type: "[string, string, unknown][]",
          },
        ],
      },
      {
        name: "Delta",
        types: [
          { name: "entity", required: true, type: "AdditionalProperties" },
          { name: "removed", required: true, type: "boolean" },
        ],
      },
      {
        name: "AdditionalProperties",
        types: [{ name: "[key: string]", required: false, type: "any" }],
      },
    ]);
  });
});

describe("generateTypes", () => {
  it("generates types for a set of properties", () => {
    expect(
      generateTypes(
        {
          applications: { type: "array", items: { type: "string" } },
          commands: { type: "string" },
          "execution-group": { type: "string" },
          parallel: { type: "boolean" },
          timeout: { type: "integer" },
        },
        []
      )
    ).toStrictEqual([
      { name: "applications", required: false, type: "string[]" },
      { name: "commands", required: false, type: "string" },
      { name: "execution-group", required: false, type: "string" },
      { name: "parallel", required: false, type: "boolean" },
      { name: "timeout", required: false, type: "number" },
    ]);
  });

  it("handles required properties", () => {
    expect(
      generateTypes(
        {
          parallel: { type: "boolean" },
          timeout: { type: "integer" },
        },
        ["parallel"]
      )
    ).toStrictEqual([
      { name: "parallel", required: true, type: "boolean" },
      { name: "timeout", required: false, type: "number" },
    ]);
  });

  it("handles additionalProperties", () => {
    expect(
      generateTypes(
        {
          actions: {
            type: "object",
            additionalProperties: true,
          },
        },
        []
      )
    ).toStrictEqual([
      { name: "actions", required: false, type: "AdditionalProperties" },
    ]);
  });

  it("handles patternProperties with with more than one key", () => {
    // This is a bail out condition in case the schema returns something unexpected.
    expect(
      generateTypes(
        {
          actions: {
            type: "object",
            patternProperties: {
              ".*": {
                type: "object",
                additionalProperties: true,
              },
              "^.": {
                type: "object",
                additionalProperties: true,
              },
            },
          },
        },
        []
      )
    ).toStrictEqual([{ name: "actions", required: false, type: "unknown" }]);
  });

  it("handles patternProperties with additionalProperties", () => {
    expect(
      generateTypes(
        {
          actions: {
            type: "object",
            patternProperties: {
              ".*": {
                type: "object",
                additionalProperties: true,
              },
            },
          },
        },
        []
      )
    ).toStrictEqual([
      { name: "actions", required: false, type: "AdditionalProperties" },
    ]);
  });

  it("handles patternProperties with refs", () => {
    expect(
      generateTypes(
        {
          actions: {
            type: "object",
            patternProperties: {
              ".*": {
                type: "object",
                $ref: "#/definitions/ActionParams",
              },
            },
          },
        },
        []
      )
    ).toStrictEqual([
      {
        name: "actions",
        required: false,
        type: "object",
        valueType: "ActionParams",
      },
    ]);
  });

  it("handles patternProperties with explicit value types", () => {
    expect(
      generateTypes(
        {
          actions: {
            type: "object",
            patternProperties: {
              ".*": {
                type: "string",
              },
            },
          },
        },
        []
      )
    ).toStrictEqual([
      {
        name: "actions",
        required: false,
        type: "object",
        valueType: "string",
      },
    ]);
  });

  it("handles patternProperties with explicit array type", () => {
    expect(
      generateTypes(
        {
          actions: {
            type: "object",
            patternProperties: {
              ".*": {
                type: "array",
                items: {
                  type: "string",
                },
              },
            },
          },
        },
        []
      )
    ).toStrictEqual([
      {
        name: "actions",
        required: false,
        type: "object",
        valueType: "string[]",
      },
    ]);
  });

  it("handles nested patternProperties", () => {
    expect(
      generateTypes(
        {
          actions: {
            type: "object",
            patternProperties: {
              ".*": {
                type: "object",
                patternProperties: {
                  ".*": {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        []
      )
    ).toStrictEqual([
      {
        name: "actions",
        required: false,
        type: "object",
        valueType: {
          type: "object",
          valueType: "string",
        },
      },
    ]);
  });

  it("overrides agent-version", () => {
    expect(
      generateTypes(
        {
          "agent-version": { $ref: "#/definitions/Number" },
        },
        []
      )
    ).toStrictEqual([
      { name: "agent-version", required: false, type: "string" },
    ]);
  });
});
