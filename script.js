/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// Array to store concatenated elements (ensures multiple concatenations)
let concatenatedArr = [...arr];

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
  concatenatedArr.push(newEmployee); // Also adding to concatenated array for consistency

  let output = formatArray(arr);
  displayOutput(output);
}

// 4. removeAdmin() - removing only admin objects (update the original array)
function removeAdmin() {
  arr = arr.filter((employee) => employee.profession !== "admin");
  concatenatedArr = concatenatedArr.filter(
    (employee) => employee.profession !== "admin"
  ); // Only remove admin, keep other concatenated objects intact

  let output = formatArray(concatenatedArr);
  displayOutput(output);
}

// 5. concatenateArray() - concatenating a new array (multiple times possible)
function concatenateArray() {
  let newArr = [
    { id: 5, name: "mike", age: "21", profession: "designer" },
    { id: 6, name: "chris", age: "22", profession: "developer" },
    { id: 7, name: "linda", age: "23", profession: "manager" },
  ];

  concatenatedArr = concatenatedArr.concat(newArr); // Concatenate to preserve history

  let output = formatArray(concatenatedArr);
  displayOutput(output);
}

// Display initial content on page load
window.onload = function () {
  displayInitialContent();
};
