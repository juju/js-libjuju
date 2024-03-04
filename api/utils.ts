// Copyright 2020 Canonical Ltd.
// Licensed under the LGPLv3, see LICENSE.txt file for details.

import { Callback, CallbackError } from "../generator/interfaces";

export enum Label {
  UNKNOWN_ERROR = "Unknown error",
}

/**
  Automatically bind all methods of the given object to the object itself.
  @param obj The object whose method must be bound.
*/
export function autoBind(obj: { [k: string]: any }): void {
  const names = Object.getOwnPropertyNames(obj.constructor.prototype);
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name !== "constructor" && typeof obj[name] === "function") {
      obj[name] = obj[name].bind(obj);
    }
  }
}

/**
  Create an async handler which will either return a value to a supplied
  callback, or call the appropriate method on the promise resolve/reject.

  @param {Function} [callback] The optional callback.
  @param {Function} [resolve] The optional promise resolve function.
  @param {Function} [reject] The optional promise reject function.
  @param {Function} [transform] The optional response transform function.
  @return {Function} The returned function takes two arguments (err, value).
    If the the callback is a function the two arguments will be passed through
    to the callback in the same order. If no callback is supplied, the promise
    resolve or reject method will be called depending on the existence of an
    error value.
*/
export function createAsyncHandler<T>(
  callback: Callback<T> | undefined,
  resolve: (value: T) => void,
  reject: (value: CallbackError) => void,
  transform?: (value: T) => T
): { resolve: Function; reject: Function } {
  return {
    resolve: (value: T) => {
      if (transform) {
        value = transform(value!);
      }
      callback ? callback(null, value) : resolve(value!);
    },
    reject: (error: CallbackError) => {
      if (error) {
        callback ? callback(error) : reject(error);
        return;
      }
    },
  };
}

/**
  Convert given input to an Error object.

  @param error - The input to be converted to an Error object.
  @returns An Error object.
*/
export function toError(error: any): Error {
  if (error instanceof Error) {
    return error;
  }
  if (typeof error === "string") {
    return new Error(error);
  }
  return new Error(Label.UNKNOWN_ERROR);
}
