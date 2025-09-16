function greet() {
  var name = "Praveen";
  const age = 24;
  let city = "Bangalore";
  console.log(name); // ✅ Accessible inside
  console.log(age);  // ✅ Accessible inside
  console.log(city); // ✅ Accessible inside
}
greet();
// console.log(name);   // ❌ ReferenceError (outside function)
// console.log(age);    // ❌ ReferenceError (outside function)
// console.log(city);   // ❌ ReferenceError (outside function)

// 👉 var, let, and const all respect function scope.