//for of loop

// ["","","",""]
// [{}, {}, {},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
  console.log(num);
  
}


const greets = "Hello world!"
for (const greet of greets) {
  console.log(`Each char is : ${greet}`);
}

//Maps------Hold unique keys and value can be duplicate, Holds insertion order
const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', 'France')
map.set("KK", 'India')

// console.log(map);

//printing a map using forof loop
for (const key of map) {
  console.log(key);//returns in array form 
}

//using array destructuring
for (const [key, value] of map) {
  console.log(key, value);
}

const myObj = {
  "game1": 'pubg',
  'game2': 'Spiderman'
}

// for (const [key, value] of myObj) {
//   console.log(key,":- ", value);
// }//TypeError: myObj is not iterable


console.log("I am try third commit")
