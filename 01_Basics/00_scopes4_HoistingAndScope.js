var a;
console.log(a); // undefined (var hoisted)
a = 5;

console.log(b); // ❌ ReferenceError (TDZ)
let b = 10;

console.log(c); // ❌ ReferenceError (TDZ)
const c = 15;

// var is hoisted to the top of its function scope (initialized as undefined).

// let and const are hoisted to the top of their block,
// but are in a Temporal Dead Zone (TDZ) until the declaration line is reached.