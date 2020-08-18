var inquirer = require("inquirer");
var fs = require("fs");
const generateMarkdown = require("./generatemarkdown");

// array of questions for user
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Describe the project"
},
{
    type: "input",
    name: "installation",
    message: "Instructions for installing the project"
},
{
    type: "input",
    name: "contribution",
    message: "What are the guidelines for contributing to the project"
},
{
    type: "input",
    name: "tests",
    message: "are there any tests that you are currently running for this project"
},
{
    type: "input",
    name: "usage",
    message: "What is the main use of this project?"
},
{
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "email",
    message: "enter your primary email for contact"
},
{
    type: "input",
    name: "license",
    message: "List any licenses being used"
},

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err, res) {
       if (err) { throw err }
    });
 }

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        let answersMD = generateMarkdown(answers)
        let fileName = "generated_README.md"
        writeToFile(fileName, answersMD);
    })
}

init();