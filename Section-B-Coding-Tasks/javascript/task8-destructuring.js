const arr = [10, 20, 30, 40, 50];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },
};

// Array Destructuring

const [first, second, ...rest] = arr;
/**
 * first  → 10
 * second → 20
 * rest   → [30, 40, 50]
 */
console.log(first);
console.log(second);
console.log(rest);

// Object Destructuring

const {
  firstName,
  age,
  address: { city },
} = person;
/**
 * firstName → "John"
 * age       → 30
 * city      → "Bangalore"
 */
console.log(firstName);
console.log(age);
console.log(city);

//      Task 8.2: Write a function that accepts an object parameter and uses destructuring in the
//      function parameters itself.

const { firstName: fName } = person;

// firstName is renamed to fName
console.log(fName);

function displayUser({ name, age }) {
  /**
   * Instead of:
   * const { name, age } = user;
   * we destructure directly in parameters
   */
  console.log(`Name: ${name}, Age: ${age}`);
}

displayUser({ name: "Raj", age: 25 });


// Task 8.3: Swap two variables using array destructuring

let a = 10;
let b = 20;

console.log("Before Swap:");
console.log("a =", a);
console.log("b =", b);

/**
 * Using array destructuring:
 * Left side → [a, b]
 * Right side → [b, a]
 *
 * Values are reassigned in one step.
 */

[a, b] = [b, a];

console.log("\nAfter Swap:");
console.log("a =", a);
console.log("b =", b);

