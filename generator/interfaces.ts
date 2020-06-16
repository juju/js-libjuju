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

export interface FacadeMethod {
  name: string;
  params: string;
  result: string;
  docBlock: string;
}
