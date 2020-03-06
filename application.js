//Required npm's
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Pulling constructor files
const Manager = require("./assets/javaScripts/Manager");
const Engineer = require("./assets/javaScripts/Engineer");
const Intern = require("./assets/javaScripts/Intern");

const outputPath = path.resolve(__dirname, "team", "team.html");

const render = require("./assets/javaScripts/htmlRenderer");

//CLI Prompts
let team = [];
let employeeId = [];

// CLI Opening Message
console.log("Welcome to the Team Builder. Follow your CLI as you are prompted to build your team ");

// Step One --> Set Manager then be given the option to add an Engineer or Intern
const stepOne = () => {
    inquirer.prompt([
        {
        type: "input",
        message: "Enter team manager's name:",
        name: "name"
        },
        {
        type: "number",
        message: "Enter team manager's 4-digit ID number:",
        name: "id",
        validate: validateId
        },
        {
        type: "input",
        message: "Enter team manager's email:",
        name: "email"
        },
        {
        type: "number",
        message: "Enter team manager's office phone number:",
        name: "officeNumber"
        },
        {
        type: "list",
        message: "Which type of team member would you like to add now?",
        choices: ["Engineer", "Intern", "My team is complete. I would like to exit the program."],
        name: "action"
        }
    ]).then((response) => {

        const newManager = new Manager(response.name, response.id, response.email, response.officeNumber);

        team.push(newManager);
        employeeId.push(response.id);

        switch (response.action) {
        case "Engineer":
            selectEngineer();
            break;
        case "Intern":
            selectIntern();
            break;
        default: //What happens when the team is completed
            fs.writeFile(outputPath, render(team), function (err) {
                if (err) {
                    throw err;
                }
            });
            console.log("Your team page has been created.");
            break;
        }
    });
};

//Engineer & Intern Promts
//When Enginner is selected
const selectEngineer = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter engineer's name:",
      name: "name"
    },
    {
      type: "number",
      message: "Engineer's 4-digit ID number:",
      name: "id",
      validate: validateId
    },
    {
      type: "input",
      message: "Engineer's email address:",
      name: "email"
    },
    {
      type: "input",
      message: "Engineer's GitHub user name:",
      name: "github"
    }
  ]).then((response) => {
    //Add new Engineer
    const newEngineer = new Engineer(response.name, response.id, response.email, response.github);

    //push to array
    team.push(newEngineer);
    employeeId.push(response.id);

    //start over again with addTeamMembers()
    addTeamMembers();
  });
};


// When Intern Selected
const selectIntern = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter Intern's name:",
      name: "name"
    },
    {
      type: "number",
      message: "Interns's 4-digit ID number:",
      name: "id",
      validate: validateId
    },
    {
      type: "input",
      message: "Interns's email address:",
      name: "email"
    },
    {
      type: "input",
      message: "Where is your intern attending school?",
      name: "school"
    }
  ]).then((response) => {
    const newIntern = new Intern(response.name, response.id, response.email, response.school);

    team.push(newIntern);
    employeeId.push(response.id);

    addTeamMembers();
  });
};

// Add more Team Memebers
const addTeamMembers = () => {
  inquirer.prompt([
    {
      type: "list",
      message: "Which type of team member would you like to add now?",
      choices: ["Engineer", "Intern", "My team is complete. I would like to exit the program."],
      name: "action"
    }
  ]).then((response) => {
    switch (response.action) {
      case "Engineer":
        selectEngineer();
        break;
      case "Intern":
        selectIntern();
        break;
      default:
        // render();
        fs.writeFile(outputPath, render(team), function (err) {
          if (err) {
            throw err;
          }
        });
        console.log("Your team page has been created!");
        break;
    }
  });
};

// ID Validation
const validateId = (data) => {
    if (isNaN(data)) {
        return "Employee ID's should be 4-digits. Please re-enter your employee's ID.";
    }
    for (i = 0; i < employeeId.length; i++) {
        if (data === employeeId[i]) {
            return "ID number in use. Please enter different IDl"
        }
    }
    return true;
}

stepOne();