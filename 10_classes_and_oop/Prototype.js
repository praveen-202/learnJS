// Prototype==========================

let myName = "hitesh     "
let mychannel = "chai     "

//Here we want to insert a function trueLenth() into string type and it will be present for all string:-----------------
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

// insert a function into the top hieararchy Object---------------------------------
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.praveen = function(){//here we insert a function into the top hieararchy Object and it will work for every inherited object like obj., array, string, functions
    console.log(`praveen is present in all objects`);
}

// heroPower.praveen();

// here we know array is child of top hieararchy Object, so we can acess praveen function with array also:Yes
// myHeros.praveen();

// myName.praveen()

//accessing fun. praveen
function pk(){
}
// pk.praveen()

//here we checking if, we add a function to only Array or String or Function, so Object can use it or not ? Ans: No, if function added to Array only Array and its inherited object can use that function.

Array.prototype.heyPraveen = function(){
    console.log(`Praveen says hello from Array Object`);
}

// heroPower.praveen()
// myHeros.praveen()

// myHeros.heyPraveen()//myHeros is Array so it work here only
// heroPower.heyPraveen()//heroPower.heyPraveen is not a function at Object

// // inheritance================================

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//old approch
}
// console.log(TASupport.isAvailable," ",TASupport.makeAssignment);


Teacher.__proto__ = User//old approch

// console.log(Teacher.name);//chai


// modern syntax-----------------------
Object.setPrototypeOf(TeachingSupport, Teacher)

// --------------------------//solving problem
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"praveen".trueLength()
"iceTea".trueLength()