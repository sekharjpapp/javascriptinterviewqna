# JavaScript Basics for Beginners

## Table of Contents
1. [Basic Syntax](#basic-syntax)
2. [Common Methods](#common-methods)
3. [DOM Manipulation](#dom-manipulation)
4. [Simple Projects](#simple-projects)
5. [FAQ for Beginners](#faq-for-beginners)

## Basic Syntax

### 1. Variables
```javascript
// Declaring variables
let name = "Alice"; // Can be changed
const age = 25;     // Cannot be changed
var oldWay = true;  // Older method (avoid in new code)
2. Functions
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function (ES6)
const greet = (name) => `Hello, ${name}!`;
3. Conditionals
// If-else statement
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Ternary operator
const status = age >= 18 ? "Adult" : "Minor";
Common Methods
1. Arrays
const fruits = ["apple", "banana"];

// Add/remove items
fruits.push("orange"); // Adds to end
fruits.pop();         // Removes from end

// Find item
fruits.includes("apple"); // true

// Loop through array
fruits.forEach(fruit => console.log(fruit));
2. Strings
const message = "Hello World";

message.length;       // 11
message.toUpperCase(); // "HELLO WORLD"
message.includes("Hello"); // true
3. Objects
const person = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "coding"]
};

// Access properties
person.name; // "Alice"
person["age"]; // 25

// Add new property
person.country = "USA";

DOM Manipulation
1. Select Elements
// By ID
const header = document.getElementById("header");

// By class
const items = document.getElementsByClassName("item");

// Modern selectors
const button = document.querySelector("#submit-btn");
const allButtons = document.querySelectorAll(".btn");

2. Event Listeners

button.addEventListener("click", () => {
  console.log("Button clicked!");
});
3. Update Content
// Change text
header.textContent = "New Title";

// Change HTML
header.innerHTML = "<em>Fancy</em> Title";

// Change styles
header.style.color = "blue";

Simple Projects
1. To-Do List
// HTML: <input id="todo-input"><button id="add-btn">Add</button><ul id="list"></ul>

const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");
const list = document.getElementById("list");

button.addEventListener("click", () => {
  const task = input.value;
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
    input.value = "";
  }
});
2. Counter App

// HTML: <button id="decrement">-</button><span id="count">0</span><button id="increment">+</button>

let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increment").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("decrement").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});
FAQ for Beginners
1. What is JavaScript?

JavaScript is a programming language that makes web pages interactive. It runs in your browser and can:

    Update content without page reload

    Animate elements

    Validate forms

    Load data in the background

2. Difference between let, const, and var?

    let: Can change value later, block-scoped

    const: Cannot change value after assignment, block-scoped

    var: Older way, function-scoped (avoid in new code)

3. How to debug JavaScript?
// 1. Console logging
console.log(variable);

// 2. Browser debugger
debugger; // Pauses code execution

// 3. Check browser console for errors (F12)
4. What is the DOM?

The Document Object Model (DOM) is:

    A tree structure of your HTML page

    JavaScript can modify it to change what you see

    Represents elements as objects with properties/methods

5. How to add JavaScript to HTML?
<!-- Internal script -->
<script>
  alert("Hello!");
</script>

<!-- External script -->
<script src="script.js"></script>

6. What are common data types?

    String: "text"

    Number: 42, 3.14

    Boolean: true, false

    Array: [1, 2, 3]

    Object: { key: "value" }

    Null/Undefined: null, undefined


