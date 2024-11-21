// //Lets Talking about Object Literals: ------------------------------
// const user = {
//   username: "praveen",
//   loginCount: 8,
//   signedIn: true,

//   // getUserDetails: function(){
//   //   // console.log("Got user details from database");// to remove or understand why undefined is comming in output
//   //   let n = "Got user details from database";
//   //   return n;
//   // }

//   //understanding this keyword---
//   getUserDetails: function(){
//     console.log(`Username: ${this.username}`);//this gives currunt context, if we don't use this it give error: username is not defined
//     console.log(this);
//     //if we print 'this' what we will get is current context -> 
//                         // {
//                         // username: 'praveen',
//                         // loginCount: 8,
//                         // signedIn: true,
//                         // getUserDetails: [Function: getUserDetails]
//                         // }
    
//   }
// }

// // this is how we can access Objects---
// console.log(user['username']);
// console.log(user.loginCount);
// console.log(user.getUserDetails());

// // if we print 'this' in Global environment in node, it gives: {} - an empty context
// // console.log(this);
// //And in browser Environment it gives: Window{.,.,.,}

// //Constructor Function ==--------------------------
// //Constructor Function allows us to create multiple instance of a 'object' 

// //Some predifined constuction functions
// // const promiseOne = new Promise();
// // const date = new Date();


//Lets create a new Object--------------------

//It is Constructor function
function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
    
  }

  return this //so, if we don't return 'this' here, it implicitly retrun 'this'
}

const userOne = new User("Hitesh", 12, true);
const userTwo = new User("Praveen Kumar", 13, false);
// console.log(userOne);
// console.log(userTwo);
// console.log(userTwo.greeting());

//About Constructor property-------------------------------------
// For any given object, the constructor property points to the function that was used to create that object.
console.log(userOne.constructor);


//step 1: As we user new keyword, every time a new Object is created
//step 2: due to new keyword a constructor function is called.
//step 3: this keyword returned by function, referance the entire object's properties and function.
//step 4: we can acess it by constructor call referance(eg. console.log(userOne);)