// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENSE.txt file for details.

"use strict";

import { autoBind, createAsyncHandler } from "../utils";

describe("autoBind", () => {
  interface Question {
    ext: () => number;
  }
  // Set up a class used in tests.
  class Question {
    _answer: number;

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

  it("methods can be called from the instance", () => {
    const q = new Question();
    expect(q.answer()).toBe(42);
    expect(q.self()).toBe(q);
    expect(q.ext()).toBe(42);
  });

  it("all methods are bound", () => {
    const q = new Question();
    const answer = q.answer;
    const self = q.self;
    const ext = q.ext;
    expect(answer()).toBe(42);
    expect(self()).toBe(q);
    expect(ext()).toBe(42);
  });

  it("it is not possible to rebind methods", () => {
    const q = new Question();
    const answer = q.answer.bind({ _answer: 47 })();
    expect(answer).toBe(42);
  });
});

describe("createAsyncHandler", () => {
  it("returns an object with reject and resolve function", () => {
    expect(typeof createAsyncHandler(jest.fn(), jest.fn(), jest.fn())).toBe(
      "object"
    );
    expect(
      typeof createAsyncHandler(jest.fn(), jest.fn(), jest.fn()).reject
    ).toBe("function");
    expect(
      typeof createAsyncHandler(jest.fn(), jest.fn(), jest.fn()).resolve
    ).toBe("function");
  });

  it("calls callback with successful value", () => {
    const cb = jest.fn();
    const fn = createAsyncHandler(cb, jest.fn(), jest.fn());
    fn.resolve("party");
    expect(cb.mock.calls[0]).toEqual([null, "party"]);
  });

  it("calls callback with error value", () => {
    const cb = jest.fn();
    const fn = createAsyncHandler(cb, jest.fn(), jest.fn());
    fn.reject(new Error("boo"));
    expect(cb.mock.calls[0][0]).toStrictEqual(new Error("boo"));
  });

  it("resolves promise with successful value", () => {
    expect(
      new Promise((resolve, reject) => {
        const fn = createAsyncHandler(undefined, resolve, reject);
        fn.resolve("party");
      })
    ).resolves.toBe("party");
  });

  it("rejects promise with error value", () => {
    expect(
      new Promise((resolve, reject) => {
        const fn = createAsyncHandler(undefined, resolve, reject);
        fn.reject(new Error("boo"));
      })
    ).rejects.toStrictEqual(new Error("boo"));
  });

  it("transforms value if function provided", () => {
    const cb = jest.fn();
    const transform = (val: number) => val + 10;
    const fn = createAsyncHandler(
      cb,
      () => null,
      () => null,
      transform
    );
    fn.resolve(10);
    expect(cb.mock.calls[0][1]).toBe(20);
  });
});
