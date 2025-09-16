if (true) {
  var x = 10;
}
console.log(x); // ✅ 10 (even though x was inside the block!)
// var ignores block scope, but let and const respect block scope

//==but var follows function scope only=======
function example() {
  var y = 20;
  console.log(y); // ✅ 20 (inside function)
}

example();
// console.log(y); // ❌ ReferenceError (outside function)
//=========================================

//====Redeclaration is allowed=======
var a = 5;
var a = 10;   // ✅ allowed (but confusing)
console.log(a); // 10
//==================================