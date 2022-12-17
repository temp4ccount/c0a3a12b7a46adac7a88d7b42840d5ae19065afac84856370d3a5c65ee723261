import pkg from "chai";
const { expect } = pkg;

import add from "../src/add.js";

describe("Add.js tests", () => {
  it("Positive number", () => {
    expect(add(1, 1)).to.equal(2);
  });

  it("Negative number", () => {
    expect(add(-1, -1)).to.equal(-2);
  });

  //it("Undefined", () => {
  //  expect(add(undefined, undefined)).to.deep.equal(undefined);
  //});

  it("Strings", () => {
    expect(add("1", "1")).to.equal("11");
  });

  it("Objects", () => {
    expect(add({}, 1)).to.deep.equal(NaN);
  });

  it("Lists", () => {
    expect(add([], 1)).to.equal(1);
  });

  it("Null", () => {
    expect(add(null, 1)).to.equal(1);
  });

  it("Zeroes", () => {
    expect(add(0, 0)).to.equal(0);
  });
});
