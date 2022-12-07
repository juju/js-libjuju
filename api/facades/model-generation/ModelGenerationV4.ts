/**
  Juju ModelGeneration version 4.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated using the Juju schema
  from Juju 3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface BoolResult {
  error?: Error;
  result: boolean;
}

export interface BranchArg {
  branch: string;
}

export interface BranchInfoArgs {
  branches: string[];
  detailed: boolean;
}

export interface BranchResults {
  error?: Error;
  generations: Generation[];
}

export interface BranchTrackArg {
  branch: string;
  entities: Entity[];
  "num-units"?: number;
}

export interface Entity {
  tag: string;
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface ErrorResult {
  error: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface Generation {
  applications: GenerationApplication[];
  branch: string;
  completed?: number;
  "completed-by"?: string;
  created: number;
  "created-by": string;
  "generation-id"?: number;
}

export interface GenerationApplication {
  application: string;
  config: AdditionalProperties;
  pending?: string[];
  progress: string;
  tracking?: string[];
}

export interface GenerationId {
  "generation-id": number;
}

export interface GenerationResult {
  error?: Error;
  generation: Generation;
}

export interface IntResult {
  error?: Error;
  result: number;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  API is the concrete implementation of the API endpoint.
*/
class ModelGenerationV4 implements Facade {
  static NAME = "ModelGeneration";
  static VERSION = 4;

  NAME = "ModelGeneration";
  VERSION = 4;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    AbortBranch aborts the input branch, marking it complete.  However no
    changes are made applicable to the whole model.  No units may be assigned
    to the branch when aborting.
  */
  abortBranch(params: BranchArg): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelGeneration",
        request: "AbortBranch",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    AddBranch adds a new branch with the input name to the model.
  */
  addBranch(params: BranchArg): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelGeneration",
        request: "AddBranch",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    BranchInfo will return details of branch identified by the input argument,
    including units on the branch and the configuration disjoint with the
    master generation.
    An error is returned if no in-flight branch matching in input is found.
  */
  branchInfo(params: BranchInfoArgs): Promise<BranchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelGeneration",
        request: "BranchInfo",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    CommitBranch commits the input branch, making its changes applicable to
    the whole model and marking it complete.
  */
  commitBranch(params: BranchArg): Promise<IntResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelGeneration",
        request: "CommitBranch",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    HasActiveBranch returns a true result if the input model has an "in-flight"
    branch matching the input name.
  */
  hasActiveBranch(params: BranchArg): Promise<BoolResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelGeneration",
        request: "HasActiveBranch",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ListCommits will return the commits, hence only branches with generation_id higher than 0
  */
  listCommits(params: any): Promise<BranchResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelGeneration",
        request: "ListCommits",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ShowCommit will return details a commit given by its generationId
    An error is returned if either no branch can be found corresponding to the generation id.
    Or the generation id given is below 1.
  */
  showCommit(params: GenerationId): Promise<GenerationResult> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelGeneration",
        request: "ShowCommit",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    TrackBranch marks the input units and/or applications as tracking the input
    branch, causing them to realise changes made under that branch.
  */
  trackBranch(params: BranchTrackArg): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ModelGeneration",
        request: "TrackBranch",
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ModelGenerationV4;
