//  Task 6.1: Create an object student with properties: name, age, course, and a method
//  getDetails() that returns student information.

let student = {
  name: "raj",
  age: 24,
  course: "Mern Stack",

  getDetails: function () {
    //  'this' refers to the current object (student)
    return `Name : ${this.name}, Age : ${this.age}, Course : ${this.course}`;
  },
};
console.log(student.getDetails());

//     Task 6.2: Write a function that performs deep cloning of an object (handle nested objects).

function deepClone(obj) {
  //     If value is null or not an object,
  //     return it directly (primitive values)
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  // Create empty object or array
  // depending on input type
  let copy = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    // Check only own properties
    if (!obj.hasOwnProperty(key)) continue;

    // Recursively clone nested values
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}

let orginal = {
  name: "Hero",
  age: 40,
  salary: 999999,
  address: {
    country: "Indain",
    state: "Telangana",
    city: "Hyderabad",
  },
};
let clone = deepClone(orginal);

// Modify cloned object
clone.address.city = "Mumbai";
console.log(orginal.address.city); //Hyderabd
console.log(clone.address.city); //Mumbai

//      Task 6.3: Create an object with computed property names based on user input.

let keyName = "age";

let person = {
  name: "Zero",
  [keyName]: 35, //  computed property
};
// console.log(person);

//     Task 6.4: Write code to demonstrate the difference between shallow copy and deep copy
//     using an object with nested properties.

let Orginal = {
  name: "Hero",
  age: 40,
  salary: 999999,
  address: {
    country: "Indain",
    state: "Telangana",
    city: "Hyderabad",
  },
};

let shallow = { ...Orginal };
shallow.address.city = "Mumbai";

console.log("After Shallow Copy:");
console.log(Orginal.address.city); // Mumbai
console.log(shallow.address.city); // Mumbai

let deep = JSON.parse(JSON.stringify(Orginal));
deep.address.city = "Chennai";
console.log("\nAfter Deep Copy:");
console.log(Orginal.address.city); // Mumbai
console.log(deep.address.city); // Chennai

//      Task 6.5: Use Object.keys(), Object.values(), and Object.entries() to iterate through an object
//      and display its contents.

let obj = {
  name: "zero",
  age: 30,
  salary: -9999,
};
console.log("Using Object.keys():");

Object.keys(obj).forEach((key) => {
  /**
   * Object.keys(obj)
   * returns an array of keys
   * ["name", "age", "salary"]
   */
  console.log(key + ":" + obj[key]);
});

console.log("\nUsing Object.values():");

Object.values(obj).forEach(function (value) {
  /**
   * Object.values(obj)
   * returns array of values
   * ["zero", 30, -9999]
   */

  console.log(value);
});

console.log("\nUsing Object.entries():");

Object.entries(obj).forEach(function([key, value]) {

  /**
   * Object.entries(obj)
   * returns array of [key, value] pairs
   * [
   *   ["name", "zero"],
   *   ["age", 30],
   *   ["salary", -9999]
   * ]
   */

  console.log(key + ":", value);
});
