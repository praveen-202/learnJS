// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptedPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const pk = new User("praveen", "kumarpraveen7604@gmail.com", 12345);
// console.log(pk.encryptedPassword());
// console.log(pk.changeUserName());

// console.log(pk);


//behind the scene
// if we do it with normal functions

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptedPassword = function () {
  return `${this.password}abc`
}

User.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`
}

const pk1 = new User("Mandeep", "mandeep@gmail.com", 98765);
console.log(pk1.encryptedPassword());
console.log(pk1.changeUserName());
console.log(pk1.email);

