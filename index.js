const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePageContent = require('./utils/generate-site.js');
const teamArray = [];




// start function
const startRoster = () => {
    console.log("--------------------------------");
    console.log("START CREATING YOUR TEAM ROSTER!");
    console.log("--------------------------------");

    promptManagerInfo()
    .then(managerInfo => {
        const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNum);
        teamArray.push(manager);
        promptAddMember();
    })
};





// prompt user to add another team member function
const promptAddMember = () => {
    inquirer.prompt([
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
                    generatePageContent(teamArray);
                    return false;
                }
            }
        },
    ])
    .then(choice => {
        if (choice.addTeamMember === 'Engineer') {
            promptEngineerInfo()
            .then(engineerInfo => {
                const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
                teamArray.push(engineer);
                promptAddMember();
            })
        }
        if (choice.addTeamMember === 'Intern') {
            promptInternInfo()
            .then(internInfo => {
                const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
                teamArray.push(intern);
                promptAddMember();
            })
        }
    })
};


// prompt user for manager info function
const promptManagerInfo = () => {
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
            name: 'officeNum',
            message: "What is the Team Manager's office number?",
        },
    ]);
};


// prompt user for engineer info function
const promptEngineerInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Engineer's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email address?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's Github username?",
        },
    ]);
};


// prompt user for intern info function
const promptInternInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Intern's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Intern's email address?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the Intern's school name?",
        },
    ]);
};























// call start function
startRoster();












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


