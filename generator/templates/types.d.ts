export interface Facade {
  Name: string;
  Version: number;
  Schema: FacadeSchema;
  Description: string;
  AvailableTo: string[];
}

export interface FacadeSchema {
  type: string;
  properties: SchemaMethods;
  definitions: SchemaDefinitions;
}

export interface SchemaMethods {
  [methodName: string]: SchemaMethod;
}

export interface SchemaDefinitions {
  [definitionName: string]: SchemaDefinition;
}

export interface SchemaMethod {
  type: string;
  properties?: SchemaProperties;
  description?: string;
}

export interface SchemaDefinition {
  type: string;
  properties: DefinitionProperties;
  additionalProperties?: boolean;
  required?: string[];
}

export interface DefinitionProperties {
  [argumentName: string]: JSONSchemaType;
}

export interface JSONSchemaType {
  type?: string;
  items?: JSONSchemaType;
  additionalProperties?: boolean;
  patternProperties?: Record<string, JSONSchemaType>;
  $ref?: string;
}

export interface SchemaProperties {
  Params?: SchemaPropertyValue;
  Result: SchemaPropertyValue;
}
export interface SchemaPropertyValue {
  $ref?: string;
  type?: string;
}

export interface FacadeList {
  [k: string]: number[];
}
