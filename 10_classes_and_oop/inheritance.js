class User{
  constructor(username){
    this.username = username;
  }

  logMe(){
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User{
  constructor(username, email, password){
    super(username)
    this.email = email
    this.password = password
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`);
  }
}

const user1 = new Teacher("Ramesh", "ramesh@en.com", "1234")

user1.addCourse()
user1.logMe()

const user2 = new User("Mukesh")
user2.addCourse()// user2 don't have access to this method
user2.logMe()

