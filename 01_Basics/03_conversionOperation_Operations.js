//***********Operations********************** */

let value = 3;
let negValue = -value;
console.log(negValue); // -3

console.log(2 + 3); // 5
console.log(2 - 3); // -1
console.log(2 * 3); // 6
console.log(2 / 3); // 0.6666666666666666
console.log(2 % 3); // 2 (remainder)
console.log(2 ** 3); // 8 (2 to the power of 3)   

console.log("------------------------------");
let st1 = "Hello";
let st2 = " World";
let st3 = st1 + st2;
console.log(st3); // Hello World

// JavaScript evaluates expressions from left to right
// Key Rules:
// 1. When a string is involved in + operation:
//  -> If any operand is string, + performs concatenation
//  -> All other operands are converted to strings

//2. For numeric operations:

// -> Numbers are added normally until a string is encountered
// -> After a string, everything becomes concatenation

console.log("1" + 2); // "12" (string)
console.log(1 + "2"); // "12" (string)
console.log("1" + 2 + 2); // "122" (string)
console.log(1 + 2 + "2"); // "32" (string)   
console.log(1 + 2 + "2"); // "32" (string)
console.log(1 + 6.10 + NaN + false + "2"); // "NaN2" (string)
console.log(1 + 6.10 + NaN + true + "2"); // "NaN2" (string)
console.log(1 + 6.10 + NaN + 2); // NaN (number)
console.log(1 + 6.10 + NaN + null); // NaN (number)
console.log(1 + 6.10 + NaN + undefined); // NaN (number)
console.log(1 + 6.10 + NaN + NaN); // NaN (number)
console.log(1 + 6.10 + NaN + "hello");  // "NaNhello" (string)
console.log(1 + 6.10 + NaN + ""); // "NaN" (string)


console.log("1" + (2 + 2)); // "14" (string)
console.log(1 + (2 + "2")); // "122" (string)

//tricky cases
console.log(true);
console.log(+true); // 1 (number)
console.log(-true); // -1 (number)
console.log(false); // false (boolean)
console.log(+false);  // 0 (number)
console.log(-false); // -0 (number)
// console.log(!true); // false (boolean)
// console.log(!false); // true (boolean)

// console.log(true+); //error


console.log("------------------------------");

console.log("1" + (2 - "2")); // "10" (string)
console.log("1" + (2 * "2")); // "14" (string)
console.log("1" + (2 / "2")); // "12" (string)
console.log("1" + (2 % "2")); // "10" (string)
console.log("1" + (2 ** "2")); // "15" (string) 


console.log("------------------------------");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3); // 4 4 4 

console.log("------------------------------");
let gameCounter = 100;
gameCounter++; // increment by 1
++gameCounter; // increment by 1
console.log(gameCounter); // 102

