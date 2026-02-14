## A.3️ JavaScript Fundamentals (Engine & Execution)


## 1️. JavaScript Basics

JavaScript is a **single-threaded, interpreted programming language**.

Single-threaded  
→ Executes one task at a time (one call stack)

Interpreted  
→ Code is executed line by line (but modern engines use JIT compilation)

---

## 2️. V8 Engine Architecture

V8 is Google’s JavaScript engine (used in Chrome & Node.js).

### Main Components:

Parser  
→ Converts JavaScript code into Abstract Syntax Tree (AST)

AST (Abstract Syntax Tree)  
→ Structured representation of code

Ignition (Interpreter)  
→ Converts AST into bytecode and executes it

TurboFan (Optimizing Compiler)  
→ Optimizes frequently used code into machine code

---

## 3️. Just-In-Time (JIT) Compilation

JIT = Combination of Interpreter + Compiler.

Process:

1. Code is parsed
2. Ignition converts code to bytecode
3. Frequently executed code is identified (hot code)
4. TurboFan compiles hot code into optimized machine code

Result → Faster execution compared to pure interpretation.

---

## 4️. Memory Heap and Call Stack

### Memory Heap

Stores:
- Objects
- Functions
- Arrays
- Dynamic data

It is unstructured memory storage.

---

### Call Stack

Stores:
- Function calls
- Execution context
- Local variables

Works in LIFO (Last In First Out) order.

Example:

Function A calls B  
B executes first  
Then control returns to A  

---

## 5️. Event Loop & Asynchronous Execution

JavaScript is single-threaded but handles async tasks using:

- Call Stack
- Web APIs
- Callback Queue
- Event Loop

How it works:

1. Async task (setTimeout, fetch) goes to Web APIs
2. After completion, callback goes to Queue
3. Event Loop checks if Call Stack is empty
4. If empty → Moves callback to Call Stack

This enables non-blocking behavior.

---

##  Quick Revision Questions

1. Explain the V8 engine architecture and how it executes JavaScript code.  
→ Parser converts code to AST.  
→ Ignition converts AST to bytecode and executes it.  
→ TurboFan optimizes frequently used code into machine code.

2. What is the role of Ignition and TurboFan in V8?  
→ Ignition interprets and runs bytecode.  
→ TurboFan optimizes hot code for better performance.

3. How does JIT compilation improve performance?  
→ It compiles frequently executed code into optimized machine code during runtime.

4. What is the difference between Call Stack and Memory Heap?  
→ Call Stack stores execution context and function calls (LIFO).  
→ Memory Heap stores objects and dynamic data.

## A.2️ Variables (var, let, const)

---

## 1️. var

Function-scoped  
→ Accessible inside the entire function  

Hoisted with `undefined`  
→ Memory is allocated during creation phase  

Example:

`console.log(a);` → undefined  
`var a = 10;`

Can be re-declared and re-assigned.

---

## 2️. let

Block-scoped  
→ Accessible only inside `{ }` block  

Hoisted but not initialized  
→ Exists in Temporal Dead Zone (TDZ)

Example:

`console.log(b);` → ReferenceError  
`let b = 20;`

Cannot be re-declared in the same scope  
Can be re-assigned.

---

## 3️. const

Block-scoped  
→ Works like `let` in scope  

Must be initialized during declaration  

Cannot be re-assigned  

Example:

`const c = 30;`  
`c = 40;` → TypeError  

If const holds an object:

Properties can be modified  
But variable reference cannot change.

---

## 4️. Scope Chain & Lexical Scoping

Lexical Scoping  
→ Scope is determined by where variables are written in code.

Scope Chain  
→ If a variable is not found in current scope, JS looks in outer scope, then global scope.

---

## Quick Revision Questions (Variables)

1. Compare var, let, and const.  
→ var is function-scoped and hoisted with undefined.  
→ let is block-scoped and in TDZ before initialization.  
→ const is block-scoped, must be initialized, cannot be reassigned.

2. What is Temporal Dead Zone (TDZ)?  
→ The time between variable hoisting and initialization where accessing `let` or `const` causes ReferenceError.

3. What happens if you access a let variable before declaration?  
→ It throws ReferenceError due to TDZ.

4. Can you reassign a const object's properties?  
→ Yes, object properties can change.  
→ But you cannot reassign the entire object.

---


## A.3️ Hoisting



## 1️. What is Hoisting?

Hoisting  
→ JavaScript moves declarations to the top of their scope during creation phase.

Only declarations are hoisted, not initializations.

---

## 2️. var Hoisting

Hoisted and initialized with `undefined`.

Example:

`console.log(x);` → undefined  
`var x = 5;`

Internally treated as:

`var x;`  
`console.log(x);`  
`x = 5;`

---

## 3️. let and const Hoisting

Hoisted but NOT initialized.  
They stay in Temporal Dead Zone (TDZ).

Example:

`console.log(y);` → ReferenceError  
`let y = 10;`

---

## 4️. Function Hoisting

Function Declarations  
→ Fully hoisted (can call before definition)

Example:

`greet();`  
`function greet() {}`

Function Expressions  
→ Not fully hoisted (behaves like variable)

Example:

`greet();` → Error  
`var greet = function() {};`

---

## 5️. Creation Phase & Execution Phase

Creation Phase  
→ Memory is allocated  
→ Variables are set to undefined  
→ Functions are stored entirely  

Execution Phase  
→ Code runs line by line  
→ Variables get assigned actual values  

---

## Quick Revision Questions (Hoisting)

1. Explain hoisting with var, let, and const.  
→ var is hoisted with undefined.  
→ let and const are hoisted but in TDZ.

2. Difference between function declaration and function expression hoisting?  
→ Function declaration is fully hoisted.  
→ Function expression is not.

3. Predict hoisting output.  
→ var gives undefined before assignment.  
→ let/const give ReferenceError before initialization.

4. What is creation phase and execution phase?  
→ Creation phase allocates memory.  
→ Execution phase runs the code.

## A.5️ Functions

---

## 1️. Function Declaration

Defined using `function` keyword.

Fully hoisted.

Example:
`function greet() { return "Hello"; }`

---

## 2️. Function Expression

Function stored inside a variable.

Not fully hoisted.

Example:
`const greet = function() { return "Hello"; };`

---

## 3️. Arrow Function

Shorter syntax using `=>`.

Does not have its own `this`.

Example:
`const greet = () => "Hello";`

---

## 4️. Parameters vs Arguments

Parameters  
→ Variables defined in function definition.

Arguments  
→ Actual values passed during function call.

Example:
`function add(a, b) { return a + b; }`
Here `a, b` are parameters.  
`add(2, 3)` → 2 and 3 are arguments.

---

## 5️. Default Parameters

Used when no argument is passed.

Example:
`function greet(name = "Guest") { return name; }`

---

## 6️. Rest Parameters

Collects multiple arguments into an array.

Example:
`function sum(...nums) { return nums; }`

---

## 7️. Spread Operator

Expands array/object values.

Example:
`const arr = [1,2,3];`
`console.log(...arr);`

---

## 8️. Return Statement

Used to send value back from function.

Once `return` executes, function stops.

---

## 9️. Function Scope vs Block Scope

Function Scope  
→ Variables declared with `var` inside function are accessible only inside that function.

Block Scope  
→ Variables declared with `let` and `const` inside `{}` are limited to that block.

---

## 10 IIFE (Immediately Invoked Function Expression)

Function that runs immediately after creation.

Example:
`(function() { console.log("IIFE"); })();`

Use Cases:
→ Avoid global variable pollution  
→ Create private scope  

---

## 1️1️. First-Class Functions

Functions can:
→ Be assigned to variables  
→ Be passed as arguments  
→ Be returned from other functions  

This makes them "first-class citizens".

---

## Quick Revision Questions (Functions)

1. Difference between function declaration, expression, and arrow function?  
→ Declaration is fully hoisted.  
→ Expression is stored in variable and not fully hoisted.  
→ Arrow function is shorter and does not have its own `this`.

2. What are default parameters and rest parameters?  
→ Default parameters provide fallback values.  
→ Rest parameters collect multiple arguments into an array.

3. Explain IIFE and its use cases.  
→ IIFE runs immediately after definition.  
→ Used to create private scope and avoid global pollution.

4. How do arrow functions differ from regular functions?  
→ Arrow functions do not have their own `this`.  
→ Cannot be used as constructors.

5. What does it mean that functions are first-class citizens?  
→ Functions can be treated like variables.

---

---

## A.6️ Higher-Order Functions

---

## 1️. Definition

A Higher-Order Function (HOF) is:

→ A function that takes another function as argument  
OR  
→ A function that returns another function  

Possible because functions are first-class citizens.

---

## 2️. Common Higher-Order Functions

`map()` → Transforms each array element  

`filter()` → Filters elements based on condition  

`reduce()` → Reduces array to single value  

`forEach()` → Iterates over array  



## 3. Custom Higher-Order Function Creation

A Higher-Order Function (HOF) takes a function as argument or returns a function.

Example:

`function calculate(a, b, operation) {`
`  return operation(a, b);`
`}`

`function add(x, y) { return x + y; }`

`calculate(5, 3, add);`

Here, `operation` is a callback function.

---

## 2️. Function Composition & Abstraction

Function Composition  
→ Combining multiple functions to build complex logic.

Example:
`const double = x => x * 2;`
`const square = x => x * x;`

You can combine them to reuse logic.

Abstraction  
→ Hiding complex logic inside reusable functions.

---

## 3️. Use Cases of Higher-Order Functions

→ Array manipulation (`map()`, `filter()`, `reduce()`)  
→ Event handlers  
→ Async operations (callbacks, promises)  
→ Code reusability  

---

##  Quick Revision Questions (Higher-Order Functions)

1. What is a higher-order function? Give 3 examples.  
→ A function that takes another function as argument or returns one.  
Examples: `map()`, `filter()`, `reduce()`.

2. How is map() a higher-order function?  
→ It takes a callback function as argument and applies it to each array element.

3. Create a custom higher-order function.  
→ Example:  
`function test(fn) { return fn(); }`

4. Why are higher-order functions important?  
→ They improve reusability, abstraction, cleaner and modular code.

---

---

## A.7️ Callback Functions

---

## 1️ Definition

A callback function is:

→ A function passed as an argument to another function.

---

## 2️. Synchronous Callbacks

Executed immediately.

Examples:
`map()`  
`filter()`  
`sort()`  

---

## 3️. Asynchronous Callbacks

Executed after delay or event.

Examples:
`setTimeout()`  
Event listeners  
API calls  

---

## 4️. Callback Execution Flow

1. Main function runs.
2. Callback is passed.
3. Callback executes when triggered.

---

## 5️. Passing Arguments to Callbacks

Example:

`function greet(name, callback) {`
`  callback(name);`
`}`

`greet("Hero", function(n) { console.log(n); });`

---

## 6️. Anonymous vs Named Callbacks

Anonymous  
→ Function without name.

Named  
→ Predefined function passed as argument.

---

## 7️. Callback Advantages

→ Code reusability  
→ Async handling  
→ Better separation of logic  

---

##  Quick Revision Questions (Callbacks)

1. What is a callback function and why is it used?  
→ A function passed as argument to handle reusable or async logic.

2. Difference between synchronous and asynchronous callbacks?  
→ Sync runs immediately.  
→ Async runs after event or delay.

3. How do you pass arguments to a callback?  
→ Call the callback inside main function and pass values.

4. Give 3 real-world examples of callbacks.  
→ setTimeout  
→ Button click event  
→ Fetch API response  

---

## A.8️ Objects


## 1️. Object Creation Methods

Object Literal  
`const obj = { name: "Hero" };`

Constructor Function  
`function Person(name) { this.name = name; }`

Object.create()  
`const obj = Object.create(proto);`

---

## 2️. Accessing Properties

Dot Notation  
`obj.name`

Bracket Notation  
`obj["name"]`

Bracket notation is useful for dynamic keys.

---

## 3️. Adding, Modifying & Deleting Properties

Add:
`obj.age = 25;`

Modify:
`obj.name = "Zero";`

Delete:
`delete obj.age;`

---

## 4️. Object Methods

Functions inside objects.

Example:
`const user = {`
`  greet: function() { return "Hi"; }`
`};`

---

## 5️. this Keyword in Objects

`this` refers to the object that calls the method.

Example:
`const user = {`
`  name: "Hero",`
`  greet() { return this.name; }`
`};`

---

## 6️. Object Destructuring

Extract values from objects.

Example:
`const { name } = obj;`

---

## 7️. Object Methods

`Object.keys(obj)` → Returns array of keys  
`Object.values(obj)` → Returns array of values  
`Object.entries(obj)` → Returns key-value pairs  

---

## 8️. Shallow Copy vs Deep Copy

Shallow Copy  
→ Copies only first level. Nested objects share reference.

Example:
`const copy = { ...obj };`

Deep Copy  
→ Copies all nested objects separately.

Example:
Using structured cloning or JSON methods.

---

## Quick Revision Questions (Objects)

1. Different ways to create objects?  
→ Literal, Constructor, Object.create()

2. How does delete operator work?  
→ Removes property from object.

3. Explain this keyword in object methods.  
→ Refers to the object that calls the method.

4. Difference between shallow and deep copy?  
→ Shallow copies only first level.  
→ Deep copy duplicates nested structures.

## A.9️ Arrays & Array Methods

---

## 1️. Array Creation & Initialization

Array Literal  
`const arr = [1, 2, 3, 4];`

Using Constructor  
`const arr = new Array(1, 2, 3);`

Arrays can store multiple values in a single variable.

---

## 2️. map()

Transforms each element of array.

Returns a **new array**.

Example:
`const nums = [1, 2, 3];`
`const doubled = nums.map(n => n * 2);`

Output → `[2, 4, 6]`

---

## 3️. filter()

Filters elements based on condition.

Returns a **new array**.

Example:
`const nums = [1, 2, 3, 4];`
`const even = nums.filter(n => n % 2 === 0);`

Output → `[2, 4]`

---

## 4️. reduce()

Reduces array to a **single value**.

Uses accumulator.

Example:
`const nums = [1, 2, 3, 4];`
`const sum = nums.reduce((acc, curr) => acc + curr, 0);`

Output → `10`

Here:  
`acc` → Accumulator  
`curr` → Current value  
`0` → Initial value  

---

## 5️. Chaining Array Methods

You can combine multiple methods.

Example:

`const result = [1,2,3,4]`
`.filter(n => n % 2 === 0)`
`.map(n => n * 2)`
`.reduce((acc, curr) => acc + curr, 0);`

This improves readability and avoids extra variables.

---

## 6️. forEach() vs map()

`forEach()`  
→ Executes function for each element  
→ Does NOT return new array  

`map()`  
→ Transforms each element  
→ Returns new array  

Use `map()` when you need a transformed array.

---

##  Quick Revision Questions

1. Explain map(), filter(), and reduce() with examples.  
→ map() transforms elements.  
→ filter() selects elements.  
→ reduce() combines elements into single value.

2. What is difference between map() and forEach()?  
→ map() returns new array.  
→ forEach() does not return anything.

3. How to chain map(), filter(), and reduce()?  
→ Call them one after another on same array.

4. What does reduce() return and how does accumulator work?  
→ It returns a single value.  
→ Accumulator stores previous result and updates on each iteration.

## A.10️ Destructuring


## 1️. Array Destructuring

Extract values from array into variables.

Example:

`const arr = [10, 20, 30];`
`const [a, b, c] = arr;`

Now:  
`a = 10`  
`b = 20`  
`c = 30`

---

## 2️. Object Destructuring

Extract values from object using property names.

Example:

`const user = { name: "Hero", age: 25 };`
`const { name, age } = user;`

Now:  
`name = "Hero"`  
`age = 25`

---

## 3️. Default Values in Destructuring

Used when value is undefined.

Example:

`const [a = 5] = [];`
`a = 5`

Object example:

`const { city = "Hyderabad" } = {};`

---

## 4️. Rest Operator in Destructuring

Collect remaining values into array/object.

Array Example:

`const [a, ...rest] = [1,2,3,4];`
`rest = [2,3,4]`

Object Example:

`const { name, ...others } = { name: "Hero", age: 25 };`

---

## 5️. Nested Destructuring

Used when array/object contains nested structures.

Example:

`const user = {`
`  name: "Hero",`
`  address: { city: "Delhi" }`
`};`

`const { address: { city } } = user;`

`city = "Delhi"`

---

## 6️. Renaming Variables During Destructuring

Used when you want different variable name.

Example:

`const user = { name: "Hero" };`
`const { name: userName } = user;`

Now:  
`userName = "Hero"`

---

## Quick Revision Questions

1. Difference between array and object destructuring?  
→ Array destructuring is based on position.  
→ Object destructuring is based on property names.

2. How to assign default values in destructuring?  
→ By using `=` while extracting.  
Example: `const { age = 18 } = obj;`

3. How to rename variables during object destructuring?  
→ By using colon syntax.  
Example: `{ name: userName }`

4. Explain nested destructuring.  
→ Extract values from nested objects or arrays in a single statement.
###  Nested Destructuring (Detailed Explanation)

## 1️. What is Nested Destructuring?

Nested destructuring means:

→ Extracting values from objects or arrays  
→ That are inside another object or array  

In simple words:  
When data is **inside another layer**, we destructure step-by-step in one statement.

---

## 2️. Nested Object Destructuring

Example:

`const user = {`
`  name: "Hero",`
`  address: {`
`    city: "Delhi",`
`    pincode: 500001`
`  }`
`};`

Normal way (without nested destructuring):

`const city = user.address.city;`

Nested destructuring way:

`const { address: { city } } = user;`

Now:  
`city = "Delhi"`

Explanation:

`address` → Go inside address object  
`{ city }` → Extract city from inside address  

---

## 3️. Nested Object with Renaming

Example:

`const { address: { city: userCity } } = user;`

Now:  
`userCity = "Delhi"`

Here:  
`city` property is renamed to `userCity`.

---

## 4️. Nested Array Destructuring

Example:

`const arr = [1, [2, 3], 4];`

Normal way:

`const second = arr[1][0];`

Nested destructuring:

`const [ , [a, b] ] = arr;`

Now:  
`a = 2`  
`b = 3`

Explanation:

First comma skips first element.  
`[a, b]` goes inside nested array.

---

## 5️. Nested Object + Default Value

Example:

`const user = {`
`  name: "Hero"`
`};`

`const { address: { city = "Hyderabad" } = {} } = user;`

Now:  
`city = "Hyderabad"`

Why?

Because `address` does not exist,  
so we give default empty object `{}`  
and then assign default value to `city`.

---

## 6️. Why Nested Destructuring is Useful?

→ Makes code shorter  
→ Avoids repeated property access  
→ Cleaner when handling API responses  
→ Very useful in React & modern JavaScript  

---


Nested destructuring means:

Accessing inner properties like this:

`object.property.innerProperty`

But writing it in single structured pattern:

`const { property: { innerProperty } } = object;`

OR

`const [ , [a, b] ] = array;`

It helps you directly extract deeply nested values easily.

## A.11️ Data Types & Data Comparison



## 1️. Primitive Data Types

Primitive types store single values and are immutable.

String  
→ Represents text  
Example: `"Hello"`

Number  
→ Represents numeric values  
Example: `10`, `3.14`

Boolean  
→ true or false  

Null  
→ Intentional empty value  

Undefined  
→ Variable declared but not assigned  

Symbol  
→ Unique identifier  

BigInt  
→ Large integers beyond Number limit  

---

## 2️. Reference Data Types

Reference types store collections or complex data.

Object  
→ Key-value pairs  

Array  
→ Ordered list of values  

Function  
→ Reusable block of code  

These are stored by reference (memory address).

---

## 3️. typeof Operator

Used to check data type.

Examples:

`typeof "Hello"` → "string"  
`typeof 10` → "number"  
`typeof true` → "boolean"  
`typeof undefined` → "undefined"  
`typeof null` → "object" (JavaScript bug)  
`typeof {}` → "object"  
`typeof []` → "object"  
`typeof function() {}` → "function"

---

## 4️. Type Coercion

Automatic or manual conversion of one data type to another.

### Implicit Coercion (Automatic)

Example:

`"5" + 2` → "52" (Number converted to String)  
`"5" - 2` → 3 (String converted to Number)

---

### Explicit Coercion (Manual)

Using functions like:

`Number("10")` → 10  
`String(10)` → "10"  
`Boolean(1)` → true  

---

## 5️. == vs ===

`==` (Loose Equality)  
→ Compares values after type conversion  

Example:
`5 == "5"` → true  

`===` (Strict Equality)  
→ Compares value AND data type  

Example:
`5 === "5"` → false  

---

## 6️. Truthy and Falsy Values

Falsy Values (treated as false):

`false`  
`0`  
`""` (empty string)  
`null`  
`undefined`  
`NaN`

Everything else is Truthy.

Example:

`if("Hello")` → true  
`if(0)` → false  

---

## 7️. NaN and isNaN()

NaN  
→ Means "Not a Number"  
Example: `0 / 0`

`isNaN()`  
→ Checks whether value is NaN  

Example:

`isNaN("abc")` → true  
`isNaN(10)` → false  

---

## Quick Revision Questions

1. List all primitive and reference data types.  
→ Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt.  
→ Reference: Object, Array, Function.

2. Difference between == and ===?  
→ == compares after type conversion.  
→ === compares value and type.

3. What are truthy and falsy values?  
→ Falsy values behave like false (0, "", null, undefined, NaN).  
→ All other values are truthy.

4. Explain type coercion with examples.  
→ Implicit: `"5" + 2` → "52"  
→ Explicit: `Number("10")` → 10



 


