console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
console.log(2 === 2); // trues
console.log(2 == "2"); // true (value)
console.log(2 === "2"); // false (value + type)
console.log(2 !== "2"); // true (value + type)  
console.log(2 != "2"); // false (value)
console.log(2 !== 2); // false (value + type) 

console.log("------------------------------");

console.log("2" > 1); // true
console.log("01" == 1); // true (value)
console.log("01" === 1); // false (value + type)
console.log("2" > 1); // true
console.log("2" < 1); // false
console.log("2" >= 1); // true
console.log("2" <= 1); // false
console.log("2" != 1); // true (value)
console.log("2" !== 1); // true (value + type)
console.log("2" == 2); // true (value)
console.log("2" === 2); // false (value + type)
console.log("2" != 2); // false (value)
console.log("2" !== 2); // true (value + type)  

console.log("IMP------------------------------");
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true 
// - here reason is that an equality check (== or comparison check (>=, <=,>,<) work differently.
//Comparisons convert null to a number, treating it as 0.
//That's why null >= 0 is true, but null > 0 is false.
//- But equality check (==) does not convert null to a number. 
//Instead, it considers null equal only to undefined and no other value.
//That's why null == 0 is false.
console.log("->",null == undefined); // true
console.log("->",null === undefined); // false (different types) 

console.log(null < 0); // false
console.log(null <= 0); // true
console.log(null != 0); // true
console.log(null !== 0); // true  
console.log(null == null); // true
console.log(null === null); // true

console.log("------------------------------");
console.log(undefined == 0); // false
console.log(undefined === 0); // false (different types)
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0);

console.log("----Strict Check--------------------------");

