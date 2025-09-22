// Strings================================
let color = "Yellow";
let lastName = "Johnson";
console.log(color, lastName);

// Numbers================================
let length = 16;
let weight = 7.5;
console.log(length, weight);

let x5 = 123e5;  // 12300000
let y5 = 123e-5; // 0.00123
console.log(x5, y5);

// Special Numbers
let z = Infinity;
let z1 = -Infinity;
let z2 = NaN; // Not a Number
console.log(z, z1, z2);

// Bigint================================
// Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers, So we use BigInt
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)
console.log(x, y);

// Booleans================================
let x1 = true;
let y1 = false;

// Object
const person = { firstName: "John", lastName: "Doe" };

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let x2;
let y2;
console.log(x2, y2); // undefined
console.log(typeof x2); // undefined



// Null
let x3 = null;
let y3 = null;
console.log(x3, y3);
console.log(typeof x3); // object (this is a known JavaScript quirk(strange behavior))

// Symbol
const x4 = Symbol();              // Create unique symbol
const MY_KEY = Symbol();          // Symbol as property key
console.log("Symbol: ", x4 === MY_KEY); // false


const obj = {
  [MY_KEY]: "value"            // Using Symbol as object property key
};
console.log(x4, obj[MY_KEY]); // Logs the symbol and the value associated with MY_KEY



// Difference between String primitive and String object
const strPrim = String(1)
console.log("->" + strPrim);
console.log(typeof strPrim);
const strPrimi = String(true)
console.log(strPrimi);
console.log(`typeof: `, typeof strPrimi)

const strPrim2 = "foo"
const strObj = new String(strPrim2)
console.log(strObj);
console.log(typeof strPrim2)
console.log(typeof strObj)  