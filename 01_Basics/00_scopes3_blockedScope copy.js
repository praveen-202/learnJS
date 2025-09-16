if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
  console.log(x, y, z); // ✅ 10 20 30
}
console.log(z); // ✅ 30 (var ignores block)
console.log(x); // ❌ ReferenceError
console.log(y); // ❌ ReferenceError
// 👉 var ignores block scope, but let and const respect block scope
