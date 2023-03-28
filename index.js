const inquirer = require('inquirer');
const database = require('./db/database');
const logo = require("asciiart-logo");
const logoText = logo({ name: "Employee PhoneBook"}).render();


const {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
    updateEmployeeManager,
    viewEmployeesByManager,
    viewEmployeesByDepartment,
    deleteDepartment,
    deleteRole,
    deleteEmployee
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
        'Update an employee role',
        'Update an employee manager',
        'View employees by manager',
        'View employees by department',
        'Delete a department',
        'Delete a role',
        'Delete an employee',
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
            case 'Update an employee role':
              updateEmployeeRole();
              break;
            case 'Update an employee manager':
              updateEmployeeManager();
              break;
            case 'View employees by manager':
              viewEmployeesByManager();
              break;
            case 'View employees by department':
              viewEmployeesByDepartment();
              break;
            case 'Delete a department':
              deleteDepartment();
              break;
            case 'Delete a role':
              deleteRole();
              break;
            case 'Delete an employee':
              deleteEmployee();
              break;
            case 'Actually, nothing':
              dbConnection.end();
              break;
          }
        });
  }