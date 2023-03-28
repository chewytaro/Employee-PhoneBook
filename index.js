const inquirer = require('inquirer');
const database = require('./db/database.js');
const logo = require("asciiart-logo");
const logoText = logo({ name: "Employee PhoneBook"}).render();


const {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
  } = require('./db/database');
  
  console.log(logoText);

  function mainPage() {
    inquirer
     .prompt({
        name: 'action',
        type: 'list',
        message: 'Hello, What would you like to do?',
        choices: [
            'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Actually, nothing'
        ]
     })
     .then(function(answer) {
        switch (answer.action) {
            case 'View all departments':
              viewDepartments();
              break;
            case 'View all roles':
              viewRoles();
              break;
            case 'View all employees':
              viewEmployees();
              break;
            case 'Add a department':
              addDepartment();
              break;
            case 'Add a role':
              addRole();
              break;
            case 'Add an employee':
              addEmployee();
              break;
            case 'Actually, nothing':
              dbConnection.end();
              break;
          }
        });
  }

  mainPage();

  module.exports = {
    mainPage
  };