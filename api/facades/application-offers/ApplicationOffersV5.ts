/**
  Juju ApplicationOffers version 5.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers

  NOTE: This file was generated using the Juju schema
  from Juju  at the git SHA 8cc1409ebd.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AddApplicationOffer {
  "application-description": string;
  "application-name": string;
  endpoints: Record<string, string>;
  "model-tag": string;
  "offer-name": string;
  "owner-tag"?: string;
}

export interface AddApplicationOffers {
  Offers: AddApplicationOffer[];
}

export interface ApplicationOfferAdminDetailsV5 {
  ApplicationOfferDetailsV5: ApplicationOfferDetailsV5;
  "application-description": string;
  "application-name": string;
  "charm-url": string;
  connections?: OfferConnection[];
  endpoints?: RemoteEndpoint[];
  "offer-name": string;
  "offer-url": string;
  "offer-uuid": string;
  "source-model-tag": string;
  users?: OfferUserDetails[];
}

export interface ApplicationOfferDetailsV5 {
  "application-description": string;
  endpoints?: RemoteEndpoint[];
  "offer-name": string;
  "offer-url": string;
  "offer-uuid": string;
  "source-model-tag": string;
  users?: OfferUserDetails[];
}

export interface ApplicationOfferResult {
  error?: Error;
  result?: ApplicationOfferAdminDetailsV5;
}

export interface ApplicationOffersResults {
  results?: ApplicationOfferResult[];
}

export interface ConsumeOfferDetails {
  "external-controller"?: ExternalControllerInfo;
  macaroon?: Macaroon;
  offer?: ApplicationOfferDetailsV5;
}

export interface ConsumeOfferDetailsArg {
  "offer-urls": OfferURLs;
  "user-tag"?: string;
}

export interface ConsumeOfferDetailsResult {
  ConsumeOfferDetails: ConsumeOfferDetails;
  error?: Error;
  "external-controller"?: ExternalControllerInfo;
  macaroon?: Macaroon;
  offer?: ApplicationOfferDetailsV5;
}

export interface ConsumeOfferDetailsResults {
  results?: ConsumeOfferDetailsResult[];
}

export interface DestroyApplicationOffers {
  force?: boolean;
  "offer-urls": string[];
}

export interface EndpointFilterAttributes {
  interface: string;
  name: string;
  role: string;
}

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
  error?: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface ExternalControllerInfo {
  addrs: string[];
  "ca-cert": string;
  "controller-alias": string;
  "controller-tag": string;
}

export interface Macaroon {
  [key: string]: AdditionalProperties;
}

export interface ModifyOfferAccess {
  access: string;
  action: string;
  "offer-url": string;
  "user-tag": string;
}

export interface ModifyOfferAccessRequest {
  changes: ModifyOfferAccess[];
}

export interface OfferConnection {
  endpoint: string;
  "ingress-subnets": string[];
  "relation-id": number;
  "source-model-tag": string;
  status: EntityStatus;
  username: string;
}

export interface OfferFilter {
  "allowed-users": string[];
  "application-description": string;
  "application-name": string;
  "application-user": string;
  "connected-users": string[];
  endpoints: EndpointFilterAttributes[];
  "model-name": string;
  "offer-name": string;
  "owner-name": string;
}

export interface OfferFilters {
  Filters: OfferFilter[];
}

export interface OfferURLs {
  "bakery-version"?: number;
  "offer-urls"?: string[];
}

export interface OfferUserDetails {
  access: string;
  "display-name": string;
  user: string;
}

export interface QueryApplicationOffersResultsV5 {
  results: ApplicationOfferAdminDetailsV5[];
}

export interface RemoteApplicationInfo {
  description: string;
  endpoints: RemoteEndpoint[];
  "icon-url-path": string;
  "model-tag": string;
  name: string;
  "offer-url": string;
  "source-model-label"?: string;
}

export interface RemoteApplicationInfoResult {
  error?: Error;
  result?: RemoteApplicationInfo;
}

export interface RemoteApplicationInfoResults {
  results: RemoteApplicationInfoResult[];
}

export interface RemoteEndpoint {
  interface: string;
  limit: number;
  name: string;
  role: string;
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**

*/
class ApplicationOffersV5 implements Facade {
  static NAME = "ApplicationOffers";
  static VERSION = 5;

  NAME = "ApplicationOffers";
  VERSION = 5;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**

  */
  applicationOffers(params: OfferURLs): Promise<ApplicationOffersResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "ApplicationOffers",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  destroyOffers(params: DestroyApplicationOffers): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "DestroyOffers",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  findApplicationOffers(
    params: OfferFilters
  ): Promise<QueryApplicationOffersResultsV5> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "FindApplicationOffers",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  getConsumeDetails(
    params: ConsumeOfferDetailsArg
  ): Promise<ConsumeOfferDetailsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "GetConsumeDetails",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  listApplicationOffers(
    params: OfferFilters
  ): Promise<QueryApplicationOffersResultsV5> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "ListApplicationOffers",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  modifyOfferAccess(params: ModifyOfferAccessRequest): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "ModifyOfferAccess",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  offer(params: AddApplicationOffers): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "Offer",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**

  */
  remoteApplicationInfo(
    params: OfferURLs
  ): Promise<RemoteApplicationInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "RemoteApplicationInfo",
        version: 5,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ApplicationOffersV5;
