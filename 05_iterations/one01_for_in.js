//for..in
// The for...in loop iterates over the enumerable properties of an object.
//Object Iteration
const obj = {
  name: "Praveen",
  age: 26,
  city: "Bangalore"
};

for (let key in obj) {
  console.log(key, ":", obj[key]);
}

//Array Iteration
const arr = ["apple", "banana", "cherry", 23];

for (let i in arr) {
  console.log(i, ":", arr[i]);
}

//String Iteration
const str = "Hello";
for (let i in str) {
  console.log(i, ":", str[i]);
}

// Key Points:
//-------------
// for...in iterates over enumerable properties
// Works for objects, arrays, and strings
// Iterates over keys (property names or indices)

// For objects:
//-------------

// Returns property names (keys)
// Order is not guaranteed

// For arrays:
//-------------
// Returns indices as strings
// Not recommended for arrays (use for...of instead)

// For strings:
//----------------
// Returns character indices
// Treats string as array-like object

// ⚠️ Warning:
//-------------
// Don't use for...in for arrays if order matters
// Only iterates over enumerable properties
// Includes properties from prototype chain

// Best Practices:
//-------------------
// Use for...in for objects
// Use for...of for arrays
// Use Object.keys() or Object.entries() for more control



