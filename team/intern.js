const Employee = require("./employee");

class Intern extends Employee {
  constructor(id, name, email, school) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.school = school;
  }
}

module.exports = Intern;
