const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./team/employee");
const Manager = require("./team/manager");
const Engineer = require("./team/engineer");
const Intern = require("./team/intern");
const PORT = process.env.Port || 3001;
const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const teamArray = [];

function getEmployeeInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter employee's name: ",
        name: "employeeName",
      },
      {
        type: "input",
        message: "Enter employee's ID: ",
        name: "employeeID",
      },
      {
        type: "input",
        message: "Enter employee's email: ",
        name: "employeeEmail",
      },
      {
        type: "list",
        message: "Select employee's position: ",
        choices: ["Manager", "Engineer", "Intern"],
        name: "employeeJob",
      },
    ])
    .then(function ({ employeeName, employeeID, employeeEmail, employeeJob }) {
      let jobType = "";

      if (employeeJob === "Manager") {
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
        // .then(function ({ officeNumber, addEmployee}) {
        //     let newEmployee;

        // })
        jobType = "Office Number";
      } else if (employeeJob === "Engineer") {
        jobType = "Github Username";
      } else if (employeeJob === "Intern") {
        jobType = "School";
      }
      inquirer.prompt([
        {
          type: "input",
          message: `Enter your ${jobType}: `,
          name: "employeeInfo",
        },
      ]);
    });
}

getEmployeeInfo();

function runManager() {
  inquirer.prompt;
}
