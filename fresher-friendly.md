# JavaScript Guide for Freshers 🚀

## 🌟 Getting Started
```javascript
// Your first JavaScript code
console.log("Hello, World!"); 

// Variables - Storing data
let name = "Priya";
const age = 22;
var isStudent = true; // Try to use let/const instead of var
```
1. Data Types
```
// Primitive Types
const text = "Hello";       // String
const score = 100;          // Number
const isActive = true;      // Boolean
let nothing = null;         // Null
let notDefined;             // Undefined

// Reference Types
const colors = ["red", "blue"];          // Array
const person = { name: "Rahul", age: 25 }; // Object

```
2. Basic Operations

```
// Math operations
let sum = 10 + 5;    // 15
let product = 10 * 5; // 50

// String operations
let greeting = "Hi " + name; // "Hi Priya"

```
3. Conditional Logic

```
// If-else statement
if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("Wait till you're 18");
}

// Switch statement
let day = "Monday";
switch(day) {
  case "Monday":
    console.log("Start of week");
    break;
  default:
    console.log("Other day");
}

```
Loops

``` // For loop
for (let i = 1; i <= 5; i++) {
  console.log(i); // Prints 1 to 5
}

// While loop
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}
```
Functions

```
// Basic function
function sayHello() {
  console.log("Hello!");
}
sayHello();

// Function with parameters
function add(a, b) {
  return a + b;
}
let result = add(3, 4); // 7

```
DOM Basics (Web Interactions)

```
// Get elements
const btn = document.getElementById("myButton");
const headings = document.getElementsByTagName("h1");

```
2. Handling Events

```
<button id="clickMe">Click Me</button>
<script>
  document.getElementById("clickMe").addEventListener("click", function() {
    alert("Button clicked!");
  });
</script>

```
3. Changing Content

```
// Change text
document.getElementById("title").textContent = "New Title";

// Change HTML
document.querySelector(".content").innerHTML = "<p>New paragraph</p>";

```
Mini Projects for Practice
1. Simple Calculator
```
<input type="number" id="num1">
<input type="number" id="num2">
<button id="add">Add</button>
<p id="result"></p>

<script>
  document.getElementById("add").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = num1 + num2;
  });
</script>

```
2. Interactive List
```
<input id="itemInput" placeholder="Enter item">
<button id="addItem">Add Item</button>
<ul id="itemList"></ul>

<script>
  document.getElementById("addItem").addEventListener("click", function() {
    const item = document.getElementById("itemInput").value;
    if (item) {
      const li = document.createElement("li");
      li.textContent = item;
      document.getElementById("itemList").appendChild(li);
      document.getElementById("itemInput").value = "";
    }
  });
</script>

```

