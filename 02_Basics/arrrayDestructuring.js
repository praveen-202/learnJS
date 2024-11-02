//video link: https://www.youtube.com/watch?v=rpYg2M2lNAE
const fruits = ["apple", "mango", "banana", "pineapple", 'Graps', "orange"];

const apple = fruits[0];
const mango = fruits[1];

//normal way
// console.log(apple);
// console.log(mango);

//using destructuring
// const[fruit1, fruit2] = fruits;
// console.log(fruit1);
// console.log(fruit2);

// // to skip element
// const[fruit1, , fruit2] = fruits;
// console.log(fruit1);
// console.log(fruit2);

// //can use spread also
// const[fruit1, ,fruit2, ...spreadOp
// ] = fruits;
// console.log(fruit1);
// console.log(fruit2);
// console.log(spreadOp);


// Destructuring of Objects inside Array at same time
const groceryList = [
  {item: "Apples", price: 25, catagory: "fruits"},
  {item: "Managos", price: 24, catagory: "fruits"},
  {item: "Tomatoes", price: 27, catagory: "vegies"},
  {item: "Milk", price: 45, catagory: "misc"},
  {item: "Bread", price: 46, catagory: "misc"},
  {item: "Eggs", price: 34, catagory: "misc"},
]

// normal way
// console.log(groceryList[0].item, groceryList[1].price, groceryList[2].catagory);

// const [apples,,ball,...rest] = groceryList;
// console.log(apples);
// console.log(ball);
// console.log(rest)

// //want to only object's item 
// const [, , {item,price}] = groceryList
// console.log(item);
// console.log(price);

// const[, , ,{item: item1,price: price1,catagory: cata1},...rest] = groceryList
// console.log(item1," ", cata1," ", price1)
// console.log(rest);


//Array inside Object.----------------------
const company = {
  name: "Google",
  locations: ["Singapore", "India", "Germany"]
}

//normal way
// console.log(company.locations[0]);

const { locations: [,,loc]} = company
// console.log(loc);

//
const users = [
  ["Dipesh", "Malvia"],
  ["Nikesh", "Gadekar"],
  ["Daniel", "Mether"],
];

// want to achive the given below
// [
//   {
//     firstName:"Dipesh",
//     lastName:"Malvia",
//   },
//   {
//     firstName:"Nikesh",
//     lastName:"Gadekar",
//   },
//   {
//     firstName:"Daniel",
//     lastName:"Mether",
//   },
// ]

// const userObject = users.map(user =>{
//   return {firstName: user[0], lastName: user[1]}
// });

// console.log(userObject)

// const userObject = users.map(([firstName, lastName]) =>{  //<--------------
//   return {firstName: firstName, lastName: lastName}
// });

// console.log(userObject)

//we can do, if key and values both are same, we can replays with only one name(key/value) from ES6 
const userObject = users.map(([firstName, lastName]) =>{
  return {firstName, lastName}//<----------
});

console.log(userObject)