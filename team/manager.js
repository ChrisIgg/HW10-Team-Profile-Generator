const Employees = require("./employee");

class Managers extends Employees {
  constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
  }
}

module.exports = Managers;
