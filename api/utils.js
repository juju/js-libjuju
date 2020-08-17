// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

"use strict";

/**
  Automatically bind all methods of the given object to the object itself.

  @param {Object} obj The object whose method must be bound.
*/
export function autoBind(obj) {
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
export function createAsyncHandler(callback, resolve, reject, transform) {
  return (err, value) => {
    if (err) {
      callback ? callback(err, null) : reject(err);
      return;
    }
    if (transform) {
      value = transform(value);
    }
    callback ? callback(null, value) : resolve(value);
  };
}
