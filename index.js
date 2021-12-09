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
  addCards = addEmployeeCard();
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

var addEmployeeCard = function (teamArray) {
  console.log(teamArray, "team array before loop");
  for (let i = 0; i < teamArray.length; i++) {
    console.log("this is working");
  }
};

// function addEmployeeCard() {
//   for (let i=0; i < )
// }
// function addEmployeeCard() {
//   console.log(teamArray[0]);
//   return teamArray[0];
// }
// use team array

// for (let i = 0; i < teamArray.length; i++) {
//   if (role === "Manager") {
//     createManager();
//   } else if (role === "Engineer") {
//     createEngineer();
//   } else if (role === "Intern") {
//     createIntern();
//   }
//

// }
// const addEmployeeCard = function (arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     } else {
//       return -1;
//     }
//   }
// };
//

// const name = this.name
// const id = this.id
// const email = this.email
// const role =
// // let info = ""
// if (role === "Engineer") {
//   const github = employee.getGithub();

// }

//   return `<div class="card">
//   <hi>*Name Here*</hi>
//   <h2></h2>
//   <div class="container">
//     <h4>
//       <b>*Jobs Here*</b>
//     </h4>
//   </div>
// </div>`;
// }

getEmployeeInfo();
