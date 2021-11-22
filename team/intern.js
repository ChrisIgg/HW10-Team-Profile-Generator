const Employees = require("./employee");

class Interns extends Employees {
  constructor(id, name, email, school) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.school = school;
  }
}

module.exports = Interns;
