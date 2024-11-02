//Stack (Primitive) and Heap (Non-Primitive)

// Stack : The stack is used for storing function calls, primitive values (like numbers, strings, booleans), and references to objects. Follows LIFO
let myName = "praveen"

let changedName = "Pranav"
console.log("myName: ",myName);

console.log("changedName: ",changedName)// in stack only copy of variable is given

// Heap : The heap is used for storing objects (like arrays, functions, and custom objects).

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "praveen@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);//here we change email in userTwo and that change reflect to userOne also, which proves it, that object gives direct referance


