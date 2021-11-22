const Employees = require("./employee");

class Engineers extends Employees {
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }
}

module.exports = Engineers;
