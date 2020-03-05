//Required
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./Employee");

//Manager Constructor Function
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    //Return Role as Engineer
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github
    }

};

console.log(Engineer);

module.exports = Engineer;