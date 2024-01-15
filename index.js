// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { type } = require("os");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project:"
    },
    {
        type: "list",
        name:"link",
        message: "Where can I find the source code for your project?",
    },
    {
        type:"checkbox",
        name:"license",
        message:"Select license for this project",
        choices:["MIT", "APACHE2.0", "Boost1,0", "none"],
    }
    {
        type:"input",
        name:"require",
        message:"Are there any dependencies to list?"
    },
    {
        type:"input",
        name:"features",
        message:"List some features about this project",
    }
    {
        type: "input",
        name: "creator",
        message: "Write your GitHub username.",
      },
      {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
      },
      {
        type: "input",
        name: "contributors",
        message: "Please list any contributors. (Use GitHub usernames)",
        default: "",
      },
      {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable.",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
  }
  // Function call to initialize app
  init();