class User{
  constructor(username){
      this.username = username;
  }

  logMe(){
      console.log(`USERNAME IS ${this.username}`);
  }
}

class Teacher extends User{

  constructor(username, email, password){
      super(username)
      this.email = email
      this.password = password
  }

  addCourses(){
      console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@gmail.com", 787011)
chai.addCourses();
chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe();

console.log(chai === masalaChai);//false
console.log(chai === Teacher);//false
console.log(chai instanceof Teacher);//true
console.log(chai instanceof User);//true