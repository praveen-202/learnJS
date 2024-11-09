//reduce()---------------------------------------
const myNums = [1, 2, 3]

// standerd code-----------
// const myTotal = myNums.reduce(function (accumulator, currentValue){
//   console.log(`accumulator : ${accumulator} and CurrentValue : ${currentValue}`);
//   return accumulator + currentValue
// }, 0)
// console.log(myTotal);


const myTotal = myNums.reduce((accu, curr) =>  (accu + curr), 0)
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "Js course",
    price: 2999
  },
  {
    itemName: "mobile dev course",
    price: 5999
  },
  {
    itemName: "data science course",
    price: 12999
  },
]

const priceToPay = shoppingCart.reduce((accu, item) => accu + item.price, 0)
console.log("Total Price to Pay: ",priceToPay);

console.log("ll: ", 300000/12);
//
