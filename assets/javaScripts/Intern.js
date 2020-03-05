//Required
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./Employee");

//Manager Constructor Function
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    //Return Role as Intern
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school
    }

};

console.log(Intern);

module.exports = Intern;