const { Shape, Circle, Square, Triangle } = require("./lib/shapes.js");

const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "text",
    message: "What text would you like to add to your logo?",
    validate: function (value) {
      if (value.length === 3) {
        return true;
      }
      return "Please enter 3 characters.";
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "What color would you like your text to be?",
  },
  {
    type: "input",
    name: "bgColor",
    message: "What color would you like your background to be?",
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would you like your logo to be?",
    choices: ["Circle", "Square", "Triangle"],
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Generated logo.svg");
  });
}

function init() {
  inquirer.prompt(questions).then((response) => {
    let shape;
    switch (response.shape) {
      case "Circle":
        shape = new Circle(response.text, response.textColor, response.bgColor);
        break;
      case "Square":
        shape = new Square(response.text, response.textColor, response.bgColor);
        break;
      case "Triangle":
        shape = new Triangle(
          response.text,
          response.textColor,
          response.bgColor
        );
        break;
    }
    writeToFile("logo.svg", shape.render());
  });
}

init();
