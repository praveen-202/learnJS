class User{
    constructor(username){
      this.username =username;
    }

    constructor(username, password){
      this(username)
      this.password = password
    }
    
    logMe(){
      console.log(`Username: ${this.username}`);
    }

    static createId(){
      return Math.floor(Math.random()*(100 - 1+1))
    }
}

const u1 = new User("Praveen");
u1.logMe();
// console.log(u1.createId());

const u2 = new User("Avi", 123456)


//-------------

class Teacher extends User{
  constructor(username, email){
    super(username)
    this.email = email;
  }
}

const hindiT = new Teacher("Ravi","ravi@gmail.com");
hindiT.logMe()
// console.log(hindiT.createId());

 