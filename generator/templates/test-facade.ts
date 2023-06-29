import { generateInterface, generateMethods } from "./facade";

describe("generateInterface", () => {
  it("generates an interface", () => {
    expect(
      generateInterface({
        name: "action",
        types: [
          { name: "applications", required: true, type: "string[]" },
          { name: "commands", required: true, type: "number" },
        ],
      })
    ).toBe(`
export interface action {
  applications: string[];
  commands: number;
}`);
  });

  it("handles optional params", () => {
    expect(
      generateInterface({
        name: "action",
        types: [{ name: "application", required: false, type: "string" }],
      })
    ).toBe(`
export interface action {
  application?: string;
}`);
  });

  it("handles additional properties", () => {
    expect(
      generateInterface({
        name: "action",
        types: [
          { name: "actions", required: true, type: "AdditionalProperties" },
        ],
      })
    ).toBe(`
export interface action {
  actions: AdditionalProperties;
}`);
  });

  it("handles named types", () => {
    expect(
      generateInterface({
        name: "action",
        types: [
          {
            name: "actions",
            required: true,
            type: "object",
            valueType: "ActionParams",
          },
        ],
      })
    ).toBe(`
export interface action {
  actions: Record<string, ActionParams>;
}`);
  });

  it("handles object types", () => {
    expect(
      generateInterface({
        name: "action",
        types: [
          {
            name: "actions",
            required: true,
            type: "object",
            valueType: "string",
          },
        ],
      })
    ).toBe(`
export interface action {
  actions: Record<string, string>;
}`);
  });

  it("handles objects with arrays", () => {
    expect(
      generateInterface({
        name: "action",
        types: [
          {
            name: "actions",
            required: true,
            type: "object",
            valueType: "string[]",
          },
        ],
      })
    ).toBe(`
export interface action {
  actions: Record<string, string[]>;
}`);
  });

  it("handles nested objects", () => {
    expect(
      generateInterface({
        name: "action",
        types: [
          {
            name: "actions",
            required: true,
            type: "object",
            valueType: {
              type: "object",
              valueType: "string",
            },
          },
        ],
      })
    ).toBe(`
export interface action {
  actions: Record<string, Record<string, string>>;
}`);
  });
});

describe("generateMethods", () => {
  it("generates methods", () => {
    expect(
      generateMethods({
        name: "VolumeAttachmentsWatcher",
        version: 2,
        methods: [
          {
            name: "Next",
            params: "any",
            result: "MachineStorageIdsWatchResult",
            docBlock:
              "Next returns when a change has occurred to an entity of the\n" +
              "collection being watched since the most recent call to Next\n" +
              "or the Watch call that created the srvMachineStorageIdsWatcher.",
          },
          {
            name: "Stop",
            params: "any",
            result: "any",
            docBlock: "Stop stops the watcher.",
          },
        ],
        interfaces: [
          {
            name: "Error",
            types: [{ name: "message", required: true, type: "string" }],
          },
          {
            name: "MachineStorageId",
            types: [
              { name: "disk", required: true, type: "string[]" },
              { name: "version", required: true, type: "number" },
            ],
          },
          { name: "AdditionalProperties", types: [] },
        ],
        availableTo: [
          "controller-machine-agent",
          "machine-agent",
          "unit-agent",
          "model-user",
        ],
        docBlock:
          "srvMachineStorageIdsWatcher defines the API wrapping a state.StringsWatcher\n" +
          "watching machine/storage attachments. This watcher notifies about storage\n" +
          "entities (volumes/filesystems) being attached to and detached from machines.\n" +
          "\n" +
          "TODO(axw) state needs a new watcher, this is a bt of a hack. State watchers\n" +
          "could do with some deduplication of logic, and I don't want to add to that\n" +
          "spaghetti right now.",
        jujuVersion: "3.2",
        jujuGitSHA: "3a098707a1",
      })
    ).toBe(`/**
    Next returns when a change has occurred to an entity of the
    collection being watched since the most recent call to Next
    or the Watch call that created the srvMachineStorageIdsWatcher.
  */
  next(params: any): Promise<MachineStorageIdsWatchResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "VolumeAttachmentsWatcher",
        request: "Next",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

/**
    Stop stops the watcher.
  */
  stop(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "VolumeAttachmentsWatcher",
        request: "Stop",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
`);
  });

  it("handles top level params", () => {
    expect(
      generateMethods({
        name: "VolumeAttachmentsWatcher",
        version: 2,
        methods: [
          {
            name: "Stop",
            params: { id: "string", restart: "boolean" },
            result: "any",
            docBlock: "Stop stops the watcher.",
          },
        ],
        interfaces: [],
        availableTo: [],
        docBlock: "",
        jujuVersion: "3.2",
        jujuGitSHA: "3a098707a1",
      })
    ).toBe(`/**
    Stop stops the watcher.
  */
  stop(params: { id: string; restart: boolean; }): Promise<any> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "VolumeAttachmentsWatcher",
        request: "Stop",
        version: 2,
        id: params.id,
        restart: params.restart,
      };

      this._transport.write(req, resolve, reject);
    });
  }
`);
  });
});
