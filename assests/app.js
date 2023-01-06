import inquirer from "inquirer"

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'name',
        message: 'What is your projects name?',
        default: 'My-Project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your projects description?',
        default: 'It does stuff.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: 'Download and use.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage for your project?',
        default: 'Self Explanatory'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Is there any collaborators or third party assets?',
        default: 'None'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is your projects license?',
        default: 'None'
    },
    {
        type: 'input',
        name: 'features',
        message: 'List your projects features.',
        default: 'None'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Are contributions open? If so, how should someone contribute?',
        default: 'None'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Does your project have tests? If so, how can someone run them?',
        default: 'None'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })