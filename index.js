const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./team/manager");
const Engineer = require("./team/engineer");
const Intern = require("./team/intern");

const teamArray = [];

function getEmployeeInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter manager's name: ",
        name: "employeeName",
      },
      {
        type: "input",
        message: "Enter manager's ID: ",
        name: "employeeID",
      },
      {
        type: "input",
        message: "Enter manager's email: ",
        name: "employeeEmail",
      },
      {
        type: "input",
        message: "Enter manager's office number: ",
        name: "officeNumber",
      },
    ])
    .then(function ({ employeeName, employeeID, employeeEmail, officeNumber }) {
      const newManager = new Manager(
        employeeID,
        employeeName,
        employeeEmail,
        officeNumber
      );

      teamArray.push(newManager);
      console.log(teamArray);

      inquirer
        .prompt([
          {
            type: "list",
            message: "Would you like to add another employee?",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern"],
          },
        ])
        .then(function ({ addEmployee }) {
          if (addEmployee === "Manager") {
            getEmployeeInfo();
          } else if (addEmployee === "Engineer") {
            addEngineer();
          } else if (addEmployee === "Intern") {
            addIntern();
          }
        });
    });
}

getEmployeeInfo();

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Engineer's name: ",
        name: "employeeName",
      },
      {
        type: "input",
        message: "Enter Engineer's ID: ",
        name: "employeeID",
      },
      {
        type: "input",
        message: "Enter Engineer's email: ",
        name: "employeeEmail",
      },
      {
        type: "input",
        message: "Enter Engineer's Github account: ",
        name: "github",
      },
    ])
    .then(function ({ employeeName, EmployeeID, employeeEmail, github }) {
      const newEngineer = new Engineer(
        employeeName,
        EmployeeID,
        employeeEmail,
        github
      );
      teamArray.push(newEngineer);
      console.log(teamArray);
      inquirer
        .prompt([
          {
            type: "list",
            message: "Would you like to add another employee?",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern"],
          },
        ])
        .then(function ({ addEmployee }) {
          console.log(".then: ", addEmployee);
          if (addEmployee === "Manager") {
            getEmployeeInfo();
          } else if (addEmployee === "Engineer") {
            addEngineer();
          } else if (addEmployee === "Intern") {
            addIntern();
          }
        });
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Intern's name: ",
        name: "employeeName",
      },
      {
        type: "input",
        message: "Enter Intern's ID: ",
        name: "employeeID",
      },
      {
        type: "input",
        message: "Enter Intern's email: ",
        name: "employeeEmail",
      },
      {
        type: "input",
        message: "Enter Intern's school: ",
        name: "school",
      },
    ])
    .then(function ({ employeeName, EmployeeID, employeeEmail, school }) {
      const newEngineer = new Engineer(
        employeeName,
        EmployeeID,
        employeeEmail,
        school
      );
      teamArray.push(newEngineer);
      console.log(teamArray);
      inquirer
        .prompt([
          {
            type: "list",
            message: "Would you like to add another employee?",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern"],
          },
        ])
        .then(function ({ addEmployee }) {
          console.log(".then: ", addEmployee);
          if (addEmployee === "Manager") {
            getEmployeeInfo();
          } else if (addEmployee === "Engineer") {
            addEngineer();
          } else if (addEmployee === "Intern") {
            addIntern();
          }
        });
    });
}
