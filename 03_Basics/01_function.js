//Basic fun.-------
function sayMyName() {
  console.log("P")
  console.log("R")
  console.log("A")
  console.log("V")
  console.log("E")
  console.log("E")
  console.log("N")
}

sayMyName() //fun. call 

// sayMyName //<- this is reference of fun. , it tells there's a function named sayMyName, if you print it returns or print nothing

//fun. with return keyword-------
function addTwoNum(num1, num2) {//here num1 nd num2 are called parametersṇ
  return num1 + num2;
}
const result = addTwoNum(5, 6)//here 5 nd 6 are called arguments
// console.log(addTwoNum(2,null));
console.log(result);

//param. default value---------
function nameOf(name = "jhon"){
  return `Hello, ${name}`;
}
console.log(nameOf());//if user not send any value function use the default value 

// console.log(nameOf("praveen"));

// Rest or Spread operator---------------------
function calculateCartPrice(val1, val2, ...num1) {//here val1 took 1st value, val2 took 2nd value and rest storedas array in num1
  console.log(val1, val2)
  return num1

}

console.log(calculateCartPrice(200, 400, 500,600));


//Passing Object in Function---------------
const user = {
  username: "Praveen Kumar",
  emp_id: 101
}

function handleObject(anyObject) {
  console.log(`User name is ${anyObject.username} and Emp Id is ${anyObject.emp_id}===`)
}

handleObject(user)
// handleObject(user) - we can directly pass the object into the method call, no need to create a particular object

//we can pass direct object in 
handleObject({
  username: "Ramesh",
  emp_id: 201
})
//---------------end---------------

//---------Passing Array in Function------------
const arr = [100, 200, 300, 400]

function returnSecondValue(getArr) {
  return getArr[1]
}

// const num = returnSecondValue(arr)
console.log(returnSecondValue(arr));

const num = returnSecondValue([200, 400, 600])
console.log(`The second position os Array is ${num}`)
//--------------------------------------------------




