const generatePage = require('./src/page-template.js');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');




// start function
const startRoster = () => {
    console.log("--------------------------------");
    console.log("START CREATING YOUR TEAM ROSTER!");
    console.log("--------------------------------");
};


// prompt user to add another team member function
const promptAddMember = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add a new team member to your roster?',
            default: true
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Please select what type of team member you would like to add:',
            choices: ['Engineer', 'Intern'],
            when: ({ confirmAdd }) => {
                if (confirmAdd) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])
};


// prompt user for manager info function
const promptManagerInfo = managerInfo => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Team Manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Team Manager's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Team Manager's email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Team Manager's office number?",
        },
    ]);
    promptAddMember();
};























// call start function
startRoster();
promptManagerInfo()
    .then(managerInfo => {
        return
    })











// // call function - start with promptUser(), then promptProject(), then execute an action with the returned entire portfolioData
// promptUser()
//   .then(promptProject)
//   // take returned entire portfolioData & pass it into the generatePage function that is linked at the top of this file to return generated HTML (stored in the pageHTML variable)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });



// prompt user for profile questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    ]);
};