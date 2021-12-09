const Employee = require("./employee");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email, "Engineer");
    this.github = github;
  }
  createCard() {
    return `<div class="card">
    <h2>${this.name}</h2>
    <h3>Manager</h3>
    <div class="container">
      <h4>
        <b>*Github: ${this.github}*</b>
        <b>${this.email}</b>
      </h4>
    </div>
  </div>`;
  }
}

module.exports = Engineer;
