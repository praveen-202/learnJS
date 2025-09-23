// The for...of loop iterates over iterable objects like arrays, strings, and other data structures
//And it loop through the 'values' of the iterable object
//doesn't work directly with plain objects because they are not iterable by default.


// 1. Arrays
const arr = ["apple", "banana", "cherry"];

for (const fruit of arr) {
    console.log(fruit);
}

//String
const str = "Hello";

for(let char of str){
  console.log(char,"->", typeof char);
}

//Sets objects
const mySet = new Set([1, 2, 3, 4, 5]);

for(const num of mySet){
  console.log(num);
}

//Maps objects
const myMap = new Map([
  ['name', 'Alice'],
  ['age', 30],
  ['city', 'New York']
]);

for(const [key, value] of myMap){
  console.log(`${key}: ${value}`);
}

/**
 * Key Points:
 * ------------
1. Works with iterable objects
2. Provides direct access to values(not  indices)
3. Simpler syntax than traditional for loops
4. Cannot modify the collection during iteration
5. Better performance than for...in for arrays

Best Use Cases:
-------------
Arrays
Strings
Sets
Maps
Any custom object that implements the iterable protocol

Not Suitable For:
----------------
Plain objects (use for...in or Object.entries() instead)
When you need the index/key (use traditional for loop or forEach)
 * 
 */