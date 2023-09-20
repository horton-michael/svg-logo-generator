class Shape {
  constructor(text, textColor, bgColor) {
    this.text = text;
    this.textColor = textColor;
    this.bgColor = bgColor;
  }
}

class Circle extends Shape {
  constructor(text, textColor, bgColor) {
    super(text, textColor, bgColor);
  }
  render() {
    return `
      <svg width="300" height="200">
      <text text=anchor="middle" x=50% y=50% fill=${this.textColor}>${this.text}</text>
        <circle cx="50" cy="50" r="40" fill=${this.bgColor}/>
      </svg>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, bgColor) {
    super(text, textColor, bgColor);
  }
  render() {
    return `
      <svg width="300" height="200">
          <rect width="100" height="100" fill="${this.bgColor}"/>
      </svg>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, bgColor) {
    super(text, textColor, bgColor);
  }
  render() {
    return `
      <svg width="300" height="200">
        <polygon points="50,0 0,100 100,100" fill="${this.bgColor}"/>
      </svg>`;
  }
}

module.exports = { Shape, Circle, Square, Triangle };
