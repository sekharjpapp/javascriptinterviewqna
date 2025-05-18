//1. Using call
// The call method invokes a function with a specified this value and arguments passed individually.
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
};

const anotherPerson = {
    firstName: "Alice",
    lastName: "Smith"
};

// Call `fullName` using `anotherPerson` as `this`
person.fullName.call(anotherPerson); // Output: Alice Smith

//2. Using apply
// The apply method is similar to call, but it takes arguments as an array.
const person1 = {
    fullName: function(city, country) {
        console.log(this.firstName + " " + this.lastName + " from " + city + ", " + country);
    }
};

const anotherPerson1 = {
    firstName: "Alice",
    lastName: "Smith"
};

// Apply method with an array of arguments
person1.fullName.apply(anotherPerson1, ["New York", "USA"]); // Output: Alice Smith from New York, USA

const person2 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
};

const anotherPerson2 = {
    firstName: "Alice",
    lastName: "Smith"
};

// Bind creates a new function with `anotherPerson` as `this`
const boundFunction = person2.fullName.bind(anotherPerson2);
boundFunction(); // Output: Alice Smith

