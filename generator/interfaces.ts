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
export interface InterfaceType {
  name: string;
  type: string;
  required: boolean;
}
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
  params: string;
  result: string;
  docBlock: string;
}

export interface JujuRequest {
  type: string;
  request: string;
  "request-id"?: number;
  version: number;
  params?: any; // Typed by the call signature of the facade method.
}

export type CallbackError = string | number | null;
export type Callback<T> = (error?: CallbackError, value?: T) => void;
