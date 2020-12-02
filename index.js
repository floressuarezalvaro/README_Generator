const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

const writeGeneratorFile = util.promisify(fs.writeFile);

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
        message: 'What command do I run to install dependencies?',
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
        choices: ['MIT', 'Apache_2.0', 'GNU_GPL_V3', 'None'],
    }
])
.then(({Username, Email, Repo, Title, Description, Installation, Usage, Contributions, Test, License}) => {

const READMETemplate = 
`
![License](https://img.shields.io/badge/License-${License}-green.svg)

# ${Title}

## Description:
${Description}

## Installation:
To install the dependencies, please run the following command:
${Installation}

## Contributing:
To contribute you can [build from the source itself](https://github.com/${Username}/${Repo}/wiki).

Additional contributions include:
${Contributions}

## Test
To run a test, please run the following command:
${Test}

## Questions
The best way to get a hold of me is through via email, at ${Email}. You can also [submit a bug](https://github.com/${Username}/${Repo}/issues), or you can review the [source code](https://github.com/${Username}/${Repo}/pulls) changes. 

## License
This project is licensed under ${License}

Copyright (c) [2020] [${Username}]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`
return writeGeneratorFile("README.md", READMETemplate);
})
.then(() => console.log("README created"))
.catch((err) => console.log(err));