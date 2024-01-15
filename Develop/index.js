// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    //add more questions based on the README structure
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README.md successfully generated!')
    );
  }

// TODO: Create a function to initialize app
function init() {
    //prompt for user info
    inquirer
    .prompt(questions)
    .then((answer) => {
        //Genrate the README content based on user input
        const readMeContent = generateREADME(answers);

        //write the README file
        writeToFile('README.md' , readMeContent);
    })
    .catch((error) => console.error(error));

}
//Function to generate the README content
function generateREADME(answer) {
    const readmeContent = `
    # ${answers.title}
    
    ## Description
    ${answers.description}
    
    // ... other sections
  `;

  return readmeContent;  
}

// Function call to initialize app
init();
