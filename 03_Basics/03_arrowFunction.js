//Example of Object
const user = {
  product: "Bottle",
  price: 100,
  welcomeMessage: function(){
    console.log(`${this.product}, It's madeup of Plastic`)
    console.log(this) //this always reffers Object contaxt|
  }
}
// user.welcomeMessage()
// user.product = "Soap"
// user.welcomeMessage()

// console.log(this)//{}

//-------------this
function chai(){
  // let username = "praveen"
  // console.log(this.username)//op: undefine
  console.log(this)//huge option
}
// chai()

//---------------------- -

const coffe = () => {
  let username = "Praveen kk"
  // console.log(this)//{}
  // console.log(this.username)//undefined

}

// coffe()

//self practice
// const Moon = {
//   product:"Mug",
//   price:100,
//   bill: function(){
//     console.log("Object's")
//     console.log(this)
//     return 0
//   }
// }
// // console.log(Moon.bill())
// Moon.bill()


// Basic Arrow function---=======>--------------
const addTwo = (num1, num2) =>{
  return num1+num2
}
// console.log(addTwo(2,3))

//Arrow function ----
//| implicit return: If the function body is a single expression, you can skip the curly braces and return keyword, and the expression's result will be returned implicitly.

// const addTwoNo = (num1, num2) => num1+num2
//or
const addTwoNo = (num1, num2) => (num1+num2)
console.log(addTwoNo(2,6))

//------------------------
//How to return object throught Arrow Function explicitly--------------
const twoNoAdd = (n1, n2) => {
    return {SumIs : n1+n2};
}
console.log(twoNoAdd(10,20))

// or in more implicit way
const addTwoNos = (num1, num2) => num1+num2 

//if you returning a object in arrow function, you have to must give breakets to return it implicity
const getName = (fname,lname) => ({Name: `${fname} ${lname}`})
console.log(getName("Praveen", "Kumar"));//{ Name: 'Praveen Kumar' }


const myArray = [2, 3, 4, 6 ,5 ]

//we can write classic function
myArray.forEach(function(element, index){
  console.log(`Element ${element} Index: ${index}` );
});

//we can write arrow function
myArray.forEach((element, index) => {console.log(`Element: ${element} Index: ${index}`)});



