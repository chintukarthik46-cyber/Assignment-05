//      Task 5.1: Create a function processArray(arr, callback) that processes each element
//      using the callback function.

function processArray(arr, callback) {
  //   arr → input array
  //   callback → function that processes each element
  let result = [];
  //      Apply callback to each element
  //      and store returned value
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

// Example 1: Square each number
function test(num) {
  return [num];
}

// console.log(processArray([1, 2, 3, 4], test));

//  Task 5.2: Create a function calculator(a, b, operationCallback) where operations
//  (add, subtract, multiply, divide) are passed as callbacks.

function calculator(a, b, operationCallback) {
  /**
   * a → first number
   * b → second number
   * operation → callback function
   *
   * Since operation is a function,
   * we execute it and pass a and b.
   */

  return operationCallback(a, b);
}
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function multi(a, b) {
  return a * b;
}
function divide(a, b) {
  return b === 0 ? "cannot divide by zero" : a / b;
}

console.log(calculator(30, 5, add));

//    Task 5.3: Simulate asynchronous behavior: Create fetchData(callback) that uses
//    setTimeout to mimic API call and executes callback with data after 2 seconds.

function fetchData(callback) {
  setTimeout(
    () => {
      const obj = {
        id: 100,
        name: "karthik",
        role: "Mern Stack",
      };
      callback(obj);
    },
    2000, // here it will stop the execution for 2sec, then obj will be called after 2sec
  );
}
// Calling fetchData
// fetchData(function (response) {
//   console.log("data received");
//   console.log(response);
// });
// console.log("fetching data...");

//    Task 5.4: Create downloadFile(filename, onSuccess, onError) that randomly
//    succeeds or fails and calls appropriate callback.

function downloadFile(filename, onSuccess, onError) {
  /**
   * Generate random result:
   * Math.random() gives number between 0 and 1
   * If > 0.5 → success
   * Else → failure
   */

  setTimeout(() => {
    const isSuccessful = Math.random() > 0.5;

    if (isSuccessful) {
      onSuccess(`file "${filename}" download successfully.`);
    } else {
      onError(`Error downloading file "${filename}".`);
    }
  }, 2000);
}
// downloadFile(
//   "repot.pdf",
//   function success(message) {
//     console.log("success");
//     console.log(message);
//   },
//   function Error(message) {
//     console.log("error");
//     console.log(message);
//   },
// );
// console.log("downloading file...");

//  Task 5.5: Implement a custom sort function that accepts an array and a comparison
//  callback function.

function sort(arr, compare) {
  /**
   * I used a simple bubble sort algorithm.
   * It compares adjacent elements and swaps them
   * based on the comparison callback.
   */
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // compare(arr[j], arr[j+1])
      // if result is > 0 -> swap element

      if (compare(arr[j], arr[j + 1] > 0)) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
//    ascending function
function ascending(a, b) {
  return a - b;
}
console.log(sort([5, 2, 8, 1, 4], ascending));

//    decending function
function decending(a, b) {
  return b - a;
}
console.log(sort([5, 2, 8, 1, 4], decending));