export interface FacadeTemplate {
  name: string;
  version: number;
  methods: FacadeMethod[];
  availableTo: string[];
  docBlock: string;
  jujuVersion: string;
  jujuGitSHA: string;
}

export interface FacadeMethod {
  name: string;
  params: (string | object)[];
  result: (string | object)[];
  docBlock: string;
}
