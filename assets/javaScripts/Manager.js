//Required
const Employee = require("../javaScripts/Employee.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Manager Constructor Function
class Manager extends Employee {
    constructor(name, id, email, title, officeNumber) {
        super(name, id, email, title);
        this.officeNumber = officeNumber;
    }
    //Returns Job Title as Manager
    getRole() {
        return "Manager"
    }
    //Returns the Office Number
    getOffice() {
        return this.officeNumber
    }
}
