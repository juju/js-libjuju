/**
  Juju ApplicationOffers version 2.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers

  NOTE: This file was generated using the Juju schema
  from Juju 2.8.2 at the git SHA 516c1904ce.
  Do not manually edit this file.
*/

import type { JujuRequest } from "../../../generator/interfaces.js";
import { ConnectionInfo, Transport } from "../../client.js";
import { Facade } from "../../types.js";
import { autoBind } from "../../utils.js";

export interface AddApplicationOffer {
  "application-description": string;
  "application-name": string;
  endpoints: AdditionalProperties;
  "model-tag": string;
  "offer-name": string;
}

export interface AddApplicationOffers {
  Offers: AddApplicationOffer[];
}

export interface ApplicationOfferAdminDetails {
  ApplicationOfferDetails: ApplicationOfferDetails;
  "application-description": string;
  "application-name": string;
  bindings?: AdditionalProperties;
  "charm-url": string;
  connections?: OfferConnection[];
  endpoints?: RemoteEndpoint[];
  "offer-name": string;
  "offer-url": string;
  "offer-uuid": string;
  "source-model-tag": string;
  spaces?: RemoteSpace[];
  users?: OfferUserDetails[];
}

export interface ApplicationOfferDetails {
  "application-description": string;
  bindings?: AdditionalProperties;
  endpoints?: RemoteEndpoint[];
  "offer-name": string;
  "offer-url": string;
  "offer-uuid": string;
  "source-model-tag": string;
  spaces?: RemoteSpace[];
  users?: OfferUserDetails[];
}

export interface ApplicationOfferResult {
  error: Error;
  result: ApplicationOfferAdminDetails;
}

export interface ApplicationOffersResults {
  results: ApplicationOfferResult[];
}

export interface ConsumeOfferDetails {
  "external-controller": ExternalControllerInfo;
  macaroon: Macaroon;
  offer: ApplicationOfferDetails;
}

export interface ConsumeOfferDetailsResult {
  ConsumeOfferDetails: ConsumeOfferDetails;
  error?: Error;
  "external-controller"?: ExternalControllerInfo;
  macaroon?: Macaroon;
  offer?: ApplicationOfferDetails;
}

export interface ConsumeOfferDetailsResults {
  results: ConsumeOfferDetailsResult[];
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
  error: Error;
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
  "bakery-version": number;
  "offer-urls": string[];
}

export interface OfferUserDetails {
  access: string;
  "display-name": string;
  user: string;
}

export interface QueryApplicationOffersResults {
  results: ApplicationOfferAdminDetails[];
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
  error: Error;
  result: RemoteApplicationInfo;
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

export interface RemoteSpace {
  "cloud-type": string;
  name: string;
  "provider-attributes": AdditionalProperties;
  "provider-id": string;
  subnets: Subnet[];
}

export interface Subnet {
  cidr: string;
  life: string;
  "provider-id"?: string;
  "provider-network-id"?: string;
  "provider-space-id"?: string;
  "space-tag": string;
  status?: string;
  "vlan-tag": number;
  zones: string[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  OffersAPIV2 implements the cross model interface V2.
*/
class ApplicationOffersV2 implements Facade {
  static NAME = "ApplicationOffers";
  static VERSION = 2;

  NAME = "ApplicationOffers";
  VERSION = 2;

  _transport: Transport;
  _info: ConnectionInfo;

  constructor(transport: Transport, info: ConnectionInfo) {
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  /**
    ApplicationOffers gets details about remote applications that match given URLs.
  */
  applicationOffers(params: OfferURLs): Promise<ApplicationOffersResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "ApplicationOffers",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    DestroyOffers removes the offers specified by the given URLs, forcing if necessary.
  */
  destroyOffers(params: DestroyApplicationOffers): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "DestroyOffers",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    FindApplicationOffers gets details about remote applications that match given filter.
  */
  findApplicationOffers(
    params: OfferFilters
  ): Promise<QueryApplicationOffersResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "FindApplicationOffers",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    GetConsumeDetails returns the details necessary to pass to another model to
    consume the specified offers represented by the urls.
  */
  getConsumeDetails(params: OfferURLs): Promise<ConsumeOfferDetailsResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "GetConsumeDetails",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ListApplicationOffers gets deployed details about application offers that match given filter.
    The results contain details about the deployed applications such as connection count.
  */
  listApplicationOffers(
    params: OfferFilters
  ): Promise<QueryApplicationOffersResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "ListApplicationOffers",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    ModifyOfferAccess changes the application offer access granted to users.
  */
  modifyOfferAccess(params: ModifyOfferAccessRequest): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "ModifyOfferAccess",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    Offer makes application endpoints available for consumption at a specified URL.
  */
  offer(params: AddApplicationOffers): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "Offer",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }

  /**
    RemoteApplicationInfo returns information about the requested remote application.
    This call currently has no client side API, only there for the GUI at this stage.
  */
  remoteApplicationInfo(
    params: OfferURLs
  ): Promise<RemoteApplicationInfoResults> {
    return new Promise((resolve, reject) => {
      const req: JujuRequest = {
        type: "ApplicationOffers",
        request: "RemoteApplicationInfo",
        version: 2,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
}

export default ApplicationOffersV2;
