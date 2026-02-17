let result1 = "5" + 2;
/**
 * JavaScript converts number 2 → "2"
 * Because + with string performs concatenation
 */
console.log(result1); // "52"
console.log(typeof result1); // string

let result2 = "5" - 2;
/**
 * - operator forces numeric conversion
 * "5" becomes 5
 */
console.log(result2); // 3
console.log(typeof result2); // number

let result3 = true + 1;

/**
 * true → 1
 * false → 0
 */

console.log(result3); // 2
console.log(typeof result3); // number

console.log(null + 1);
/**
 * null → 0
 */
// Output: 1

console.log(undefined + 1);
/**
 * undefined → NaN
 */
// Output: NaN

console.log(5 == "5"); // true
/**
 * String "5" converted to number 5
 */

console.log(false == 0); // true
/**
 * false → 0
 */

// Task 9.2: Function to check data type

function checkType(value) {
  /**
   * Special case: null
   * typeof null === "object" (JavaScript bug)
   */
  if (value === null) {
    return "This is null (primitive type)";
  }
  /**
   * Check for Array
   */
  if (Array.isArray(value)) {
    return "This is an Array (reference type)";
  }
  /**
   * Check other types using typeof
   */
  switch (typeof value) {
    case "string":
      return "This is a String (primitive type)";
    case "number":
      return "This is a Number (primitive type)";
    case "boolean":
      return "This is a Boolean (primitive type)";
    case "undefined":
      return "This is Undefined (primitive type)";
    case "bigint":
      return "This is BigInt (primitive type)";
    case "symbol":
      return "This is Symbol (primitive type)";
    case "function":
      return "This is a Function (reference type)";
    case "object":
      return "This is an Object (reference type)";
    default:
      return "Unknown data type";
  }
}
console.log(checkType("Hello")); // String
console.log(checkType(100)); // Number
console.log(checkType(true)); // Boolean
console.log(checkType(undefined)); // Undefined
console.log(checkType(null)); // Null
console.log(checkType(10n)); // BigInt
console.log(checkType(Symbol("id"))); // Symbol
console.log(checkType([1, 2, 3])); // Array
console.log(checkType({ name: "Raj" })); // Object
console.log(checkType(function () {})); // Function

//      Task 9.3: Demonstrate the difference between == and === with 10 different examples.

console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.log("" == 0); // true
console.log("" === 0); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log("1" == true); // true
console.log("1" === true); // false

//      Task 9.4: Create a function that identifies truthy and falsy values from an array.

function identifyValues(arr) {
  let truthyValues = [];
  let falsyValues = [];

  for (let i = 0; i < arr.length; i++) {
    /**
     * If value is truthy
     */
    if (arr[i]) {
      truthyValues.push(arr[i]);
    } else {
      falsyValues.push(arr[i]);
    }
  }
  return {
    truthy: truthyValues,
    falsy: falsyValues,
  };
}
const data = [
  0,
  1,
  "",
  "Hello",
  false,
  true,
  null,
  undefined,
  NaN,
  [],
  {},
  "0",
];

const result = identifyValues(data);

console.log("Truthy Values:", result.truthy);
console.log("Falsy Values:", result.falsy);

