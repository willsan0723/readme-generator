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
    message: "Provide a detailed description about your project:"
},
{
    type: "input",
    name: "installation",
    message: "What are your installation instructions? Be as detailed as possible:"
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use:"
    //  Include screenshots as needed:"
    // ask if they want to use screenshots
    // let them add as many as they'd like with a confirmation at end to see if they want to add more
},
// {
//     type: "input",
//     name: "credits",
//     message: ""
    // maybe break this into three sections with prompts
    // collaborators
    // third-party assets with links to their primary web presence
    // links to any tutorials
// },
{
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: ["Apache", "MIT", "BSD3", "Perl"]
},
{   type: "input",
    name: "contributing",
    message: "What guidelines do you have for other developers for contributing to this project?"
},
{
    type: "input",
    name: "tests",
    message: "Go the extra mile and write tests for your application. Then provide examples on how to run them:"
},
{
    type: "input",
    name: "user",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "e-mail",
    message: "What is your e-mail address?"
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
