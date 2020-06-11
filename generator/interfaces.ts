export interface FacadeTemplate {
  name: string;
  version: number;
  methods: FacadeMethod[];
  availableOnControllers: boolean;
  availableOnModels: boolean;
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
