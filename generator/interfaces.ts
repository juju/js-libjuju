export interface FacadeTemplate {
  name: string;
  version: number;
  methods: FacadeMethod[];
  interfaces: InterfaceData[];
  availableTo: string[];
  docBlock: string;
  jujuVersion: string;
  jujuGitSHA: string;
}
export interface InterfaceData {
  name: string;
  types: InterfaceType[];
}

export type InterfaceValueType =
  | string
  | {
      type: string;
      valueType: InterfaceValueType;
    };

export type InterfaceType = {
  name: string;
  type: string;
  required: boolean;
  valueType?: InterfaceValueType;
};

export interface ReadmeTemplate {
  clientAPIInfo: string;
  exampleList: FileInfo[];
  facadeList: { [key: string]: FileInfo[] };
}

export interface FileInfo {
  name: string;
  path: string;
}

export interface FacadeMethod {
  name: string;
  params: string | Record<string, string>;
  paramsAtTop?: boolean;
  result: string | Record<string, string>;
  docBlock?: string;
}

export interface JujuRequest {
  type: string;
  request: string;
  "request-id"?: number;
  version: number;
  params?: any; // Typed by the call signature of the facade method.
  [key: string]: any; // Some calls pass additional params e.g. AllWatcher.next passes `id`.
}

export type CallbackError = Error | null;
export type Callback<T> = (error: CallbackError, value?: T) => void;
