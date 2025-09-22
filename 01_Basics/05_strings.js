let str = 'praveen' + " hello world" + ` welcome to js`

console.log(str);

const url = "https://praveen.com/praveen%20kumar"

console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'));
console.log(url.includes('kumar'));


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

//comparing
const a = "a"
const b = "b"
console.log(a < b)//true
console.log(a > b)//flase

let str1 = "praveen"
let str2 = "Praveen"

function areEqualCaseInsensitive(str1, str2) {
  // return str1.toUpperCase() === str2.toUpperCase();
  return str1 === str2
}

console.log(areEqualCaseInsensitive(str1, str2)
);


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

