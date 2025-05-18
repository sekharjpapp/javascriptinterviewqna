# JavaScript Code Examples and Theory Questions

## Table of Contents
1. [Code Examples](#code-examples)
2. [Theory Questions](#theory-questions)

## Code Examples

### 1. Basic Function Example
```javascript
// Function that adds two numbers
function addNumbers(a, b) {
  return a + b;
}

// Usage
const result = addNumbers(5, 3);
console.log(result); // Output: 8

2. Array Manipulation
// Map and filter example
const numbers = [1, 2, 3, 4, 5];

const squaredEvenNumbers = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num);

console.log(squaredEvenNumbers); // Output: [4, 16]

3. Promise Example
// Async function with promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully!');
    }, 2000);
  });
}

// Using the promise
fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));

Theory Questions
1. What is hoisting in JavaScript?

Hoisting is JavaScript's default behavior of moving declarations to the top of their containing scope. Variable and function declarations are hoisted, but not their initializations.
2. Explain the difference between let, const, and var?

    var: Function-scoped, can be redeclared and updated

    let: Block-scoped, can be updated but not redeclared

    const: Block-scoped, cannot be updated or redeclared (for primitive values)

3. What is the event loop in JavaScript?

The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the system kernel when possible. It continuously checks the call stack and processes the callback queue.
4. What are closures in JavaScript?

A closure is a function that has access to its own scope, the outer function's variables, and global variables - even after the outer function has returned.
5. Explain prototypal inheritance in JavaScript?

JavaScript uses prototypal inheritance where objects can inherit properties from other objects. Each object has a prototype property that points to another object from which it inherits properties.
6. What is the difference between == and ===?

    == performs type coercion before comparing

    === checks both value and type without coercion

7. What are arrow functions and how do they differ from regular functions?

Arrow functions are a concise syntax for writing functions in ES6. Differences:

    No this binding (inherits from parent scope)

    Can't be used as constructors

    No arguments object

    No prototype property

8. What is the purpose of use strict?

'use strict' enables strict mode which:

    Makes debugging easier by throwing errors for unsafe actions

    Prevents accidental globals

    Disallows duplicate parameter names

    Makes eval safer

    Throws error on attempts to change read-only properties

