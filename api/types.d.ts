import { ConnectionInfo, Transport } from "./client";

export interface Facade {
  NAME: string;
  VERSION: number;

  version?: number;
  name?: string;
  _transport: Transport;
  _info: ConnectionInfo;
}

type StaticFacade = {
  NAME: string;
  VERSION: number;
};
type ClassType<T> = new (...args: any[]) => T;
type ClassArray<T, U> = Array<ClassType<T> & U>;
export type FacadeClass = ClassType<Facade> & StaticFacade;
export type FacadeClassList = ClassArray<Facade, StaticFacade>;
export type GenericFacade = {
  name: string;
  versions: FacadeClassList;
};
