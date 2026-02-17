//  Task 3.1: Create a function calculator that takes two numbers and an operation (add,
//  subtract, multiply, divide) and returns the result. Use default parameters.

function calculator(a = 0, b = 0, operation = "add") {
  /**
   * Default Parameters:
   * - If 'a' is not provided → it becomes 0
   * - If 'b' is not provided → it becomes 0
   * - If 'operation' is not provided → it defaults to "add"
   */

  if (operation === "add") {
    return a + b;
  } else if (operation === "sub") {
    return a - b;
  } else if (operation === "multi") {
    return a * b;
  } else if (operation === "divide") {
    return a / b;
  }
}

function calculator(a = 0, b = 0, operation = "add") {
  switch (operation) {
    case "add":
      return a + b;

    case "subtract":
      return a - b;

    case "multiply":
      return a * b;

    case "divide":
      return b === 0 ? "Cannot divide by zero" : a / b;

    default:
      return "Invalid operation";
  }
}
// console.log(calculator(10,20, "add"));
// console.log(calculator(30,10, "subtract"));
// console.log(calculator(10,5, "multiply"));
// console.log(calculator(30,10, "divide"));

//  Task 3.2: Write an arrow function that takes unlimited numbers as arguments using rest
//  parameters and returns their sum.

const sumNumber = (...numbers) => {
  /**
   * Rest parameter (...numbers)
   * collects all arguments into an array.
   * Example:
   * sumNumbers(1,2,3)
   * numbers = [1,2,3]
   */
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};
// console.log(sumNumber(10,20,30,40));

//  Task 3.3: Create an IIFE that declares private variables and returns an object with methods
//  to access them.

const IIFE = (function () {
  /**
   * These variables are PRIVATE.
   * They cannot be accessed directly from outside.
   * Only the returned methods can access them.
   */
  let count = 0;
  let name = "karthik";

  return {
    increment: function () {
      count++;
      return count;
    },

    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
    getName: function () {
      return name;
    },
  };
})();

console.log(IIFE.increment());
console.log(IIFE.getCount());
console.log(IIFE.decrement());
console.log(IIFE.increment());
console.log(IIFE.getName());

// Task 3.4: Demonstrating difference between
// function declaration and function expression hoisting

// 1️. Calling function before declaration

funDec();

/**
 *  Output: "function declaration"
 *
 * Reason:
 * - Function declarations are fully hoisted.
 * - Both the function name AND its body
 *   are moved to the top of the scope.
 * - So we can call it before its definition.
 */

function funDec() {
  console.log("function declaration");
}

// 2️. Calling function expression before definition

funExp();

/**
 * ReferenceError: Cannot access 'funExp' before initialization
 *
 * Reason:
 * - 'funExp' is declared using 'let'.
 * - Only the variable declaration is hoisted.
 * - It stays inside the Temporal Dead Zone (TDZ)
 *   until the assignment line.
 * - The function is NOT available before assignment.
 */

let funExp = function () {
  console.log("function expression");
};

// 3️. Calling after definition (works)

funExp();

/**
 * Output: "function expression"
 *
 * Reason:
 * - Now the function expression has been assigned to the variable.
 * - So it works normally.
 */
