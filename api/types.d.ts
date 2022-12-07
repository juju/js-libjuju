import { ConnectionInfo, Transport } from "./client";

export type GenericFacade = {
  name: string;
};

export interface Facade {
  NAME: string;
  VERSION: number;

  version?: number;
  name?: string;
  _transport: Transport;
  _info: ConnectionInfo;
}
