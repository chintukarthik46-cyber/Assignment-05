// Task 10.1: Bank Account using Closure

function createBankAccount(accountNumber, accountHolder, initialBalance) {

  /**
   * Private variable
   * Not accessible outside this function
   */
  let balance = initialBalance;

  // Validation for initial balance
  if (typeof balance !== "number" || balance < 0) {
    throw new Error("Initial balance must be a positive number.");
  }
  return {

    accountNumber,
    accountHolder,

    // ---------------- Deposit ----------------
    deposit(amount) {

      if (typeof amount !== "number" || amount <= 0) {
        console.log("Deposit amount must be greater than 0.");
        return;
      }

      balance += amount;
      console.log(`Deposited ₹${amount} successfully.`);
    },

    // ---------------- Withdraw ----------------
    withdraw(amount) {

      if (typeof amount !== "number" || amount <= 0) {
        console.log("Withdrawal amount must be greater than 0.");
        return;
      }

      if (amount > balance) {
        console.log("Insufficient balance.");
        return;
      }

      balance -= amount;
      console.log(`Withdrawn ₹${amount} successfully.`);
    },

    // ---------------- Get Balance ----------------
    getBalance() {
      return balance;
    },

    // ---------------- Get Statement ----------------
    getStatement() {
      return `
        Account Number: ${accountNumber}
        Account Holder: ${accountHolder}
        Current Balance: ₹${balance}
      `;
    }
  };
}
const account = createBankAccount(123456, "Karthik", 5000);

console.log(account.getStatement());

account.deposit(2000);
account.withdraw(1500);

console.log("Balance:", account.getBalance());

account.withdraw(10000); // Insufficient balance
account.deposit(-500);   // Invalid deposit

//  Task 10.2: Create an array of products with properties: id, name, price, category. Implement
//  the following:

const products = [
  { id: 1, name: "Laptop", price: 80000, category: "Electronics" },
  { id: 2, name: "Phone", price: 40000, category: "Electronics" },
  { id: 3, name: "Shoes", price: 3000, category: "Fashion" },
  { id: 4, name: "Watch", price: 7000, category: "Fashion" },
  { id: 5, name: "Chair", price: 5000, category: "Furniture" }
];

function filterByCategory(category) {
  /**
   * filter() returns products
   * matching given category
   */
  return products.filter(product =>
    product.category === category
  );
}
console.log(filterByCategory("Electronics"));

function getTotalValue() {
  /**
   * reduce() accumulates total price
   */
  return products.reduce((total, product) =>
    total + product.price
  , 0);
}
console.log("Total Value:", getTotalValue());

function getMostExpensiveProduct() {
  /**
   * reduce() compares prices
   * and returns product with highest price
   */
  return products.reduce((maxProduct, currentProduct) =>
    currentProduct.price > maxProduct.price
      ? currentProduct
      : maxProduct
  );
}
console.log("Most Expensive:", getMostExpensiveProduct());

/**
 * Task 10.3: Create a Student Management System:
 Array of student objects with: id, name, marks (array of subjects)
 Calculate average marks for each student using map() and reduce()
 Filter students with average &gt; 75
 Find the topper student
 Generate a report card for each student
 */

const studentsWithAverage = students.map(student => {

  /**
   * Use reduce() to calculate total marks
   */
  const total = student.marks.reduce((sum, mark) => sum + mark, 0);

  const average = total / student.marks.length;

  return {
    ...student,
    average: average
  };
});

console.log("Students with Average:", studentsWithAverage);

const highScorers = studentsWithAverage.filter(student =>
  student.average > 75
);

console.log("Average > 75:", highScorers);

const topper = studentsWithAverage.reduce((top, student) =>
  student.average > top.average ? student : top
);

console.log("Topper:", topper);

const reportCards = studentsWithAverage.map(student => {

  /**
   * Determine grade based on average
   */
  let grade;

  if (student.average >= 90) grade = "A+";
  else if (student.average >= 80) grade = "A";
  else if (student.average >= 70) grade = "B";
  else if (student.average >= 60) grade = "C";
  else grade = "Fail";

  return `
  ------------------------
  ID: ${student.id}
  Name: ${student.name}
  Marks: ${student.marks.join(", ")}
  Average: ${student.average.toFixed(2)}
  Grade: ${grade}
  ------------------------
  `;
});

console.log(reportCards.join("\n"));
