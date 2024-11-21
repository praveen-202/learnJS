function SetUsername(username){
  //complex DB calls
  this.username = username
  console.log("called..");
  
}

function createUser(username, email, password){
  SetUsername.call(this, username)

  this.email = email
  this.password = password
}

const user1 = new createUser("sachin", "sachin@fb.com", "123")
console.log(user1);


//Example from chat GPT===================
const person = {
  firstName: "Praveen",
  lastName: "Kumar",
  fullName: function() {
      return this.firstName + " " + this.lastName;
  }
};

const anotherPerson = { firstName: "Rohit", lastName: "Sharma" };

// Use call() to invoke fullName() with anotherPerson's context
console.log(person.fullName.call(anotherPerson)); // Output: Rohit Sharma
