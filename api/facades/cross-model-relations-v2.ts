/**
  Juju CrossModelRelations version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Mon, 28 Nov 2022 01:16:43 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils";
import type { JujuRequest } from "../../generator/interfaces";


export interface EntityStatus {
  data?: AdditionalProperties;
  info: string;
  since: string;
  status: string;
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

export interface IngressNetworksChangeEvent {
  'application-token': string;
  'bakery-version'?: number;
  'ingress-required': boolean;
  macaroons?: Macaroon[];
  networks?: string[];
  'relation-token': string;
}

export interface IngressNetworksChanges {
  changes: IngressNetworksChangeEvent[];
}

export interface Macaroon {
  [key: string]: AdditionalProperties;
}

export interface OfferArg {
  'bakery-version'?: number;
  macaroons?: Macaroon[];
  'offer-uuid': string;
}

export interface OfferArgs {
  args: OfferArg[];
}

export interface OfferStatusChange {
  'offer-name': string;
  status: EntityStatus;
}

export interface OfferStatusWatchResult {
  changes: OfferStatusChange[];
  error?: Error;
  'watcher-id': string;
}

export interface OfferStatusWatchResults {
  results: OfferStatusWatchResult[];
}

export interface RegisterRemoteRelationArg {
  'application-token': string;
  'bakery-version'?: number;
  'consume-version'?: number;
  'local-endpoint-name': string;
  macaroons?: Macaroon[];
  'offer-uuid': string;
  'relation-token': string;
  'remote-endpoint': RemoteEndpoint;
  'remote-space': RemoteSpace;
  'source-model-tag': string;
}

export interface RegisterRemoteRelationArgs {
  relations: RegisterRemoteRelationArg[];
}

export interface RegisterRemoteRelationResult {
  error: Error;
  result: RemoteRelationDetails;
}

export interface RegisterRemoteRelationResults {
  results: RegisterRemoteRelationResult[];
}

export interface RelationLifeSuspendedStatusChange {
  key: string;
  life: string;
  suspended: boolean;
  'suspended-reason': string;
}

export interface RelationLifeSuspendedStatusWatchResult {
  changes: RelationLifeSuspendedStatusChange[];
  error?: Error;
  'watcher-id': string;
}

export interface RelationStatusWatchResults {
  results: RelationLifeSuspendedStatusWatchResult[];
}

export interface RemoteEndpoint {
  interface: string;
  limit: number;
  name: string;
  role: string;
}

export interface RemoteEntityArg {
  'bakery-version'?: number;
  macaroons?: Macaroon[];
  'relation-token': string;
}

export interface RemoteEntityArgs {
  args: RemoteEntityArg[];
}

export interface RemoteRelationChangeEvent {
  'application-settings'?: AdditionalProperties;
  'application-token': string;
  'bakery-version'?: number;
  'changed-units'?: RemoteRelationUnitChange[];
  'departed-units'?: number[];
  'force-cleanup'?: boolean;
  life: string;
  macaroons?: Macaroon[];
  'relation-token': string;
  suspended?: boolean;
  'suspended-reason'?: string;
  'unit-count': number;
}

export interface RemoteRelationDetails {
  'bakery-version'?: number;
  macaroon?: Macaroon;
  'relation-token': string;
}

export interface RemoteRelationUnitChange {
  settings?: AdditionalProperties;
  'unit-id': number;
}

export interface RemoteRelationWatchResult {
  changes: RemoteRelationChangeEvent;
  error?: Error;
  'watcher-id': string;
}

export interface RemoteRelationWatchResults {
  results: RemoteRelationWatchResult[];
}

export interface RemoteRelationsChanges {
  changes: RemoteRelationChangeEvent[];
}

export interface RemoteSpace {
  'cloud-type': string;
  name: string;
  'provider-attributes': AdditionalProperties;
  'provider-id': string;
  subnets: Subnet[];
}

export interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  'watcher-id': string;
}

export interface StringsWatchResults {
  results: StringsWatchResult[];
}

export interface Subnet {
  cidr: string;
  life: string;
  'provider-id'?: string;
  'provider-network-id'?: string;
  'provider-space-id'?: string;
  'space-tag': string;
  status?: string;
  'vlan-tag': number;
  zones: string[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  CrossModelRelationsAPI provides access to the CrossModelRelations API facade.
*/
class CrossModelRelationsV2 {
  static NAME: string = 'CrossModelRelations';
  static VERSION: number = 2;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 2;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    PublishIngressNetworkChanges publishes changes to the required
    ingress addresses to the model hosting the offer in the relation.
  */
  publishIngressNetworkChanges(params: IngressNetworksChanges): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CrossModelRelations',
        request: 'PublishIngressNetworkChanges',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    PublishRelationChanges publishes relation changes to the
    model hosting the remote application involved in the relation.
  */
  publishRelationChanges(params: RemoteRelationsChanges): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CrossModelRelations',
        request: 'PublishRelationChanges',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RegisterRemoteRelations sets up the model to participate
    in the specified relations. This operation is idempotent.
  */
  registerRemoteRelations(params: RegisterRemoteRelationArgs): Promise<RegisterRemoteRelationResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CrossModelRelations',
        request: 'RegisterRemoteRelations',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchEgressAddressesForRelations creates a watcher that notifies when addresses, from which
    connections will originate for the relation, change.
    Each event contains the entire set of addresses which are required for ingress for the relation.
  */
  watchEgressAddressesForRelations(params: RemoteEntityArgs): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CrossModelRelations',
        request: 'WatchEgressAddressesForRelations',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchOfferStatus starts an OfferStatusWatcher for
    watching the status of an offer.
  */
  watchOfferStatus(params: OfferArgs): Promise<OfferStatusWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CrossModelRelations',
        request: 'WatchOfferStatus',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchRelationChanges starts a RemoteRelationChangesWatcher for each
    specified relation, returning the watcher IDs and initial values,
    or an error if the remote relations couldn't be watched.
  */
  watchRelationChanges(params: RemoteEntityArgs): Promise<RemoteRelationWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CrossModelRelations',
        request: 'WatchRelationChanges',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchRelationsSuspendedStatus starts a RelationStatusWatcher for
    watching the life and suspended status of a relation.
  */
  watchRelationsSuspendedStatus(params: RemoteEntityArgs): Promise<RelationStatusWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CrossModelRelations',
        request: 'WatchRelationsSuspendedStatus',
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CrossModelRelationsV2;
