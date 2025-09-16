const arr = [1, 2, 3, 4, 5, 6];

//sum or max

// //normal way
// function findSum(arr){
//   let sum =0;
//   for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(findSum(arr));

// using reduce()
const output = arr.reduce(function(acc, curr){
  acc+=curr;
  return acc;
}, 0);

console.log(`Sum: `,output);


//normal way
function findMax(arr){
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] > max){
        max = arr[i];
      }
  }
  return max;
}
console.log(`Max: `,findMax(arr));

const res = arr.reduce(function(max, curr){
  if(curr > max){
    max = curr;
  }
  return max
},0);

console.log("Maxx: ",res);
