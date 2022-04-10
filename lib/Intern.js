const inquirer = require('inquirer');
const Employee = require('./Employee.js');


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        // prompt for school name
        inquirer
            .prompt({
                type: 'input',
                name: 'school',
                message: "What is their school name?"
            })
            // then return school name value
            .then(school => {
                return school;
            })
    }
};





module.exports = Intern;


