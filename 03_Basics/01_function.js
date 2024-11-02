// Rest or Spread operator---------------------
function calculateCartPrice(val1, val2, ...num1){
  console.log(val1+val2)
  return num1

}

// console.log(calculateCartPrice(200, 400, 500));


//---------Passing Object in Function---------------
const user = {
  username: "Praveen Kumar",
  emp_id: 101
}

function handleObject(anyObject){
  console.log(`User name is ${anyObject.username} and Emp Id is ${anyObject.emp_id}`)
}

handleObject(user)
// handleObject(user) - we can directly pass the object into the method call, no need to create a particular object

handleObject({
  username: "Ramesh",
  emp_id:201
})
//---------------end---------------

//---------Passing Array in Function------------
const arr = [100,200,300,400]

function returnSecondValue(getArr){
  return getArr[1]
}

// const num = returnSecondValue(arr)
const num = returnSecondValue([200,400,600])
console.log(`The second position os Array is ${num}`)
//--------------------------------------------------




