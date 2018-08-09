// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

'use strict';

const tap = require('tap');
const sinon = require('sinon');

const {createAsyncHandler} = require('./transform.js');

tap.test('createAsyncHandler', t => {
  t.test('returns a function and all arguments are optional', t => {
    t.equal(typeof createAsyncHandler(), 'function');
    t.end();
  });

  t.test('calls callback with successful value', t => {
    const cb = sinon.stub();
    const fn = createAsyncHandler(cb);
    fn(null, 'party');
    t.deepEqual(cb.args[0], [null, 'party']);
    t.end();
  });

  t.test('calls callback with error value', t => {
    const cb = sinon.stub();
    const fn = createAsyncHandler(cb);
    fn('boo', {});
    t.deepEqual(cb.args[0], ['boo', {}]);
    t.end();
  });

  t.test('calls callback with empty object if value is undefined', t => {
    const cb = sinon.stub();
    const fn = createAsyncHandler(cb);
    fn(null);
    t.deepEqual(cb.args[0], [null, {}]);
    t.end();
  });

  t.test('resolves promise with successful value', t => {
    return new Promise((resolve, reject) => {
      const fn = createAsyncHandler(null, resolve, reject);
      fn(null, 'party');
    });
  });

  t.test('rejects promise with error value', t => {
    t.rejects(new Promise((resolve, reject) => {
      const fn = createAsyncHandler(null, resolve, reject);
      fn('boo', 'party');
    }));
    t.end();
  });

  t.test('transforms value if function provided', t => {
    const cb = sinon.stub();
    const transform = val => val + 10;
    const fn = createAsyncHandler(cb, null, null, transform);
    fn(null, 10);
    t.equal(cb.args[0][1], 20);
    t.end();
  });

  t.end();
});
