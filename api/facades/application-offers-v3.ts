/**
  Juju ApplicationOffers version 3.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface AddApplicationOffer {
  'application-description': string;
  'application-name': string;
  endpoints: AdditionalProperties;
  'model-tag': string;
  'offer-name': string;
}

interface AddApplicationOffers {
  Offers: AddApplicationOffer[];
}

interface ApplicationOfferAdminDetails {
  ApplicationOfferDetails: ApplicationOfferDetails;
  'application-description': string;
  'application-name': string;
  bindings?: AdditionalProperties;
  'charm-url': string;
  connections?: OfferConnection[];
  endpoints?: RemoteEndpoint[];
  'offer-name': string;
  'offer-url': string;
  'offer-uuid': string;
  'source-model-tag': string;
  spaces?: RemoteSpace[];
  users?: OfferUserDetails[];
}

interface ApplicationOfferDetails {
  'application-description': string;
  bindings?: AdditionalProperties;
  endpoints?: RemoteEndpoint[];
  'offer-name': string;
  'offer-url': string;
  'offer-uuid': string;
  'source-model-tag': string;
  spaces?: RemoteSpace[];
  users?: OfferUserDetails[];
}

interface ApplicationOfferResult {
  error: Error;
  result: ApplicationOfferAdminDetails;
}

interface ApplicationOffersResults {
  results: ApplicationOfferResult[];
}

interface ConsumeOfferDetails {
  'external-controller': ExternalControllerInfo;
  macaroon: Macaroon;
  offer: ApplicationOfferDetails;
}

interface ConsumeOfferDetailsArg {
  'offer-urls': OfferURLs;
  'user-tag'?: string;
}

interface ConsumeOfferDetailsResult {
  ConsumeOfferDetails: ConsumeOfferDetails;
  error?: Error;
  'external-controller'?: ExternalControllerInfo;
  macaroon?: Macaroon;
  offer?: ApplicationOfferDetails;
}

interface ConsumeOfferDetailsResults {
  results: ConsumeOfferDetailsResult[];
}

interface DestroyApplicationOffers {
  force?: boolean;
  'offer-urls': string[];
}

interface EndpointFilterAttributes {
  interface: string;
  name: string;
  role: string;
}

interface EntityStatus {
  data?: AdditionalProperties;
  info: string;
  since: string;
  status: string;
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ErrorResult {
  error: Error;
}

interface ErrorResults {
  results: ErrorResult[];
}

interface ExternalControllerInfo {
  addrs: string[];
  'ca-cert': string;
  'controller-alias': string;
  'controller-tag': string;
}

interface Macaroon {
  [key: string]: AdditionalProperties;
}

interface ModifyOfferAccess {
  access: string;
  action: string;
  'offer-url': string;
  'user-tag': string;
}

interface ModifyOfferAccessRequest {
  changes: ModifyOfferAccess[];
}

interface OfferConnection {
  endpoint: string;
  'ingress-subnets': string[];
  'relation-id': number;
  'source-model-tag': string;
  status: EntityStatus;
  username: string;
}

interface OfferFilter {
  'allowed-users': string[];
  'application-description': string;
  'application-name': string;
  'application-user': string;
  'connected-users': string[];
  endpoints: EndpointFilterAttributes[];
  'model-name': string;
  'offer-name': string;
  'owner-name': string;
}

interface OfferFilters {
  Filters: OfferFilter[];
}

interface OfferURLs {
  'bakery-version': number;
  'offer-urls': string[];
}

interface OfferUserDetails {
  access: string;
  'display-name': string;
  user: string;
}

interface QueryApplicationOffersResults {
  results: ApplicationOfferAdminDetails[];
}

interface RemoteApplicationInfo {
  description: string;
  endpoints: RemoteEndpoint[];
  'icon-url-path': string;
  'model-tag': string;
  name: string;
  'offer-url': string;
  'source-model-label'?: string;
}

interface RemoteApplicationInfoResult {
  error: Error;
  result: RemoteApplicationInfo;
}

interface RemoteApplicationInfoResults {
  results: RemoteApplicationInfoResult[];
}

interface RemoteEndpoint {
  interface: string;
  limit: number;
  name: string;
  role: string;
}

interface RemoteSpace {
  'cloud-type': string;
  name: string;
  'provider-attributes': AdditionalProperties;
  'provider-id': string;
  subnets: Subnet[];
}

interface Subnet {
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

interface AdditionalProperties {
  [key: string]: any;
}

/**
  OffersAPIV3 implements the cross model interface V3.
*/
class ApplicationOffersV3 {
  static NAME: string = 'ApplicationOffers';
  static VERSION: number = 3;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 3;
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
        type: 'ApplicationOffers',
        request: 'ApplicationOffers',
        version: 3,
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
        type: 'ApplicationOffers',
        request: 'DestroyOffers',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    FindApplicationOffers gets details about remote applications that match given filter.
  */
  findApplicationOffers(params: OfferFilters): Promise<QueryApplicationOffersResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ApplicationOffers',
        request: 'FindApplicationOffers',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetConsumeDetails returns the details necessary to pass to another model
    to allow the specified args user to consume the offers represented by the args URLs.
  */
  getConsumeDetails(params: ConsumeOfferDetailsArg): Promise<ConsumeOfferDetailsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ApplicationOffers',
        request: 'GetConsumeDetails',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListApplicationOffers gets deployed details about application offers that match given filter.
    The results contain details about the deployed applications such as connection count.
  */
  listApplicationOffers(params: OfferFilters): Promise<QueryApplicationOffersResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ApplicationOffers',
        request: 'ListApplicationOffers',
        version: 3,
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
        type: 'ApplicationOffers',
        request: 'ModifyOfferAccess',
        version: 3,
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
        type: 'ApplicationOffers',
        request: 'Offer',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RemoteApplicationInfo returns information about the requested remote application.
    This call currently has no client side API, only there for the Dashboard at this stage.
  */
  remoteApplicationInfo(params: OfferURLs): Promise<RemoteApplicationInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ApplicationOffers',
        request: 'RemoteApplicationInfo',
        version: 3,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ApplicationOffersV3;
