class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `
    <svg width="300" height="200">
    <circle cx="50%" cy="50%" r="50" fill="${this.shapeColor}" />
    <text font-family="serif" font-size="32px" text-anchor="middle" x=50% y=55% fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `
      <svg width="300" height="200">
          <rect width="100" height="100" fill="${this.shapeColor}"/>
      </svg>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `
      <svg width="300" height="200">
        <polygon points="50,0 0,100 100,100" fill="${this.shapeColor}"/>
      </svg>`;
  }
}

module.exports = { Shape, Circle, Square, Triangle };
