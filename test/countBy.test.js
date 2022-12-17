import pkg from "chai";
const { expect } = pkg;

import countBy from "../src/countBy.js";

const users = [
  { user: "barney", active: true },
  { user: "betty", active: true },
  { user: "fred", active: false },
];

const size_00 = [{}];

const two_types = [
    { user: "barney", active: true },
    { user: "betty", inactive: true },
  ];

describe("CountBy.js tests", () => {

  it("Check size 0", function () {
    const result = countBy(size_00, () => undefined);
    expect(result).to.deep.equal({ undefined: 0 });
  });

  it("Two different types of objects", () => {
    const actives = countBy(two_types, (value) => value.active);
    expect(actives).to.deep.equal({ true: 0, undefined: 0 });
  });

  it("Active and 'non-active' users", () => {
    const actives = countBy(users, (value) => value.active);
    expect(actives).to.deep.equal({ true: 1, false: 0 });
  });

});
