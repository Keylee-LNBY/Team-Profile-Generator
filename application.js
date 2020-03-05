//Required npm's
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Pulling constructor files
const Manager = require("./assets/javaScripts/Manager");
const Engineer = require("./assets/javaScripts/Engineer");
const Intern = require("./assets/javaScripts/Intern");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./assets/javaScripts/htmlRenderer");

//Start Program
program.start();