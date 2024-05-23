// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let employeesArray = [];
  let employeeCount = parseInt(prompt("How many employees would you like to add?"));
  for (let i = 0; i < employeeCount; i++) {
    let employee = {
      firstName: prompt("Enter employee's first name:"),
      lastName: prompt("Enter employee's last name:"),
      salary: parseFloat(prompt("Enter employee's salary:"))
    };
    employeesArray.push(employee);
  }
  return employeesArray; // return the array
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  let averageSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  averageSalary = totalSalary / employeesArray.length;
  console.log(`The average salary is: ${averageSalary.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  })}`);

  console.log("==============================");
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Select a random employee from the array using random math
 const selectRandomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
console.log(`Congratulations ${selectRandomEmployee.firstName} ${selectRandomEmployee.lastName}! You are our random drawing winner!`);
}

// Call the functions
let employees = collectEmployees();
displayAverageSalary(employees);
getRandomEmployee(employees);



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');
  

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}
displayEmployees(employees);

// console.log(employees);

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
