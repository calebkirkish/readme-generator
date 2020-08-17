var inquirer = require("inquirer");
const generateMarkdown = require("./generatemarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {


}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        // do stuff with anwers
        let answersMD = generateMarkdown(answers);
        writeToFile(filename, answersMD);
    })
}

// function call to initialize program
init();
