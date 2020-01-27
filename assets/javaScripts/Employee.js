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

    //Function to return Name
    getName() {
        return this.name
    }
};


console.log(Employee);

//Exports the Employee Constructor & classes
module.exports = Employee;