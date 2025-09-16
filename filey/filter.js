const arr = [1, 2, 3, 4, 5, 6];

//filter odd values
function isOdd(x) {
  return x % 2;
}

const odd = arr.filter(isOdd);
console.log(odd);

//filter  even values
const even = arr.filter((x) => x % 2 === 0);
console.log(even);

//greater then 4
const greaterThan4 = (x) => x>4;

const res = arr.filter(greaterThan4);
console.log(res);
