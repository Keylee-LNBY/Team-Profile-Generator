//Required
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./Employee");

//Manager Constructor Function
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
    //Returns the Office Number
    getOfficeNumber() {
        return this.officeNumber
    }
};

let test = new Manager("Kelly", 6, "kelly@gmail.com", 123);
console.log(test);

module.exports = Manager;
