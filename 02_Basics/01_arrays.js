//Way of declaring Array
const myArr = [0 ,1 ,2 ,3 , 4, 5]
// console.log(myArr[4]);

const myHeros = ["IronMan","Thor","Thanos","AntMan"];

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2);

//Array's methods
myArr.push(6)
myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,4)//[1, 2, 3] - slice(including, excluding)
console.log(myn1)

console.log("B ", myArr)

const myn2 = myArr.splice(1, 4)//[ 1, 2, 3, 4 ]- splice(including, including) and it mainupulate the original array
console.log(myArr);

console.log(myn2);

   

   