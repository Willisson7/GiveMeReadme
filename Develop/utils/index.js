// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        },
        {
        type: 'input',
        message: 'What is your app meant to do?',
        name: 'description',
        },
        {
            type: 'list',
            message: 'What is your app License?',
            name: 'license',
            choices: ['MIT', 'GNU','MOZILLA', 'None']
        },
        {
            type: 'input',
            message: 'How do you install the app?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'How do you use your app?',
            name: 'use',
        },
        {
            type: 'input',
            message: 'Who else has worked on this project?',
            name: 'authors',
        },
        {
            type: 'input',
            message: 'How do you test your app?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username.',
            name: 'userName',
        },
        {
            type: 'input',
            message: 'Please enter your email address.',
            name: 'email',
        }

]



// // TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
        fs.writeFileSync("READme.md", generateMarkdown(answers))
    });
}

// Function call to initialize app
init();
