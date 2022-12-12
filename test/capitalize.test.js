import pkg from "chai";
const { expect } = pkg;

import capitalize from "../src/capitalize.js";

describe("Capitalize.js tests", () => {
  it("Undefind", () => {
    expect(capitalize(undefined)).to.deep.equal("Undefined");
  });

  it("Lowercase string", () => {
    expect(capitalize("lowercase")).to.equal("Lowercase");
  });

  it("Camelcase string", () => {
    expect(capitalize("lowerCase")).to.equal("Lowercase");
  });

  it("Only capital letters string", () => {
    expect(capitalize("CAPS")).to.equal("Caps");
  });

  it("Empty string", () => {
    expect(capitalize("")).to.equal("");
  });

  it("Object", () => {
    expect(capitalize({})).to.equal({});
  });

  it("List", () => {
    expect(capitalize([])).to.equal([]);
  });
});
