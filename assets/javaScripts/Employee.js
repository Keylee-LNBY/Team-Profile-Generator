//Required npm's
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Employee Constructor Function
class Employee {
    constructor (name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }

    //Return employee's Name
    getName() {
        return this.name
    }

    //Returns employee's ID #
    getId() {
        return this.id
    }

    //Returns employee's Email
    getEmail() {
        return this.email
    }

    //Confirms that parameter is an Employee
    getRole() {
        return "Employee";
    }
};


console.log(Employee);

//Exports the Employee Constructor & classes
module.exports = Employee;