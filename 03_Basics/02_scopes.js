// const { on } = require("nodemon")

const b = 30
var c = 300
let a = 100
if(true){
  let a = 10
  const b = 20
  var c = 12;

}


// console.log(a)//let is also known as block scope, it follow block scopes

// console.log(b)

// console.log(c)//var is older datatype and it act as a globle variable 

//const is constant value it can't be reinitialize------
// const ab = 101
// console.log(ab);
// ab = 202
// console.log(ab);


//function scope---------------------------------

function one(){
  const username = "Praveen"
  function two(){
    const website = "youtube"
    console.log(username);
    
  }
  // console.log(website);//scope error
  two()
}

one()
// -------checking scope
if(true){
  const username = "PraveenK"
  if(username==="PraveenK"){
    const website = "youTube"
    console.log(username+website)
  }
  // console.log(website); 
}
// console.log(username);

// --------------------------
//diff.
//this is called function
function addone(num){
  return num+1
}

addone(5)

//diff.
//this is sometime called function expression
const twoSum = function(num1 , num2){
  return num1+num2
}

twoSum(3,4)
console.log(twoSum(2,3))