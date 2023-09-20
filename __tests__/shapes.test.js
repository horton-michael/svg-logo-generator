const { Shape, Circle, Square } = require("../lib/shapes.js");
// const { Circle } = require("../lib/shapes.js");
// const { Square } = require("../lib/shapes.js");

describe("shapes", () => {
  // arrange
  shapeClass = new Shape();
  // act
  // assert
  it("have a text property", () => {
    expect(shapeClass).toHaveProperty("text");
  });
  it("have a textColor property", () => {
    expect(shapeClass).toHaveProperty("textColor");
  });
  it("have a background color property", () => {
    expect(shapeClass).toHaveProperty("bgColor");
  });
});

describe("circle", () => {
  // arrange
  const circleClass = new Circle();
  // act
  // assert
  it("should be an instance of the Shape class", () => {
    expect(circleClass).toBeInstanceOf(Shape);
  });
  it("should have a render method", () => {
    expect(circleClass).toHaveProperty("render");
  });
  it("should have a render method that returns a circle svg file", () => {
    expect(circleClass.render()).toEqual(
      `
    <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="${this.color}" />
    </svg>`
    );
  });
});

describe("square", () => {
  // arrange
  const squareClass = new Square();
  // act
  // assert
  it("should be an instance of the Shape class", () => {
    expect(squareClass).toBeInstanceOf(Shape);
  });
  it("should have a render method", () => {
    expect(squareClass).toHaveProperty("render");
  });
  it("should have a render method that returns a square svg file", () => {
    expect(squareClass.render()).toEqual(
      `
    <svg width="100" height="100">
        <rect width="100" height="100" fill="${this.color} />
    </svg>`
    );
  });
});
