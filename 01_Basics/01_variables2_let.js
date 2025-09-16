if (true) {
  let y = 20;
  console.log(y); // ✅ 20
}
// console.log(y);   // ❌ ReferenceError (outside the block)

function test() {
  let z = 30;
  console.log(z); // ✅ 30
}
test();
// console.log(z);   // ❌ ReferenceError (outside the function)


// ==Reassignment is allowed=======
let count = 1;
count = 2;    // ✅ allowed
console.log(count); // 2
//==================================


//====Redeclaration is NOT allowed=======
// let num = 5;
// let num = 10;  // ❌ SyntaxError
// console.log(num); // ❌ (redeclaration not allowed)
//==================================  