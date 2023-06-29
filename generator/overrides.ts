import { SchemaDefinition } from "./templates/types.js";

type MethodOverrides = Record<
  string,
  Record<
    string,
    {
      Params?: Record<string, string>;
      paramsAtTop?: boolean;
      Result?: Record<string, string>;
    }
  >
>;

type DefinitionsOverrides = Record<string, Record<string, SchemaDefinition>>;

export const methodOverrides: MethodOverrides = {
  AllWatcher: {
    Next: {
      Params: {
        // The schema does not specify the id param for this method.
        // https://bugs.launchpad.net/juju/+bug/2025110
        id: "string",
      },
      // Unlike other methods the id needs to be at the top level instead of inside the params object.
      // https://bugs.launchpad.net/juju/+bug/2025110
      paramsAtTop: true,
    },
    Stop: {
      Params: {
        // The schema does not specify the id param for this method.
        // https://bugs.launchpad.net/juju/+bug/2025110
        id: "string",
      },
      // Unlike other methods the id needs to be at the top level instead of inside the params object.
      // https://bugs.launchpad.net/juju/+bug/2025110
      paramsAtTop: true,
    },
  },
  AllModelWatcher: {
    Next: {
      Params: {
        // The schema does not specify the id param for this method.
        // https://bugs.launchpad.net/juju/+bug/2025110
        id: "string",
      },
      // Unlike other methods the id needs to be at the top level instead of inside the params object.
      // https://bugs.launchpad.net/juju/+bug/2025110
      paramsAtTop: true,
    },
    Stop: {
      Params: {
        // The schema does not specify the id param for this method.
        // https://bugs.launchpad.net/juju/+bug/2025110
        id: "string",
      },
      // Unlike other methods the id needs to be at the top level instead of inside the params object.
      // https://bugs.launchpad.net/juju/+bug/2025110
      paramsAtTop: true,
    },
  },
};

export const definitionsOverrides: DefinitionsOverrides = {
  AllWatcher: {
    AllWatcherNextResults: {
      type: "object",
      properties: {
        deltas: {
          // The schema defines the delta as an object instead of a tuple.
          // https://bugs.launchpad.net/juju/+bug/2025105
          type: "[string, string, unknown][]",
        },
      },
      additionalProperties: false,
      required: ["deltas"],
    },
  },
  AllModelWatcher: {
    AllWatcherNextResults: {
      type: "object",
      properties: {
        deltas: {
          // The schema defines the delta as an object instead of a tuple.
          // https://bugs.launchpad.net/juju/+bug/2025105
          type: "[string, string, unknown][]",
        },
      },
      additionalProperties: false,
      required: ["deltas"],
    },
  },
};

export const attributeOverrides: Record<string, string> = {
  // The schema defines agent-version as a `Number` object but it is returned by the
  // API as a string.
  // https://bugs.launchpad.net/juju/+bug/2025108
  "agent-version": "string",
};
