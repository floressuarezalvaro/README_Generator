const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

const writeGeneratorFile = util.promisify(fs.writeFile);

// questions for user
inquirer
    .prompt([   
    {
        type: 'input',
        name: 'Username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide me with a description of your project.',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How do I install your project?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide me with usage information.',
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'Who contributed to this project?',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'How do I test your project? ',
    },
    {
        type: 'checkbox',
        name: 'License',
        message: 'What license would you like to use?',
        choices: ['MIT license', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License'],
    }
])
.then(({Username, Title, Description, Installation, Usage, Contributions, Test, License}) => {
const READMETemplate = 
`
## ${Title}
## Description:
    ${Description}
## Installation
    ${Installation}
## Contributing:
    ${Contributions}
## Test
    ${Test}
## Questions
${Username}
## License
${License}
`
return writeGeneratorFile("README.md", READMETemplate);
})
.then(() => console.log("README created"))
.catch((err) => console.log(err));

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
