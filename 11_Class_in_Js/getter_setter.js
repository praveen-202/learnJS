class User {
    constructor(email, password){
      console.log("inside constructor..");
      this.email = email;
      this.password = password
      console.log("....");
      
    }

    get password(){
      console.log("getter called..");
      return `${this._password}praveen`
    }

    set password(value){
      console.log("setter called..");
      this._password = value;
    }
}

const p = new User("p@gmail.com","123");
// console.log(p.email);
console.log(p.password);
p.password = 2121
console.log(p.password)

