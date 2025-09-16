let i = 10//global scoped/ intro. in ES6+
const j = 20//global scoped/ intro. in ES6+
var k = 30 //older

// console.log(i);
// console.log(j);
// console.log(k);

// const { on } = require("nodemon")

// const b = 30
// var c = 300
// let a = 100


if (true) {
  let a = 10
  const b = 20
  var c = 12000 //here it act different, it can be accessible outside the if(){scope}

}


// console.log(a)//will throw error cause 'let' is also known as block scope, it follow block scopes and can't accessible to outside the scope

// console.log(b)//const also can't accessible outside the scope

console.log("var c : ", c)//var is older datatype and it act as a globle variable beyond scopes

//const is constant value it can't be reinitialize------
// const ab = 101
// console.log(ab);
// ab = 202
// console.log(ab);


//function scope---------------------------------

function one() {
  const username = "Praveen"
  function two() {
    const website = "youtube"
    console.log(username);

  }
  // console.log(website);//scope error
  two()
}
one()

// -------checking scope-----------
if (true) {
  const username = "Praveen's "
  if (username === "Praveen's ") {
    const website = "youTube"
    console.log(username + website)
  }
  // console.log(website); //out of scope 
}
// console.log(username); //out of scope

// --------------------------
//diff.
//this is called function

//here we calling function before declaration and it work, due to hoisting in JS
console.log("addOne: ", addOne(5));

function addOne(num) {
  return num + 1
}



//diff.
//this is sometime called function expression


console.log("addTwo: ",addTwo(10))//error: Cannot access 'addTwo' before initialization

//for function Expression is giving error  
const addTwo = function (num1) {
  return num1+2
}


