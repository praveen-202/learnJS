const marvel = ["thor", "Ironman", "batman"]
const dc = ["superman", "flash", "batman"]

// ways of concate-----------------

// marvel.push(dc);//return same array with adding another array as element

// console.log(marvel);
// console.log("Particular ele: "+marvel[3][1]);

//concate()--------------
// const allHeros =  marvel.concat(dc)
// console.log(allHeros)//returns a new array includes both array element

// concating using spread operator

const all_new_heros = [...marvel, ...dc]

// console.log(all_new_heros)
// console.log(typeof all_new_heros)

// using + operator---------
// const h = marvel+dc
// console.log(h)
// console.log(typeof h);//return string of concated element of array

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]] ]

const real_another_array = another_array.flat(2)
// or
const real_another_array1 = another_array.flat(Infinity)

// console.log(real_another_array);

//used in data scrapping----
console.log(Array.isArray("Praveen"));
console.log(Array.from("Praveen"));//Creates an array from an array-like object.
console.log(Array.from("987654321"));//
console.log(Array.from(987654321));//[]
console.log(Array.from({name : "Praveen"}));//[]

let score1  = 100
let score2  = 200
let score3  = 300

console.log(Array.of(score1, score2, score3));//Returns a new array from a set of elements.










