//included packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');

// array for questions
const questions=[{
      
    type: 'input',
    message: 'what is your title?',
    name: 'title',
    },
    {
          type: 'input',
        message: 'what is your GitHub username?',
        name: 'question',
    },
    {
        type: 'input',
        message: 'what is your Email?',
        name: 'email',
     },
     {
        type: 'input',
        message: 'description of your project',
        name: 'description',
      },
      {
        type: 'input',
        message: 'what is your table of contents?',
        name: 'table of contents',
      },
      {
        type: 'input',
        message: 'how do you install the project?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'what is the usage of the project?',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'what license did you choose?',
        name: 'license',
        choices: ['ISC','Academic','GPL','MIT','Apache','GNU','N/A'],
      },
      {
        type: 'input',
        message: 'what are your contributing guidelines?',
        name: 'contributions',
      },
      {
        type: 'input',
        message: 'what is your test link?',
        name: 'test',
      },
]
    
  // function for writing Readme file
  function writeToFile (fileName, data) {

fs.writeFile(fileName, data, function(err) {
console.log(fileName)
console.log(data)

if (err) {
    return console.log(err) } 

else{
    console.log("success") }

  })
}
 
  //function for initializing
  function init() {

  inquirer.prompt(questions)
  .then(function(data) {

    writeToFile("README.md", generateMarkdown(data));

     console.log(data)

    })
 
}
  //initializing function call
  init();

