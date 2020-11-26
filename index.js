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
        name: 'Email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'Repo',
        message: 'What is the repository for this project? (Do not include any spaces)',
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
        message: 'What command do I run to install your project?',
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
.then(({Username, Email, Repo, Title, Description, Installation, Usage, Contributions, Test, License}) => {
const READMETemplate = 
`
## ${Title}
## Description:
    ${Description}
## Installation
    To install the dependencies, please run the following command:
    ${Installation}
## Contributing:
    The best way to participate in my portfolio is to Lastly, you can [build from the source itself](https://github.com/${Username}/${Repo}/wiki).
    Additional contributions include:
    ${Contributions}
## Test
    To run a test, please run the following command:
    ${Test}
## Questions
    The best way to get a hold of me is through my [email](${Email}). You can also [submit a bug](https://github.com/${Username}/${Repo}/issues), or you can review the [source code](https://github.com/${Username}/${Repo}/pulls) changes. 
## License
    This project is licensed under ${License}
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
