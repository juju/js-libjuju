// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

'use strict';

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
function createAsyncHandler (callback, resolve, reject, transform) {
  return (error, value) => {
    if (transform && value) {
      value = transform(value);
    }
    if (!value) {
      value = {};
    }
    if (callback) {
      callback(error, value);
      return;
    }
    if (error) {
      reject(error);
      return;
    }
    resolve(value);
  };
};

module.exports = {createAsyncHandler};
