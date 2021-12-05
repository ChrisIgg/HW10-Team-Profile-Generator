const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./team/employee");
const Manager = require("./team/manager");
const Engineer = require("./team/engineer");
const Intern = require("./team/intern");

const teamArray = [];
console.log("empty?", teamArray);

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
      // new Manager = (employeeID, employeeName, emplyeeEmail, officeNumer)
    ])
    .then(function ({ employeeName, employeeID, employeeEmail, officeNumber }) {
      const newManager = new Manager(
        employeeID,
        employeeName,
        employeeEmail,
        officeNumber
      );
      console.log("new manager: ", newManager);
      teamArray.push(newManager);
      console.log("pushed array: ", teamArray);
    });
}

getEmployeeInfo();

function runManager() {
  inquirer.prompt;
}

function verifyManager() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter you Office Number",
      name: "officeNumber",
    },
    {
      type: "list",
      message: "Do you want to add an employee?",
      choices: ["Yes", "No"],
      name: "addEmployee",
    },
  ]);
}
