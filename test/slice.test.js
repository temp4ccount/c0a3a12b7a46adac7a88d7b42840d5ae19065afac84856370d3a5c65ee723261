import pkg from "chai";
const { expect } = pkg;

import slice from "../src/slice.js";

const case1 = { test: { arr: [1, 2, 3], start: -1, end: 3 }, result: [3] };

const case2 = { test: { arr: [1, 2, 3], start: 0, end: -1 }, result: [1, 2] };

const case3 = { test: { arr: [1, 2, 3], start: 3, end: 1 }, result: [] };

const case4 = { test: { arr: [], start: 0, end: 0 }, result: [] };

const case5 = { test: { arr: [1, 2, 3], start: 1, end: 4 }, result: [2, 3, undefined] };

describe("Slice.js tests", () => {
  it("Negative start", () => {
    expect(
      slice(case1.test.arr, case1.test.start, case1.test.end)
    ).to.deep.equal(case1.result);
  });
  it("Negative end", () => {
    expect(
      slice(case2.test.arr, case2.test.start, case2.test.end)
    ).to.deep.equal(case2.result);
  });
  it("Start and end reversed", () => {
    expect(
      slice(case3.test.arr, case3.test.start, case3.test.end)
    ).to.deep.equal(case3.result);
  });
  it("Empty arr", () => {
    expect(
      slice(case4.test.arr, case4.test.start, case4.test.end)
    ).to.deep.equal(case4.result);
  });
  it("Array length + 1", () => {
    expect(
      slice(case5.test.arr, case5.test.start, case5.test.end)
    ).to.deep.equal(case5.result);
  });
});
