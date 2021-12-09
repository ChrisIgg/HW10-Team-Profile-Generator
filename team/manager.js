const Employee = require("./employee");

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email, "Manager");
    this.officeNumber = officeNumber;
  }
  createCard() {
    return `<div class="card">
      <h2>${this.name}</h2>
      <h3>Manager</h3>
      <div class="container">
        <h4>
          <b>*Office Number: ${this.officeNumber}*</b>
          <b>${this.email}</b>
        </h4>
      </div>
    </div>`;
  }
}

module.exports = Manager;
