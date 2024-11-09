// Map-----------------------------
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//map returns value
// const newNums = myNumbers.map((num) => num+10)
// console.log(newNums);

//chaining or Combining filter(), map(), and reduce()...........
const newNums = myNumbers
                        .map((num) => num*10)
                        .map((num) => num+1)
                        .filter((num) => num>=40)

console.log(newNums);
  



//filter--------
// 1. filter()
// Purpose: Creates a new array containing only elements that pass a certain condition (i.e., elements for which the callback function returns true).
// Returns: A new filtered array.
const arr = [1, 2, 3, 4, 5]
const even = arr.filter(num => num%2 === 0)
console.log("filter: ",even);


//map-------------
// 2. map()
// Purpose: Transforms each element of an array and creates a new array based on the results of the callback function applied to each element.
// Returns: A new array with modified elements.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(`map: `,squaredNumbers); // Output: [1, 4, 9, 16, 25]



// ==========================
// 3. reduce()
// Purpose: Reduces the array to a single value by applying a function cumulatively to each element from left to right.
// Returns: A single value (can be an object, array, number, etc.).
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`reduce: `,sum); // Output: 15                                              this 0 is called intialValue.   
