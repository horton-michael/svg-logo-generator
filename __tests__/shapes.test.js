const Shapes = require("../lib/shapes.js");

describe("shapes", () => {
  // arrange
  shapeClass = new Shapes();
  // act
  shapeClass.setColor();
  // assert
  it("have a color method", () => {
    expect(shapeClass.setColor).toBeDefined();
  });
});
