// console.log(Math.PI);
const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")  //getOwnPropertyDescriptors(Object,'Object's property')


// console.log(discriptor);

const chai = {
  name: 'ginger chai',
  price: 250,
  isAvailable: true,

  orderChai: function(){
    console.log("chai nhi bani");
     
  }
}

// console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
  // writable: false,
  enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let[key, value] of Object.entries(chai)){
  if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
  }
}