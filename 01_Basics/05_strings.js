//Strings in js

// 3 ways to create string:
// 1. single quotes - ("abc")
// 2. double quotes - ('abc')
// 3. backticks (template literals) - (`abc`)
// 4. String object - (new String("abc")) 

const name = "praveen";
const repoCount = 50;

console.log(name + " has " + repoCount + " repos") // concatenation way | outdatated syntax
console.log(`${name} has ${repoCount} repos`) // template literals/string poletion way; | modern way

// 4. String object - (new String("abc")) 
let namez = "Praveen";
let myName = new String("Praveen");

console.log(typeof namez);    // "string"
console.log(typeof myName);  // "object"
console.log(namez == myName); // true  (value comparison)
console.log(namez === myName);// false (type + value)

//note: primitive string is used more often than String object
//note: avoid using String object, it slows down the performance of your code and may lead to unexpected results.

const gameName = new String("chess");
console.log("Game Name: ", gameName);//Game Name:  [String: 'chess'] - Object String
console.log(typeof gameName);//object

//Auto- Generated
// String methods and properties inside String object
// 1. length property
console.log("String Length: ", gameName.length);//String Length:  5

// 2. toUpperCase() method
console.log("Uppercase: ", gameName.toUpperCase());//Uppercase:  CHESS

// 3. toLowerCase() method
console.log("Lowercase: ", gameName.toLowerCase());//Lowercase:  chess
// 4. charAt() method
console.log("Character at index 2: ", gameName.charAt(2));//Character at index 2:  e
// 5. indexOf() method
console.log("Index of 'e': ", gameName.indexOf('e'));//Index of 'e':  2
console.log("Index of 'z': ", gameName.indexOf('z'));//Index of 'z':  -1 (not found)
// 6. includes() method
console.log("Includes 'ch': ", gameName.includes('ch'));//Includes 'ch':  true
console.log("Includes 'zz': ", gameName.includes('zz'));//Includes 'zz':  false
// 7. replace() method
console.log("Replace 'ch' with 'CH': ", gameName.replace('ch', 'CH'));//Replace 'ch' with 'CH':  CHess
// 8. split() method
console.log("Split by 'e': ", gameName.split('e'));//Split by 'e':  [ String { 'ch' }, String { 'ss' } ]
// 9. trim() method
const greeting = new String("   Hello World!   ");
console.log("Trimmed String: ", greeting.trim());//Trimmed String:  Hello World!
// 10. slice() method
console.log("Slice(0,2): ", gameName.slice(0, 2));//Slice(0,2):  ch
// 11. substring() method
console.log("Substring(1,4): ", gameName.substring(1, 4));//Substring(1,4):  hes | 0c 1h 2e 3s 4s - inclusive of start index, exclusive of end index
// 12. toString() method
console.log("toString(): ", gameName.toString());//toString():  chess
// 13. valueOf() method
console.log("valueOf(): ", gameName.valueOf());//valueOf():  chess
// 14. concat() method
console.log("Concat with ' Game': ", gameName.concat(' Game'));//Concat with ' Game':  chess Game
// 15. startsWith() method
console.log("Starts with 'ch': ", gameName.startsWith('ch'));//Starts with 'ch':  true
console.log("Starts with 'Ch': ", gameName.startsWith('Ch'));//Starts with 'Ch':  false
// 16. endsWith() method
console.log("Ends with 'ss': ", gameName.endsWith('ss'));//Ends with 'ss':  true
console.log("Ends with 'sS': ", gameName.endsWith('sS'));//Ends with 'sS':  false
// 17. repeat() method
console.log("Repeat 3 times: ", gameName.repeat(3));//Repeat 3 times:  chesschesschess
// 18. padStart() method
console.log("Pad Start to length 10: ", gameName.padStart(10, '*'));//Pad Start to length 10:  *****chess
// 19. padEnd() method
console.log("Pad End to length 10: ", gameName.padEnd(10, '*'));//Pad End to length 10:  chess*****
// 20. match() method
const text = new String("The rain in SPAIN stays mainly in the plain");
const pattern = /ain/g;
console.log("Match 'ain': ", text.match(pattern));//Match 'ain':  [ 'ain', 'ain', 'ain' ] returns an array of all matches
// 21. search() method
console.log("Search 'SPAIN': ", text.search(/SPAIN/));//Search 'SPAIN':  12 returns the index of the first match
// 22. localeCompare() method
const a1 = new String("apple");
const b1 = new String("banana");
console.log("Locale Compare 'apple' with 'banana': ", a1.localeCompare(b1));//Locale Compare 'apple' with 'banana':  -1  | Locale Compare 'apple' with 'banana':  -1 (if a1 < b1, returns negative number; if a1 > b1, returns positive number; if a1 == b1, returns 0)
//comparision is based on unicode value of characters

// 23. charCodeAt() method
console.log("Char Code at index 0: ", gameName.charCodeAt(0));//Char Code at index 0:  99 (unicode value of 'c')
// 24. fromCharCode() method
console.log("From Char Code 99: ", String.fromCharCode(99));//From Char Code 99:  c
// 25. toLocaleLowerCase() method
console.log("To Locale Lower Case: ", gameName.toLocaleLowerCase());//To Locale Lower Case:  chess
// 26. toLocaleUpperCase() method
console.log("To Locale Upper Case: ", gameName.toLocaleUpperCase());//To Locale Upper Case:  CHESS
// diff. b/w toLocaleUpperCase() and toUpperCase() is that toLocaleUpperCase() considers the locale of the environment while converting to upper case. For example, in Turkish locale, 'i' is converted to 'İ' (dot on top) instead of 'I'. And toUpperCase() does not consider the locale and converts 'i' to 'I' in all locales(follows Standard English only).

// 27. lastIndexOf() method
console.log("Last Index of 's': ", gameName.lastIndexOf('s'));//Last Index of 's':  4
console.log("Last Index of 'z': ", gameName.lastIndexOf('z'));//Last Index of 'z':  -1 (not found)

//Auto- Generated Ended

//Understand this String as Object with key-value pairs
//key - 0,1,2,3,4 (index)
//value - c,h,e,s,s (characters at respective index)
/*
String {'WorldWar'}
0: "W"
1: "o"
2: "r"
3: "l"
4: "d"
5: "W"
6: "a"
7: "r"
length: 8
[[Prototype]]: String
anchor: ƒ anchor()at: ƒ at()big: ƒ big()blink: ƒ blink()bold: ƒ bold()charAt: ƒ charAt()charCodeAt: ƒ charCodeAt()codePointAt: ƒ codePointAt()concat: ƒ concat()constructor: ƒ String()endsWith: ƒ endsWith()fixed: ƒ fixed()fontcolor: ƒ fontcolor()fontsize: ƒ fontsize()includes: ƒ includes()indexOf: ƒ indexOf()isWellFormed: ƒ isWellFormed()italics: ƒ italics()lastIndexOf: ƒ lastIndexOf()length: 0link: ƒ link()localeCompare: ƒ localeCompare()match: ƒ match()matchAll: ƒ matchAll()normalize: ƒ normalize()padEnd: ƒ padEnd()padStart: ƒ padStart()repeat: ƒ repeat()replace: ƒ replace()replaceAll: ƒ replaceAll()search: ƒ search()slice: ƒ slice()small: ƒ small()split: ƒ split()startsWith: ƒ startsWith()strike: ƒ strike()sub: ƒ sub()substr: ƒ substr()substring: ƒ substring()sup: ƒ sup()toLocaleLowerCase: ƒ toLocaleLowerCase()toLocaleUpperCase: ƒ toLocaleUpperCase()toLowerCase: ƒ toLowerCase()toString: ƒ toString()toUpperCase: ƒ toUpperCase()toWellFormed: ƒ toWellFormed()trim: ƒ trim()trimEnd: ƒ trimEnd()trimLeft: ƒ trimStart()trimRight: ƒ trimEnd()trimStart: ƒ trimStart()valueOf: ƒ valueOf()length: 0name: "valueOf"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: Object[[PrimitiveValue]]: ""[[PrimitiveValue]]: "WorldWar"
 */
const word = new String("WorldWar");//String object

console.log(word[0]);//W
console.log(word.__proto__);//{} but it is not empty, it has all the methods and properties of String object
// to see all the methods and properties of String object we can use Object.getOwnPropertyNames() method
console.log(Object.getOwnPropertyNames(word.__proto__));

//some examples using string methods
console.log(word.length);//8
console.log(word.toUpperCase());//WORLDWAR
console.log(word.charAt(2));//r //note: it return small letter r , because in original string it is small letter r
console.log(word.indexOf('r'));//2 (first occurrence of r)
console.log(word.lastIndexOf('r'));//6 (last occurrence of r)

const word1 = new String('Hello-World');

let subStr = word1.substring(0, 5);//Hello
console.log(subStr);//inclusive of start index, exclusive of end index

let sliceStr = word1.slice(0, 5);//Hello
console.log(sliceStr);//inclusive of start index, exclusive of end index

//note: only slice() method supports negative index
console.log(word1.slice(-5));//orld (if we use negative index, it starts from the end of the string)
console.log(word1.slice(0, -6));//Hello (if we use negative index, it starts from the end of the string)
console.log("-> ", word1.slice(-5, 11));//World (if we use negative index, it starts from the end of the string


const word2 = new String("   Hello World!   ");
console.log(word2);//   Hello World!
console.log(word2.trim());//Hello World! (removes whitespace from both ends of the string)
console.log(word2.trimStart());//Hello World!   (removes whitespace from the start of the string)
console.log(word2.trimEnd());//   Hello World! (removes whitespace from the end of the string)


const url = "https://praveen.com/praveen%20kumar" //%20 is space in url encoding, browser automatically converts space to %20 in url

console.log(url.replace('%20', '-'))//https://praveen.com/praveen-kumar
// replace() method only replaces the first occurrence of the specified value
console.log(url.replaceAll('%20', '-'))//https://praveen.com/praveen-kumar
// replaceAll() method replaces all occurrences of the specified value
// note: replaceAll() method is not supported in some older browsers

// includes() method returns true if the string contains the specified value, otherwise false
console.log(url.includes('sundar'));//false
console.log(url.includes('kumar'));//true

// startsWith() method returns true if the string starts with the specified value, otherwise false
console.log(url.startsWith('https'));//true
console.log(url.startsWith('http'));//true
console.log(url.startsWith('com'));//false

// endsWith() method returns true if the string ends with the specified value, otherwise false
console.log(url.endsWith('kumar'));//true
console.log(url.endsWith('praveen'));//false
console.log(url.endsWith('.com'));//false
console.log(url.endsWith('.com/praveen%20kumar'));//true

let word3 = new String("Hello-world-JavaScript");

console.log(word3.split("-"));//[ String { 'Hello' }, String { 'world' }, String { 'JavaScript' } ] 
// split() method splits a string into an array of substrings, and returns the new array
// note: split() method does not change the original string

console.log(word3.split("-", 2))//[ String { 'Hello' }, String { 'world' } ]
// second parameter is optional, it specifies the number of splits to be made







// repeat() method returns a new string with a specified number of copies of the string it was called on
console.log("Hello ".repeat(3));//Hello Hello Hello
console.log("abc".repeat(0));//"" (empty string)
console.log("abc".repeat(1));//abc
console.log("abc".repeat(2));//abcabc
console.log("abc".repeat(2.6));//abcabc (if the number is a decimal, it is rounded down to the nearest whole number)
// console.log("abc".repeat(-2));//RangeError: Invalid count value (if the number is negative, it throws a RangeError)
console.log("abc".repeat(NaN));//"" (if the number is NaN, it is treated as 0)  
// console.log("abc".repeat(Infinity));//RangeError: Invalid count value (if the number is Infinity, it throws a RangeError)
// console.log("abc".repeat(-Infinity));//RangeError: Invalid count value (if the number is -Infinity, it throws a RangeError)
console.log("abc".repeat());//"" (if the number is not provided, it is treated as 0)
console.log("abc".repeat(undefined));//"" (if the number is undefined, it is treated as 0)  


console.log("==========================");
//=======================
//  const str1 = "hello world python and java"

//  console.log(str1.split(" "))


//  const strPrim = String(1)
//  console.log(strPrim);
//  console.log(typeof strPrim);

//  const strPrimi = String(true)
//  console.log(strPrimi);
//  console.log(`typeof: `,typeof strPrimi)


//  const strPrim2 = "foo"
//  const strObj = new String(strPrim2)
//  console.log(strObj);

//  console.log(typeof strPrim2)
//  console.log(typeof strObj)

// //  creating String-----------------------------
// const string1 = "A string primitive";
// const string2 = 'Also a string primitive';
// const string3 = `Yet another string primitive`

// //length property-------------------
// console.log("mango".length);//5

// let len = string1.length
// console.log(len)//18

// //Concatination using diff. ways:----------
// // 1. + operator
// console.log("My"+" String");//My String

// // 2. shorthand operator(+=)
// let mystring = 'alpha'
// mystring += `bet`
// console.log(mystring);//alphabet

//Character access charAt()----------------------
let addr = "cat".charAt(1)
console.log(addr)//a

console.log("Dog"[0])//D
console.log(`=>`, "Dog".charAt[0])//D

//comparing
const a = "a"
const b = "b"
console.log(a < b)//true
console.log(a > b)//flase

let str1 = "praveen"
let str2 = "Praveen"

function areEqualCaseInsensitive(str1, str2) {
  // return str1.toUpperCase() === str2.toUpperCase();//true
  return str1 === str2//false
}


console.log(`=> `, areEqualCaseInsensitive(str1, str2));


//indexof method----------------------------
// const paragraph = "A dog is dog!";

// const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);
// console.log(indexOfFirst+1)

// console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// // Expected output: "The index of the first "dog" is 15"

// console.log(
//   `The index of the second "${searchTerm}" is ${paragraph.indexOf(
//     searchTerm,
//     indexOfFirst + 1,
//   )}`,
// );
// // Expected output: "The index of the second "dog" is 38"

