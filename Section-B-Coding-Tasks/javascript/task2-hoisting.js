// Task 2.1: Predict and explain the output of the following code:

console.log(a);
/**
 *  Output: undefined
 *  Reason: 'var a' is hoisted to the top of its scope.
 *  During hoisting, only the declaration is moved up, NOT the value.
 *  So JavaScript treats it like:
 *  var a;
 *  console.log(a);
 *  Since 'a' is declared but not assigned yet, it prints undefined.
 */
var a = 10;
console.log(a);
/**
 *  Output: 10
 *  Reason: Now 'a' has been assigned the value 10.
 *  So it prints 10.
 */

console.log(b);
/**
 * Output: ReferenceError: Cannot access 'b' before initialization
 * Reason: 'let b' is also hoisted, BUT it stays in a "Temporal Dead Zone (TDZ)"
 * until the line where it is declared.
 * Unlike 'var', 'let' does NOT initialize with undefined.
 * So accessing 'b' before its declaration causes an error.
 */
let b = 20;

console.log(b);
/**
 * This line will NOT execute because the program already stopped
 * due to the ReferenceError above.
 * If the error didn’t happen, it would print 20.
 */

// -------------------------------------------Task 2.3: Demonstrating Temporal Dead Zone (TDZ)------------------------------------

// Example 1: Using let

console.log(q);

/**
 * ReferenceError: Cannot access 'q' before initialization
 *
 * Reason:
 * - 'let q' is hoisted to the top of its block.
 * - BUT it is NOT initialized with undefined.
 * - From the start of the scope until the line
 *   where 'q' is declared, it remains inside
 *   the Temporal Dead Zone (TDZ).
 * - Accessing it during this period causes a ReferenceError.
 */

let q = 78;

console.log(q);

/**
 *   Output: 78
 *
 *   Reason:
 * - Now 'q' has been declared and initialized.
 * - So it can be accessed normally.
 */

// Example 2: Using const

console.log(w);

/**
 *    ReferenceError: Cannot access 'w' before initialization
 *
 *    Reason:
 * - 'const w' is also hoisted.
 * -  Like 'let', it stays in the Temporal Dead Zone
 *    until its declaration line.
 * -  Accessing it before initialization throws a ReferenceError.
 */

const w = 100;

console.log(w);

/**
 *  Output: 100
 *
 * Reason:
 * - 'w' is now declared and initialized.
 * - 'const' must always be initialized at declaration time.
 * - After initialization, it can be accessed normally.
 */
