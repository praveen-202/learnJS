// Object Distructuring----------

const course = {
  coursename: "js in hind",
  price: 999,
  courseInstructor: "Hitesh", 
  address:{
    city:"Bangalore",
    country: "India"
  }
}

// console.log(course.courseInstructor)//instead can use Object Destructuring

// const {courseInstructor} = course
// console.log(courseInstructor)

// const {courseInstructor:instr, name: myName = "Praveen"} = course

// console.log(instr)
// console.log(myName) 
// //we can do 2nd time destructuring
// const{address: { country }} = course
// console.log(country);

// using destructuring in function------------------------------
// function displayEmp({coursename: cn, price:p}){
//   console.log(`The course name is ${cn} and price is ${p}`);
  
// }
// displayEmp(course)

//JSON--------below both were json formates
// {
//   "name":"Praveen",
//   "courseName": "Js".
//   "fee": "free"
// }

// [
//   {},
//   {},
//   {}
// ]