class Shape {
  constructor(text, textColor, bgColor) {
    this.text = text;
    this.textColor = textColor;
    this.bgColor = bgColor;
  }
}

class Circle extends Shape {
  constructor() {
    super();
  }
  render() {
    return `
    <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="${this.color}" />
    </svg>`;
  }
}

class Square extends Shape {
  constructor() {
    super();
  }
  render() {
    return `
    <svg width="100" height="100">
        <rect width="100" height="100" fill="${this.color} />
    </svg>`;
  }
}

module.exports = { Shape, Circle, Square };
