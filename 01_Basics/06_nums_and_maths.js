//=================Numbers=====================
//JS has only one type of number type - 64 bit floating point
//There is no separate type for integer and float
const score = 400;
console.log(score);//400
console.log(typeof score);//number

//we can create number object also but not recommended
const balance = new Number(100)
console.log(balance);//[Number: 100]
console.log(typeof balance);//object

console.log(balance.toString());//"100" 
console.log(typeof strBal);//string
balance.toString().length //3

console.log(balance.toFixed(2));//"100.00" can use in money values for ecommerce website


const otherNumber = 123.237
console.log(otherNumber.toPrecision(4));//"123.2" - it will take 4 digits including before and after decimal point and round it

const otherNumber1 = 123.8976
console.log(otherNumber1.toPrecision(4));//"123.9" - it will take 4 digits including before and after decimal point and round it
console.log(otherNumber1.toPrecision(3));//"124" - it will take 3 digits including before and after decimal point and round it
console.log(otherNumber1.toPrecision(2));//"1.2e+2" - it will take 2 digits including before and after decimal point and round it
console.log(otherNumber1.toPrecision(5));//"123.90" - it will take 5 digits including before and after decimal point and round it



const hundreds = 1000000
console.log(hundreds.toLocaleString());//"1,000,000" - it will format number based on your location
console.log(hundreds.toLocaleString('en-IN'));//"10,00,000" - Indian format
console.log(hundreds.toLocaleString('en-US'));//"1,000,000" - US format
console.log(hundreds.toLocaleString('de-DE'));//"1.000.000" - German format


console.log(Number.MIN_VALUE)//5e-324 -> 5×10^-324
console.log(Number.MAX_VALUE)//1.7976931348623157e+308 -> 1.7976931348623157×10^308

// console.log(23.MAX_VALUE)//Uncaught SyntaxError: Invalid or unexpected token
console.log(Number.POSITIVE_INFINITY)//Infinity
console.log(Number.NEGATIVE_INFINITY)//-Infinity
console.log(Number.NaN)//NaN

//=================Parsing=====================
//parsing means converting string to number
const score1 = '100.23abc'
console.log(typeof score1);//string
const parsedScore = Number(score1)
console.log(parsedScore);//NaN
console.log(typeof parsedScore);//number
//if string contains any character other than number it will return NaN
//NaN is of type number
console.log(typeof NaN);//number
console.log(isNaN(NaN));//true
console.log(isNaN(parsedScore));//true  
//isNaN() function checks if value is NaN or not

//to avoid NaN we can use parseInt or parseFloat
const parsedScore1 = parseInt(score1)
console.log(parsedScore1);//100
console.log(typeof parsedScore1);//number
//it will convert string to number till it finds any character other than number

const parsedScore2 = parseFloat(score1)
console.log(parsedScore2);//100.23
console.log(typeof parsedScore2);//number
//it will convert string to number till it finds any character other than number and also consider decimal point

const score2 = 'abc100.23'
console.log(parseInt(score2));//NaN
console.log(parseFloat(score2));//NaN
//it will return NaN if string starts with any character other than number
console.log(isNaN(parseInt(score2)));//true
console.log(isNaN(parseFloat(score2)));//true

//to check if value is integer or not
console.log(Number.isInteger(parsedScore1));//true
console.log(Number.isInteger(parsedScore2));//false
console.log(Number.isInteger(NaN));//false
console.log(Number.isInteger(23.0));//true - because 23.0 is equal to 23
console.log(Number.isInteger(23.1));//false - because 23.1 is not equal to 23
console.log(Number.isInteger('100'));//false - because '100' is string not number
console.log(Number.isInteger(+'100'));//true - because +'100' converts string to number
console.log(Number.isInteger(parseInt('100abc')));//true - because parseInt('100abc') converts string to number
console.log(Number.isInteger(parseFloat('100.23abc')));//false - because parseFloat('100.23abc') converts string to number but it's not integer, it's float
console.log(Number.isInteger(Infinity));//false
console.log(Number.isInteger(-Infinity));//false
console.log(Number.isInteger(null));//false
console.log(Number.isInteger(undefined));//false  
console.log(Number.isInteger(true));//false
console.log(Number.isInteger(false));//false  

//=================Maths=====================
console.log("==================Maths=====================");

console.log(Math);
console.log("abs(-4): ", Math.abs(-4));//4
console.log("sqrt(16): ", Math.sqrt(16));//4
console.log("cbrt(27): ", Math.cbrt(27));//3
console.log("pow(2,3): ", Math.pow(2, 3));//8
console.log("2**3: ", 2 ** 3);//8

console.log(Math.round(4.5));//5
console.log(Math.round(4.4));//4 //round to nearest integer
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4
console.log(Math.min(4, 3, 1, 5, 7));//1
console.log(Math.max(4, 3, 1, 5, 7));//7

//Random number==========
console.log(Math.random());//0-0.9999999
console.log(Math.random() * 100);//0-99.99999999
console.log(Math.floor(Math.random() * 100));//0-99
console.log(Math.ceil(Math.random() * 100));//1-100
console.log("->", Math.random() * 10);//range 0-9.999999999999999
console.log(Math.floor(Math.random() * 10));//0-9
console.log(Math.ceil(Math.random() * 10));//1-10
console.log((Math.random() * 10) + 1);//range 1-10.000000000000000
console.log(Math.floor((Math.random() * 10) + 1));//1-10
console.log(Math.ceil((Math.random() * 10) + 1));//1-10

//Generate random number between 1 to 10
console.log("1-10: ", Math.floor((Math.random() * 10) + 1));//1-10
//suppose 
// Math.random() => 0.456789
// Math.random()*10 => 4.56789
// (Math.random()*10)+1 => 5.56789
// Math.floor((Math.random()*10)+1)// => 5
// Math.ceil((Math.random()*10)+1)// => 6 -> range 1-11
console.log(Math.ceil((Math.random() * 10) + 1));//1-11

//Generate random number between 0 to 10
console.log("0-10: ", Math.floor(Math.random() * 11));//0-10
//suppose 
// Math.random() => 0.456789
// Math.random()*11 => 5.024679
// Math.floor(Math.random()*11)// => 5

// Math.ceil(Math.random()*11)// => 6 -> range 0-11
console.log(Math.ceil(Math.random() * 11));//0-11
//range of Math.ceil(Math.random()*11) is 0-11 because
// Math.random() => 0.999999
// Math.random()*11 => 10.999989
// Math.ceil(Math.random()*11)// => 11
//if
// Math.random() => 0.000000
// Math.random()*11 => 0.000000
// Math.ceil(Math.random()*11)// => 0


//Need value in Range of 10-20
//It an important formula
const min = 10;
const max = 20;
console.log((Math.random() * (max - min + 1)) + min);//10.00-20.00

//using Math.round() range will be 10-20
console.log(Math.round((Math.random() * (max - min + 1)) + min));//10-20

//----
console.log(Math.floor((Math.random() * (max - min + 1)) + min));//10-20
console.log(Math.ceil((Math.random() * (max - min + 1)) + min));//10-21 

//auto
// console.log(Math.sin(0));//0
// console.log(Math.sin(90 * Math.PI / 180));//1
// console.log(Math.sin(30 * Math.PI / 180));//0.5
// console.log(Math.sin(45 * Math.PI / 180));//0.7071067811865475  

