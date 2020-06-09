export interface facadeTemplate {
  name: string;
  version: number;
  methods: facadeMethod[];
  availableOnControllers: boolean;
  availableOnModels: boolean;
  docBlock: string; // Not currently available in the new Juju schema.
}

export interface facadeMethod {
  name: string;
  params: (string | object)[];
  result: (string | object)[];
  docBlock: string; // Not currently available in the new Juju schema.
}
