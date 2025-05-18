// A Higher-Order Function (HOF) is a function that either:
//     Takes another function as an argument, or
//     Returns a function as its result
// Examples in JavaScript/TypeScript
// 1. Function that takes another function as an argument
function greet(name) {
    return function(greeting) {
        return `${greeting}, ${name}!`;
    };
}       
console.log(greet("Alice")("Hello")); // Output: Hello, Alice!
// Common Examples of HOFs
// 1. Array Methods (Taking Functions as Arguments)
// forEach - takes a function and applies it to each element
[1, 2, 3].forEach(num => console.log(num * 2));

// map - transforms each element using a function
const doubled = [1, 2, 3].map(num => num * 2);

// filter - selects elements based on a function
const evens = [1, 2, 3, 4].filter(num => num % 2 === 0);

// reduce - accumulates values using a function
const sum = [1, 2, 3].reduce((acc, num) => acc + num, 0);
//2. Functions that Return Functions
// Create a multiplier function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10

const triple = createMultiplier(3);
console.log(triple(5)); // 15
//3. Function Decorators (Wrapping Functions)
// A simple logger decorator
function withLogger(fn) {
  return function(...args) {
    console.log(`Calling function with args: ${args}`);
    const result = fn(...args);
    console.log(`Function returned: ${result}`);
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = withLogger(add);

loggedAdd(2, 3); 
// Logs: 
// Calling function with args: 2,3
// Function returned: 5

// Benefits of Higher-Order Functions
// Abstraction: Hide implementation details while exposing functionality
// Code Reuse: Avoid repeating similar patterns
// Composition: Build complex operations from simple ones
// Declarative Code: Focus on what to do rather than how to do it

// Advanced HOF Examples
// Currying (Transforming multi-argument functions)

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...moreArgs) => curried(...args, ...moreArgs);
    }
  };
}

const add1 = (a, b, c) => a + b + c;
const curriedAdd = curry(add1);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6

//Memoization (Caching function results)
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const factorial = memoize(n => 
  n <= 1 ? 1 : n * factorial(n - 1)
);

console.log(factorial(5)); // Calculates
console.log(factorial(5)); // Returns cached value
// Output: 120
