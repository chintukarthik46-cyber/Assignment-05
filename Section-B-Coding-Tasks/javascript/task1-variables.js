//Task 2.2: Create a function that demonstrates the difference between var, let, and const in loops.

console.log("-------using var-------");

function variable() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
      /**
       *  Output: 3 3 3
       *  Reason:
       * 'var' is function-scoped, NOT block-scoped.
       *  There is only ONE shared variable 'i'.
       *  By the time setTimeout runs, loop has finished,
       *  and i becomes 3.
       */
    }, 1000);
  }

  console.log("---- Using let ----");

  for (let j = 0; j < 3; j++) {
    setTimeout(function () {
      console.log(j);
      /**
       *  Output: 0 1 2
       * Reason:
       * 'let' is block-scoped.
       * Each loop iteration gets a NEW copy of 'j'.
       * So setTimeout remembers the correct value.
       */
    }, 100);
  }

  console.log("---- Using const ----");

  for (let k = 0; k < 3; k++) {
    const value = k;
    setTimeout(function () {
      console.log(value);
      /**
       * Output: 0 1 2
       * Reason:
       * 'const' must be assigned during declaration.
       * We cannot do: for (const k = 0; ...)
       * because const cannot be reassigned.
       * So we create a new const inside each iteration.
       */
    }, 100);
  }
}
