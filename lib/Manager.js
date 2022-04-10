const inquirer = require('inquirer');
const Employee = require('./Employee.js');


class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.officeNum = officeNum;
        this.role = "Manager";
    }

    getOfficeNum() {
        // prompt for office number
        inquirer
            .prompt({
                type: 'input',
                name: 'officeNum',
                message: "What is their office number?"
            })
            // then return office number value
            .then(officeNum => {
                return officeNum;
            })
    }
};






module.exports = Manager;






