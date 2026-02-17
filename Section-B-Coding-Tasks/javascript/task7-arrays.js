/**
 * Task 7.1: Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
 * Use map() to create a new array with each number squared
 * Use filter() to get only even numbers
 * Use reduce() to find the sum of all numbers
 * Chain map(), filter(), and reduce() to get the sum of squares of even numbers
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squared = arr.map((num) => num * num);
//  map() runs once for each element
//  num represents each element in array
// console.log(squared);

const even = arr.filter((eve) => eve % 2 == 0);
//  filter() keeps elements
//  only if condition returns true
// console.log(even);

const sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log("sum : "+sum);

const result = arr
  .filter((num) => num % 2 == 0) // get even numbers
  .map((num) => num * num) // sqauring them
  .reduce((acc, curr) => acc + curr, 0); // adding them
console.log("Sum of squares of even numbers : ", result);

/**
 * Task 7.2: Given an array of objects:
const users = [
{ name: &quot;John&quot;, age: 25, salary: 50000 },
{ name: &quot;Jane&quot;, age: 30, salary: 60000 },
{ name: &quot;Bob&quot;, age: 35, salary: 55000 },
{ name: &quot;Alice&quot;, age: 28, salary: 65000 }
];
    Use map() to create an array of just names
     Use filter() to get users with age &gt; 28
    Use reduce() to calculate total salary
    Use reduce() to group users by age
 */

const users = [
  { name: "John", age: 25, salary: 50000 },
  { name: "Jane", age: 30, salary: 60000 },
  { name: "Bob", age: 35, salary: 55000 },
  { name: "Alice", age: 28, salary: 65000 },
];

const names = users.map((users) => users.name);
//  map() transforms each object
//  We return only user.name
console.log("names : " + names);

const filteredUsers = users.filter((user) => user.age > 28);
//  filter() keeps elements where condition is true
//  Only Jane (30) and Bob (35)
console.log("Users age > 28:", filteredUsers);

const totalSalary = users.reduce((acc, user) => {
  return acc + user.salary;
}, 0);

console.log("Total Salary:", totalSalary);

const groupedByAge = users.reduce((acc, user) => {
  // If age group doesn't exist, create it
  if (!acc[user.age]) {
    acc[user.age] = [];
  }

  // Push user into correct age group
  acc[user.age].push(user);

  return acc;
}, {});

console.log("Grouped by Age:", groupedByAge);

//     Task 7.3: Write polyfills for map(), filter(), and reduce() methods.

//     Polyfill for map()

Array.prototype.myMap = function (callback) {
  /**
   * this refers to the array
   * on which myMap() is called
   */

  let result = [];

  for (let i = 0; i < this.length; i++) {
    /**
     * Call callback for each element
     * and push returned value
     */

    result.push(callback(this[i], i, this));
  }
  return result;
};

// Polyfill for reduce()

Array.prototype.myReduce = function(callback, initialValue) {
  /**
   * If initialValue is provided → start from 0 index
   * Else → use first element as accumulator
   */
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < this.length; i++) {
    /**
     * Update accumulator each iteration
     */
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

//  Task 7.4: Given an array of students with marks, add 20 grace marks to students who scored
//  less than 60, then filter students with marks &gt; 60, and finally calculate the total marks using
//  method chaining.

const students = [
  { name: "Raj", marks: 45 },
  { name: "John", marks: 75 },
  { name: "Alice", marks: 55 },
  { name: "Bob", marks: 90 }
];

const totalMarks = students

  // 1️. Add 20 grace marks if marks < 60
  .map(student => {

    /**
     * If marks less than 60,
     * add 20 grace marks
     */
    if (student.marks < 60) {
      return {
        ...student,
        marks: student.marks + 20
      };
    }

    return student;
  })

  // 2️. Filter students with marks > 60
  .filter(student => student.marks > 60)

  // 3️. Calculate total marks
  .reduce((accumulator, student) => {

    /**
     * Add marks of each student
     * to accumulator
     */
    return accumulator + student.marks;

  }, 0);
console.log("Total Marks:", totalMarks);

