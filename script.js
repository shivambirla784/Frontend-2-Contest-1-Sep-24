/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  // Helper function to display output in the output section
  function displayOutput(content) {
    document.getElementById("output").innerHTML = content;
  }
  
  // Helper function to format the array content
  function formatArray(arr) {
    return arr
      .map(
        (emp) =>
          `name: ${emp.name}, age: ${emp.age}, profession: ${emp.profession}`
      )
      .join("\n");
  }
  
  // Display initial content when the page loads
  function displayInitialContent() {
    displayOutput("Initial Employee Data:\n\n" + formatArray(arr));
  }
  
  // 1. PrintDeveloperbyMap() - using .map()
  function PrintDeveloperbyMap() {
    let developers = arr
      .map((employee) => {
        if (employee.profession === "developer") {
          return employee;
        }
      })
      .filter((developer) => developer !== undefined);
  
    let output = developers.length
      ? formatArray(developers)
      : "No developers found.";
  
    displayOutput(output);
  }
  
  // 2. PrintDeveloperbyForEach() - using .forEach()
  function PrintDeveloperbyForEach() {
    let developers = [];
    arr.forEach((employee) => {
      if (employee.profession === "developer") {
        developers.push(employee);
      }
    });
  
    let output = developers.length
      ? formatArray(developers)
      : "No developers found.";
  
    displayOutput(output);
  }
  
  // 3. addData() - adding a new employee
  function addData() {
    let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
  
    let output = formatArray(arr);
    displayOutput(output);
  }
  
  // 4. removeAdmin() - removing admin objects
  function removeAdmin() {
    arr = arr.filter((employee) => employee.profession !== "admin");
  
    let output = formatArray(arr);
    displayOutput(output);
  }
  
  // 5. concatenateArray() - concatenating a new array
  function concatenateArray() {
    let newArr = [
      { id: 5, name: "Shivam", age: "23", profession: "Full-Stack Web Dev" },
      { id: 6, name: "Nishant", age: "29", profession: "SPS" },
      { id: 7, name: "Virat", age: "35", profession: "Cricketer" },
    ];
  
    let concatenatedArray = arr.concat(newArr);
  
    let output = formatArray(concatenatedArray);
    displayOutput(output);
  }
  
  // Display initial content on page load
  window.onload = function () {
    displayInitialContent();
  };
  