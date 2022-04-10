const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        // prompt for name
        inquirer
            .prompt({
                type: 'input',
                name: 'name',
                message: "What is their name?",
            })
            // then return name value
            .then(name => {
                return name;
            })
    }

    getId() {
        // prompt for id number
        inquirer
            .prompt({
                type: 'input',
                name: 'id',
                message: "What is their id number?"
            })
            // then return id value
            .then(id => {
                return id;
            })
    }

    getEmail() {
        // prompt for email
        inquirer
            .prompt({
                type: 'input',
                name: 'email',
                message: "What is their email address?"
            })
            // then return email value
            .then(email => {
                return email;
            })
    }
};





module.exports = Employee;






