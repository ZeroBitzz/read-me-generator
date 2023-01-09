// imports
import inquirer from "inquirer"
import MarkDown from "./lib/ReadmeGen.js"
import fs from 'fs'

// app questions
const questions = [
    {
        type: 'input',
        name: 'title',
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
        type: 'list',
        name: 'license',
        message: 'What is your projects license?',
        choices: [
            'MIT', 'ISC', 'apacheV2', 'Boost', 'BSD3clause', 'BSD2clause', 'CC0', 'attribution4', 'attributionShareAlike4',
            'attributionNonCommercial', 'attributionNonDerivates4', 'Eclipse', 'gnuGplV3', 'gnuGplV2', 'gnuAgplV3',
            'gnuLgplV3', 'gnuFdlV1point3', 'hippocraticLicense3', 'hippocraticLicense2point1', 'ibm', 'mozilla', 'BY',
            'ODBL', 'PDDL', 'PERL', 'artistic2', 'OFL', 'unlicense', 'WTFPL', 'ZLIB'
        ],
        default: 'None',
        filter(val){
            return val.toLowerCase()
        }
    },
    {
        type: 'input',
        name: 'features',
        message: 'List your projects features.',
        default: 'None'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Are contributions open? If so, how should someone contribute?',
        default: 'None'
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)?',
        default: 'None'
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions(github)?',
        default: 'None'
    },
    
    {
        type: 'input',
        name: 'tests',
        message: 'Does your project have tests? If so, how can someone run them?',
        default: 'None'
    }
]

// run query function
async function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const markdown =  MarkDown.generateReadme(answers)
        console.log(markdown)
        fs.writeFile('README.md', markdown, function(err) {
            if(err){
                console.log('Could not save file')
            }else{
                console.log('Success, new README file generated inside the root folder. Run the program again to overwrite the README file.')
            }
        })
    })
    .catch((error) => {
        console.log(error)
    })
}

runQuery()