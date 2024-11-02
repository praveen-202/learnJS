// Dates
 
// let myDate = new Date()
// console.log("Date Object: "+myDate);
// console.log("myDate.toString(): "+myDate.toString());
// console.log("myDate.toDateString(): "+myDate.toDateString()); 
// console.log("myDate.toISOString(): "+myDate.toISOString());
// console.log("myDate.toJSON(): "+myDate.toJSON());
// console.log("myDate.toLocaleDateString(): "+myDate.toLocaleDateString());
// console.log("myDate.toLocaleString(): "+myDate.toLocaleTimeString());
// console.log("myDate.toTimeString(): "+myDate.toTimeString())

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023, 01, 23")
// console.log(myCreatedDate.toLocaleString());

// Timestamp comparison
let myTimeStamp = Date.now()

// console.log(myTimeStamp);//1729856787711
// console.log( typeof(myTimeStamp));//number

// console.log(myCreatedDate.getTime());//1674412200000
// console.log( typeof(myCreatedDate.getTime()));//number

// console.log(Math.floor(Date.now()/1000));//it reduce the size to compare essily

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());//return no. of day's week
console.log(newDate.getFullYear()); 


//
newDate.toLocaleString('default',{
  weekday: "long",

})