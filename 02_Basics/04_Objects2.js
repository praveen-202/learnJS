// const tinderUSer = new Object()
// console.log(tinderUSer)

const tinderUser = {}
tinderUser.id = 123
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname:{
      firstname: "Praveen",
      lastname: "Kumar"
    }
  }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {  1: "a",  2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2)//{} -> act as a traget which will store every given object parameter, if {} is not given it will use the first object parameter given

// or we can user spread operator ...
const obj3 = {...obj1, ...obj2} 
// console.log(obj3)

const users = [
  {
    id: 1,
    email:"pk@gmail.com"
  },
  {
    id: 1,
    email:"pk@gmail.com"
  },
  {
    id: 1,
    email:"pk@gmail.com"
  },
]
console.log(users[1].email)

//intresting and usefull user
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"))//true
console.log(tinderUser.hasOwnProperty("fullname"))//flase
