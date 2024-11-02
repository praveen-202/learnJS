// IIFE (Immediately Invoked Function Expression)

//It  is a JavaScript function that runs as soon as it is defined. It is a common pattern used to create a new scope and avoid polluting the global namespace.

// classic function ex
// function chai(){
//   console.log("DB CONNECTED");
// }
// chai();

//syntax
(function() {
  console.log("IIFE executed!");
})();//don't forget to end the iife with semi-coloun (;) to run anther iife 
//If you want to run multiple IIFEs in a row, you need to end each IIFE with a semicolon. This prevents JavaScript from interpreting the start of the next IIFE as a continuation of the previous one, which would cause a syntax error.

(function(){ //also an example of unnamed iife using normal function
  console.log("DB Connected")
})();

// named IIFE---------
(function chai(){
  console.log("DB connected 2")
})();
// or

// IIFE using arrow function -------------------//also an example of unnamed iife using Arrow function
((name) => {console.log(`DB connected 3 via ${name}`)})("Praveen");