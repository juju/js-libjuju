// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

"use strict";

import { test } from "tap";
import { stub } from "sinon";

import { autoBind, createAsyncHandler } from "../../dist/api/utils.js";

test("autoBind", (t) => {
  // Set up a class used in tests.
  class Question {
    constructor() {
      this._answer = 42;
      autoBind(this);
    }
    answer() {
      return this._answer;
    }
    self() {
      return this;
    }
  }
  // Extend the class in a way similar to what is done by facade wrappers.
  Question.prototype.ext = function () {
    return this.self().answer();
  };

  t.test("methods can be called from the instance", (t) => {
    const q = new Question();
    t.equal(q.answer(), 42);
    t.equal(q.self(), q);
    t.equal(q.ext(), 42);
    t.end();
  });

  t.test("all methods are bound", (t) => {
    const q = new Question();
    const answer = q.answer;
    const self = q.self;
    const ext = q.ext;
    t.equal(answer(), 42);
    t.equal(self(), q);
    t.equal(ext(), 42);
    t.end();
  });

  t.test("it is not possible to rebind methods", (t) => {
    const q = new Question();
    const answer = q.answer.bind({ _answer: 47 })();
    t.equal(answer, 42);
    t.end();
  });

  t.end();
});

test("createAsyncHandler", (t) => {
  t.test("returns a function and all arguments are optional", (t) => {
    t.equal(typeof createAsyncHandler(), "function");
    t.end();
  });

  t.test("calls callback with successful value", (t) => {
    const cb = stub();
    const fn = createAsyncHandler(cb);
    fn(null, "party");
    t.deepEqual(cb.args[0], [null, "party"]);
    t.end();
  });

  t.test("calls callback with error value", (t) => {
    const cb = stub();
    const fn = createAsyncHandler(cb);
    fn("boo", {});
    t.deepEqual(cb.args[0], ["boo", null]);
    t.end();
  });

  t.test("resolves promise with successful value", (_t) => {
    return new Promise((resolve, reject) => {
      const fn = createAsyncHandler(null, resolve, reject);
      fn(null, "party");
    });
  });

  t.test("rejects promise with error value", (t) => {
    t.rejects(
      new Promise((resolve, reject) => {
        const fn = createAsyncHandler(null, resolve, reject);
        fn("boo", "party");
      })
    );
    t.end();
  });

  t.test("transforms value if function provided", (t) => {
    const cb = stub();
    const transform = (val) => val + 10;
    const fn = createAsyncHandler(cb, null, null, transform);
    fn(null, 10);
    t.equal(cb.args[0][1], 20);
    t.end();
  });

  t.end();
});
