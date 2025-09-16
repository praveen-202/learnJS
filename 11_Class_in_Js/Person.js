class Person {
  // Step 2: Constructor gets called when an object is created
  constructor(name, age) {
    console.log("Constructor executed");
    this._name = name; // Property assignment
    this._age = age;
  }

  // Step 4: Getter is accessed when we read the property
  get name() {
    console.log("Getter executed");
    return this._name;
  }

  // Step 5: Setter is accessed when we assign a new value
  set name(newName) {
    console.log("Setter executed");
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Invalid name");
    }
  }

  // Step 6: Method call
  greet() {
    console.log(`Hello, my name is ${this.name}`); // Calls getter
  }
}

// Step 1: Creating an instance (object)
const person1 = new Person("John", 25);

// Step 3: Accessing a getter
console.log(person1.name);

// Step 4: Using a setter
person1.name = "Doe";

// Step 5: Calling a method
person1.greet();
