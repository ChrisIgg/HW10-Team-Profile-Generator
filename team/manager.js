const Employee = require("./employee");

class Manager extends Employee {
  constructor(id, name, email, officeNumber, role) {
    super(id, name, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
  createManager() {
    return `<div class="card">
      <h2>${this.name}</h2>
      <h3>Manager</h3>
      <div class="container">
        <h4>
          <b>*Office Number = ${this.officeNumber}*</b>
          <b>${this.email}</b>
          <b>${this.role}</b>
        </h4>
      </div>
    </div>`;
  }
}

module.exports = Manager;
