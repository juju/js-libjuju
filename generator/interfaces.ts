export interface FacadeTemplate {
  name: string;
  version: number;
  methods: FacadeMethod[];
  interfaces: object[];
  availableTo: string[];
  docBlock: string;
  jujuVersion: string;
  jujuGitSHA: string;
}

export interface ReadmeTemplate {
  clientAPIInfo: string;
  exampleList: FileInfo[];
  facadeList: FileInfo[];
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
  version: number;
  params?: any; // Typed by the call signature of the facade method.
}
