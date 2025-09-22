// Symbol :---------------------
// Symbol() is a primitive data type introduced in ES6 (ECMAScript 2015).
// It is used to create unique and immutable identifiers, which are often used as object property keys to avoid naming conflicts.
const x4 = Symbol();
const y4 = Symbol();
console.log("Symobol(): ", x4 === y4); // false

const MY_KEY = Symbol();
const obj = {
  [MY_KEY]: "This property is unique"//
};
console.log(obj[MY_KEY]); // "This property is unique"

// Square Bracket [] Notation is Used When:
// 1.Using Symbols as Keys: the above example with Symbol keys.
// 2.Dynamic Property Names: When the property name is stored in a variable or needs to be computed at runtime.
const propertyName = "age";
const obj2 = {
  [propertyName]: 30
};
console.log(obj2.age); // 30  

// 3.Property Names with Special Characters: If a property name contains spaces, hyphens, or other special characters that are not valid in dot notation.
const obj3 = {
  ["first-name"]: "John",   // Property with hyphen
  ["@email"]: "john@example.com" // Property with @
};
console.log(obj3["first-name"]); // "John"
console.log(obj3["@email"]); // "john@example.com"

// Why [MY_KEY] is Needed:
// Symbols can't be represented as string literals
// Without brackets, JavaScript would use the string "MY_KEY" as the key instead of the Symbol value
// The brackets tell JavaScript to evaluate the expression inside them and use that value as the property key
// This is why you see [MY_KEY] instead of just MY_KEY in Symbol property definitions.

const s = Symbol("id");
console.log(`My symbol is ${s.toString()}`); // ✅
console.log("My symbol is ", s.toString()); // ✅
console.log("My symbol is ", [s]); // ✅
// console.log("My symbol is " + s); // ❌ TypeError
// console.log(`My symbol is ${s}`); // ❌ TypeError