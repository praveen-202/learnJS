//singalton
// Object.create()

//object literals

const mySym = Symbol("details")

const JsUser = {
  // 0: "Praveen",
  // 1: "Rahul",//valid
  name: "Praveen",
  "full name": "Praveen Kumar",
  [mySym]: "Praveen an employee of Google",
  age: 18,
  location: "Jaipur",
  email: "praveen7604@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tusday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// console.log(JsUser["lastLoginDays"])//or
// console.log(JsUser.lastLoginDays)
// console.log(JsUser.lastLoginDays[1])

// maninupulation
// console.log(JsUser)
JsUser.email = "praveen@chatgpt.com"
// console.log(JsUser)

// Object.freeze(JsUser)//freeze() makes the object freeze or lock
JsUser.email = "praveen@microsoft"
// console.log(JsUser)

//Adding method in object---------
JsUser.greeting = function(){
  console.log("Hello Js User")
}
// console.log(JsUser.greeting)//[Function (anonymous)]
JsUser.greeting();

JsUser.greeting2 = function(){
  console.log(`Hello JS user ${this.name}`)
}

JsUser.greeting2()