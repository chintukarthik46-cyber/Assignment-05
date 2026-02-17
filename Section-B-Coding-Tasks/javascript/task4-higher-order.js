//  Task 4.1: Create a higher-order function repeat(n, action) that takes a number and a
//  callback function, and executes the callback n times.

function repeat(n, action) {
  /**
   * repeat is a higher-order function
   * because it accepts another function (action)
   * as a parameter.
   */
  for (let i = 0; i < n; i++) {
    // calling the function n times inside the loop
    action();
  }
}
// callback function
function sayHello() {
  console.log("hello");
}
// repeat(2, sayHello);

//   Task 4.2: Create a higher-order function filterArray(arr, condition) where
//   condition is a callback function that returns true/false.

const filterArray = (arr, condition) => {
  /**
   * arr → Array to filter
   * condition → Callback function
   * The callback must return true or false
   */

  let result = []; // new array to store filtered elements

  // loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    /**
     * condition(arr[i]) executes the callback
     * If it returns true → element is added
     * If it returns false → element is skipped
     */

    if (condition(arr[i])) {
      result.push(arr[i]);
    }
  }

  // return the filtered array
  return result;
};

// calling filterArray
console.log(
  filterArray(
    [1, 2, 3, 4, 5],
    (num) => num % 2 === 0, // Callback function
  ),
);

/**
 * explanation of callback:
 * num => num % 2 === 0
 *
 * - num % 2 === 0 checks if number is even
 * - Returns true for even numbers
 * - Returns false for odd numbers
 *
 * iteration breakdown:
 * 1 → false (skipped)
 * 2 → true (added)
 * 3 → false (skipped)
 * 4 → true (added)
 * 5 → false (skipped)
 *
 * final Output:
 * [2, 4]
 */

//  Task 4.3: create a function multiplyBy(factor) that returns another function which
//  multiplies its argument by the factor (function returning function).

function multiplyBy(factor) {
  /**
   * factor is stored in memory.
   * The inner function will remember this value
   * even after multiplyBy() has finished executing.
   */
  return function (number) {
    // This inner function has access to 'factor'
    // because of closure.
    return number * factor;
  };
}
// creating new functions using multiplyBy
const double = multiplyBy(2);
const triple = multiplyBy(3);

// console.log(double(5)); //10

//  Task 4.4: Create a higher-order function operate(a, b, operation) where operation is
//  a callback that performs different math operations.

function operate(a, b, operate) {
  /**
   * a → first number
   * b → second number
   * operation → callback function
   *
   * Since operation is a function,
   * we execute it and pass a and b.
   */
  return operate(a, b);
}

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return b === 0 ? "cannot divide by zero" : a / b;
}
// Calling operate with different callbacks
// console.log(operate(10, 20, add));
// console.log(operate(30, 15, sub));
// console.log(operate(10, 20, multiply));

//    Task 4.5: Implement a custom forEach function that takes an array and a callback function.

function forEach(arr, callback) {

  //arr → array to iterate
  // callback → function to execute for each elemen

  for (let i = 0; i < arr.length; i++) {
   
    callback(arr[i], i, arr);
  }
}
forEach([10, 20, 30], function(element, index, array) {
  console.log("element:", element);
  console.log("index:", index);
  console.log("array:", array);
});

