//ES6

class User {
  constructor(usernmae, email, password){
    this.usernmae = usernmae
    this.email = email
    this.password = password
  }

  encryptPassword(){
    return `${this.password}abc`
  }

  changeUsername(){
    return `${this.usernmae.toUpperCase()}`
  }
}

const user1 = new User("Ramesh", "ramesh@gmail.com", "123")

console.log(user1.encryptPassword());
console.log(user1.changeUsername());

//Behind the scene

function Users(usernmae, email, password){
  this.usernmae = usernmae
  this.email = email
  this.password = password
}

Users.prototype.encryptPassword = function() {
  return `${this.password}abc`
}

Users.prototype.changeUsername = function(){
  return `${this.usernmae.toUpperCase()}`
}

const tea = new Users("Suresh","suresh@fb.in", "1234")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
