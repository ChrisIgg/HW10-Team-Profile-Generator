const fs = require("fs");
const inquirer = require("inquirer");
const { clog } = require("./middleware/clog");
const Employees = require("./team/employee");
const Managers = require("./team/manager");
const Engineers = require("./team/engineer");
const Interns = require("./team/intern");
const PORT = process.env.Port || 3001;
const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
