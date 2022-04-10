const generatePage = require('./src/page-template.js');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');




// start function
const startRoster = function () {
    console.log("-------------------------------------------------------------------------");
    console.log("PLEASE START YOUR ROSTER BY ENTERING THE TEAM MANAGER'S INFORMATION FIRST");
    console.log("-------------------------------------------------------------------------");
    
    new Manager().getName();
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

