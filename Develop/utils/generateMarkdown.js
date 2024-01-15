// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown'); // Add the correct path

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project:',
  },
  // Add more questions based on the README structure
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md successfully generated!')
  );
}

// TODO: Create a function to initialize app
function init() {
  // Prompt the user for information
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the README content based on user input
      const readmeContent = generateMarkdown(answers);

      // Write the README file
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => console.error(error));
}

// Function call to initialize app
init();


module.exports = generateMarkdown;
