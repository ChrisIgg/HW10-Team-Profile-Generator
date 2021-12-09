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
    .then(function ({ employeeID, employeeName, employeeEmail, officeNumber }) {
      const newManager = new Manager(
        employeeID,
        employeeName,
        employeeEmail,
        officeNumber
      );

      teamArray.push(newManager);
      console.log(teamArray, "Team Array after Manager Added");

      inquirer
        .prompt([
          {
            type: "list",
            message:
              "Would you like to add another employee or finish the team?",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern", "Create Team"],
          },
        ])
        .then(function ({ addEmployee }) {
          if (addEmployee === "Manager") {
            getEmployeeInfo();
          } else if (addEmployee === "Engineer") {
            addEngineer();
          } else if (addEmployee === "Intern") {
            addIntern();
          } else if (addEmployee === "Create Team") {
            finishTeam();
          }
        });
    });
}

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
    .then(function ({ employeeID, employeeName, employeeEmail, github }) {
      const newEngineer = new Engineer(
        employeeID,
        employeeName,
        employeeEmail,
        github
      );
      teamArray.push(newEngineer);
      console.log(teamArray, "TeamArray after Enginner Added");
      inquirer
        .prompt([
          {
            type: "list",
            message:
              "Would you like to add another employee or finish the team?",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern", "Create Team"],
          },
        ])
        .then(function ({ addEmployee }) {
          if (addEmployee === "Manager") {
            getEmployeeInfo();
          } else if (addEmployee === "Engineer") {
            addEngineer();
          } else if (addEmployee === "Intern") {
            addIntern();
          } else if (addEmployee === "Create Team") {
            finishTeam();
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
    .then(function ({ employeeID, employeeName, employeeEmail, school }) {
      const newIntern = new Intern(
        employeeID,
        employeeName,
        employeeEmail,
        school
      );
      teamArray.push(newIntern);
      console.log(teamArray, "Intern Add");
      inquirer
        .prompt([
          {
            type: "list",
            message:
              "Would you like to add another employee or finish the team?",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern", "Create Team"],
          },
        ])
        .then(function ({ addEmployee }) {
          if (addEmployee === "Manager") {
            getEmployeeInfo();
          } else if (addEmployee === "Engineer") {
            addEngineer();
          } else if (addEmployee === "Intern") {
            addIntern();
          } else if (addEmployee === "Create Team") {
            finishTeam();
          }
        });
    });
}

function finishTeam() {
  addCards = addEmployeeCard(teamArray);
  fs.writeFile(
    "index.html",
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="/public/css/styles.css" />
      </head>
    
      <header class="header">
        <h1>My Team</h1>
        <nav>
          <!-- go to each employee type -->
        </nav>
      </header>
      <body>
        ${addCards}
      </body>
    </html>`,
    (err) => (err ? console.error(err) : console.log("HTML logged"))
  );
}

// var addEmployeeCard = function () {

function addEmployeeCard() {
  console.log(teamArray, "team array before loop");
  // make a string to hold the emplyee cards
  let result = "";
  // add the each employee card to the string
  for (let i = 0; i < teamArray.length; i++) {
    console.log("this is working");
    let employee = teamArray[i];
    console.log(employee.createCard());
    result += employee.createCard();

    // let cardItem = teamArray[teamArray.length - 1];
    // if (cardItem.role === "Manager") {
    //   createManager(cardItem);
    //   teamArray.pop();
    //   addEmployeeCard(teamArray);
    // } else if (cardItem.role === "Engineer") {
    //   createEngineer(cardItem);
    //   teamArray.pop();
    //   addEmployeeCard(teamArray);
    // } else if (cardItem.role === "Intern") {
    //   createIntern(cardItem);
    //   teamArray.pop();
    //   addEmployeeCard(teamArray);
    // } else if (cardItem === -1) {
    //   return console.log("completed iterations");
    // }
  }
  // return the employee cards
  return result;
}
getEmployeeInfo();

// function createManager() {
//   return `<div class="card">
//       <h2>${this.name}</h2>
//       <h3>Manager</h3>
//       <div class="container">
//         <h4>
//           <b>*Office Number = ${this.officeNumber}*</b>
//           <b>${this.email}</b>
//         </h4>
//       </div>
//     </div>`;
// }

// function createEngineer() {
//   return `<div class="card">
//       <h2>${this.name}</h2>
//       <h3>Manager</h3>
//       <div class="container">
//         <h4>
//           <b>*Github = ${this.github}*</b>
//           <b>${this.email}</b>
//         </h4>
//       </div>
//     </div>`;
// }

// function createIntern() {
//   return `<div class="card">
//       <h2>${this.name}</h2>
//       <h3>Intern</h3>
//       <div class="container">
//         <h4>
//           <b>School = ${this.school}</b>
//           <b>${this.email}</b>
//         </h4>
//       </div>
//     </div>`;
// }

// let myname = "chris";

// // chris!

// var addition = "!";

// // myname = myname + addition
// myname += addition;
// employeeCards += someManager.renderEmployeeCard();
