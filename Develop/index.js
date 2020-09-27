const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [ {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Please provide a detailed description about your project."
}
{
    type: "list",
    name: "liscenses",
    message: "What liscenses does your project have?",
    choices: ["Apache", "MIT", "BSD3"]
}
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile("readme.md", generateMarkdown({...inquirerResponses}))
    })
}

// function call to initialize program
init();
