//Prerequesit to understand the arrow function-------------->>

//THIS KEYWORD===--------
const user = {
  product: "Bottle",
  price: 100,
  welcomeMessage: function () {
    console.log(`${this.product}, It's madeup of Plastic`)
    console.log("this=>> \n",this) //this always reffers current contaxt(property of object), which is right now the Object(inside Object) Context user
  } 
}
user.welcomeMessage()
// user.product = "Soap"
// user.welcomeMessage()

// console.log(this)//return this {}
//if we print 'this' inside chrome we will get Windows Object , which hold many function, ...etc

//-------------------------------------------------->>

//-------if we print 'this' inside regular function---------
// let username = "Mangru=========="
function chai() {
  let username = "praveen"
  console.log(this.username)//op: undefine ::IMPORTANT -   
  console.log(this)//op: Object global like:-> global: [Circular *1],...
  /*
    Explanation:
    - `this` in a regular function refers to the global object by default (non-strict mode).
    - Inside `chai()`, `username` is a local variable, not a property of `this`.
    - So `this.username` is actually `undefined`.
    - If `chai` was called as a method of an object (like obj.chai()), then `this` would refer to that object.
  */

}
chai()

// NOTE:: "this always depends on how a function is called, and it refers to the object that called the function — or the global object if no object is involved."

//when we call 'this' keyword
console.log(this);//OP: {}


//We will check in another types of functions-------------
const coffee = function() {
  let username = "Praveen kk"
  console.log("THIS: ",this)// Object global like: global: [Circular *1],...
  console.log(this.username)//undefined

}

coffee()

// -----
const coffe = () => {
  let username = "Praveen kk"
  console.log("THIS:: ",this)//OP: {}
  console.log(this.username)//undefined

}

coffe()



// Basic Arrow function---=======>--------------=====------------------
const addTwo = (num1, num2) => {
  return num1 + num2
}
// console.log(addTwo(2,3))

//Arrow function ----
//| implicit return: If the function body is a single expression, you can skip the curly braces and return keyword, and the expression's result will be returned implicitly.

// const addTwoNo = (num1, num2) => num1+num2 //num1+num2 we can skip return if not using curly brekets{}
//or
const addTwoNo = (num1, num2) => (num1 + num2)//if the (num1 + num2) part we wrap with () not need to use 'return' keyword
console.log(addTwoNo(2, 6))

//------------------------
//How to return object throught Arrow Function explicitly--------------
const twoNoAdd = (n1, n2) => {
  return { SumIs: n1 + n2 };
}
console.log(twoNoAdd(10, 20))

// or in more implicit way
const addTwoNos = (num1, num2) => num1 + num2

//if you returning a object in arrow function, you have to must give Parentheses breakets to return it implicity(without return keyword)
const getName = (fname, lname) => ({ Name: `${fname} ${lname}` })// ->() imp.
console.log(getName("Praveen", "Kumar"));//op: { Name: 'Praveen Kumar' }


const myArray = ["Apple", "Banana", "Moter", "Waves", "Dog"]

//we can write classic function
myArray.forEach(function (element, index) {
  console.log(`Element ${element} Index: ${index}`);
});

//we can write arrow function
myArray.forEach((element, index) => { console.log(`Element: ${element} Index: ${index}`) });

