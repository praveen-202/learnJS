// let score = 33;

//string to number conversion------

// let score = "33";

//----string to number conversion---------

// let score = "33abc";//NaN
// let score = "Praveen";//NaN
// let score = "33.44";//33.44
// let score = "33";//33
// let score = " ";//0
// let score = "";//0 (empty string)  
// let score = "0";//0
// let score = "0033";//33
// let score = "  33  ";//33 (leading/trailing spaces are ignored)
let score = "  33.44  ";//33.44 (leading/trailing spaces are ignored)
// let score = true; //1
// let score = false;//0
// let score = null;//0
// let scope = undefined;//NaN

console.log(typeof score); // number
console.log(typeof (score)); // number

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//----null to number conversion---------

let score1 = null;
console.log(typeof score1); // object
console.log(typeof (score1)); // object

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1); // 0

//----undefined to number conversion

let score2 = null;
console.log(typeof score2); // object
console.log(typeof (score2)); // object

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2); // 0

console.log("--------------------------------------");

// diff. types into boolean conversion-------------------------------------

// let isLoggedIn = 1; // truthy value
// let isLoggedIn = 0; // falsy value
let isLoggedIn = "praveen"; // truthy value
// let isLoggedIn = ""; // falsy value
// let isLoggedIn = null; // falsy value
// let isLoggedIn = undefined; // falsy value
// let isLoggedIn = NaN; // falsy value

console.log(typeof isLoggedIn); // number

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);  // boolean

console.log("--------------------------------------");

// diff. types into String conversion-------------------------------------

// let some = 123;// number -> string
let some = 123.45; // number -> string
// let some = 0; // number -> string
// let some = -123; // number -> string
// let some = null;//object -> string
// let some = undefined; // undefined -> string
// let some = NaN; // number -> string
// let some = true; // boolean -> string
// let some = false; // boolean -> string

console.log(typeof some);
let valueInString = String(some);
console.log(valueInString);
console.log(typeof valueInString);

console.log("--------------------------------------");

let first = "123.34";
let second = parseFloat(first);
console.log(second);

// Here are the main JavaScript constructors for type conversion:

// Number-related Constructors-------------------------------
Number("12.34")     // 12.34 (number)

// these are functions not constructors
parseFloat("12.34") // 12.34 (number)
parseInt("12.34")   // 12 (number, removes decimal)

// String-related Constructor--------------------------------
String(123.45)      // "123.45"
String(true)        // "true"
String(null)        // "null"

// Boolean-related Constructor-------------------------------
Boolean(1)          // true
Boolean("hello")    // true
Boolean("")         // false
Boolean(0)          // false

// Object-related Constructor--------------------------------
Object("hello")     // String {"hello"}
Object(123)         // Number {123}
Object(true)        // Boolean {true}
// Note: Using Object() on null or undefined will throw a TypeError

// BigInt-related Constructor--------------------------------
BigInt("123")       // 123n
BigInt(123)         // 123n
// Note: BigInt doesn't work with decimals
// BigInt(12.34)     // ❌ Throws TypeError
// BigInt("12.34")   // ❌ Throws SyntaxError
// BigInt(null)      // ❌ Throws TypeError
// BigInt(undefined) // ❌ Throws TypeError
// BigInt(true)      // ❌ Throws TypeError
// BigInt(false)     // ❌ Throws TypeError
// BigInt(NaN)       // ❌ Throws TypeError
// BigInt(Infinity)  // ❌ Throws TypeError
// BigInt(-Infinity) // ❌ Throws TypeError
// Note: BigInt can only convert whole numbers (integers) and cannot handle fractional values or non-numeric types.
// BigInt can only convert values that represent whole numbers, either as numeric literals or strings that can be parsed as integers.
// Attempting to convert other types or non-integer values will result in errors.
// Examples of invalid conversions with BigInt:
// BigInt(12.34)     // ❌ Throws TypeError
// BigInt("12.34")   // ❌ Throws SyntaxError




