# Advanced JavaScript Concepts

## Table of Contents
1. [Advanced Code Examples](#advanced-code-examples)
2. [Framework-Specific Questions](#framework-specific-questions)
3. [Performance Optimization](#performance-optimization)
4. [Browser-Specific JavaScript](#browser-specific-javascript)
5. [ES6+ Features Explained](#es6-features-explained)

## Advanced Code Examples

### 1. Memoization with Higher-Order Functions
```javascript
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

// Usage
const factorial = memoize((n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5)); // Calculates
console.log(factorial(5)); // Returns cached result
2. Custom Event Emitter
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    (this.events[event] || (this.events[event] = [])).push(listener);
    return this;
  }

  emit(event, ...args) {
    (this.events[event] || []).forEach(listener => listener(...args));
  }
}

// Usage
const emitter = new EventEmitter();
emitter.on('data', (data) => console.log('Data received:', data));
emitter.emit('data', { id: 1 }); // Logs: Data received: { id: 1 }

3. Proxy for Validation

const validator = {
  set(target, prop, value) {
    if (prop === 'age') {
      if (typeof value !== 'number' || value < 0) {
        throw new TypeError('Age must be a positive number');
      }
    }
    target[prop] = value;
    return true;
  }
};

const person = new Proxy({}, validator);
person.age = 25; // Works
person.age = '25'; // Throws error

Framework-Specific Questions
React

    Explain the Virtual DOM and how it improves performance
    The Virtual DOM is a lightweight copy of the real DOM. React uses it to:

        Batch multiple DOM updates

        Calculate minimal DOM operations through diffing algorithms

        Reduce expensive direct DOM manipulations

    What are hooks and when would you use them?
    Hooks are functions that let you "hook into" React state and lifecycle features from function components. Key hooks:

        useState: For component state

        useEffect: For side effects

        useContext: For accessing context

        useReducer: For complex state logic

Angular

    Explain change detection in Angular
    Angular's change detection:

        Can run in Default or OnPush modes

        Tracks component bindings

        Uses zone.js to detect async operations

        In OnPush mode, only checks when:

            Input references change

            Event originates from the component

            Explicit manual triggering

    What is dependency injection in Angular?
    DI is a design pattern where:

        Dependencies are "injected" rather than created

        Managed by Angular's injector hierarchy

        Promotes modularity and testability

        Implemented via constructor parameters with @Injectable

Performance Optimization
1. Critical Rendering Path Optimization

    Minify and compress assets (JS, CSS, HTML)

    Implement lazy loading for components/routes

    Use code splitting with Webpack/Rollup

    Optimize images (WebP format, responsive images)

    Reduce main thread work with Web Workers

2. Memory Management
// Memory leak example (detached DOM references)
function createLeak() {
  const element = document.createElement('div');
  document.body.appendChild(element);
  element.remove(); // Still referenced in memory
  // element = null; // Fix
}

// Use WeakMap for non-essential cache
const weakCache = new WeakMap();
const obj = {};
weakCache.set(obj, 'data'); // Automatically garbage collected
// Memory leak example (detached DOM references)
function createLeak() {
  const element = document.createElement('div');
  document.body.appendChild(element);
  element.remove(); // Still referenced in memory
  // element = null; // Fix
}

// Use WeakMap for non-essential cache
const weakCache = new WeakMap();
const obj = {};
weakCache.set(obj, 'data'); // Automatically garbage collected
3. Debouncing and Throttling
// Debounce implementation
function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

// Usage for resize events
window.addEventListener('resize', debounce(() => {
  console.log('Window resized');
}, 200));
Browser-Specific JavaScript
1. Cross-Browser Compatibility Issues

    Event handling differences (attachEvent vs addEventListener)

    CSS prefix variations (-webkit, -moz, -ms)

    ES6+ support variations (use Babel/polyfills)

    Touch event implementations

2. Feature Detection

// Modern feature detection pattern
if ('IntersectionObserver' in window) {
  // Use modern API
  const observer = new IntersectionObserver(callback);
} else {
  // Fallback
  window.addEventListener('scroll', throttle(scrollHandler, 100));
}
3. Service Workers and PWA
// Basic service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered');
      });
  });
}
ES6+ Features Explained
1. Destructuring

// Object destructuring
const { name, age } = user;

// Array destructuring
const [first, second] = array;

// With default values
const { settings = {} } = config;

2. Async/Await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}
3. Optional Chaining (?.) and Nullish Coalescing (??)
// Before
const street = user && user.address && user.address.street;

// After
const street = user?.address?.street;

// Nullish coalescing
const value = input ?? 'default'; // Only if null/undefined
4. Private Class Fields
class Counter {
  #count = 0; // Private field

  increment() {
    this.#count++;
  }

  get value() {
    return this.#count;
  }
}
5. Dynamic Imports
// Lazy load module
button.addEventListener('click', async () => {
  const module = await import('./module.js');
  module.doSomething();
});
