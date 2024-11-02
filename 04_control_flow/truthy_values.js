const userName = "pk@gmail.com"//true
// const userName = ""//false
// const userName = []//true

if(userName){
  console.log("Got user email");
}else{
  console.log("Don't have user email");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){},

//way to check array 
// if(userName.length === 0){
//   console.log("Array is Empty")
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

let a = (false==0)
console.log(a);
let b = (false=='')
console.log(b);
let c = (0=='')
console.log(c);

//Nullish Coalescing Operator (??) : null undefined
// to check the safty

let val1 ;
val1 = 5 ?? 10;
console.log(val1)//5
val1 = null ?? 10
console.log(val1);
val1 = undefined ?? 13
console.log(val1);

val1 = null ?? 10 ?? 20//get the first value except null and undefined
console.log(val1)

// Terniary Operator
// syntax: condition ? true : flase

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")