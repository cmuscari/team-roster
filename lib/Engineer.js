const inquirer = require('inquirer');
const Employee = require('./Employee.js');


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        // prompt for github username
        inquirer
            .prompt({
                type: 'input',
                name: 'github',
                message: "What is their Github username?"
            })
            // then return github username value
            .then(github => {
                return github;
            })
    }
};





module.exports = Engineer;


