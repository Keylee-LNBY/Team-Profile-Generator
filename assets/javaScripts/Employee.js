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

    //Function to return employee's Name
    getName() {
        return this.name
    }

    //Function to return employee's ID #
    getId() {
        return this.id
    }

};


console.log(Employee);

//Exports the Employee Constructor & classes
module.exports = Employee;