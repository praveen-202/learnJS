// Dates

//Range of date 
console.log(new Date(0));//1970-01-01T00:00:00.000Z
console.log(new Date(0).toString()); //Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

console.log(new Date(8.64e15));//+275760-09-13T00:00:00.000Z
console.log(new Date(8.64e15).toString()); // Sat Sep 13 275760 05:30:00 GMT+0530 (India Standard Time)

console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
console.log("----------------------------");


//Date===============================
let myDate = new Date();

console.log("Date Object: ", myDate);//Date Object:  2025-09-28T13:38:35.269Z
console.log("myDate.toString(): ", myDate.toString());//Sun Sep 28 2025 18:58:31 GMT+0530 (India Standard Time)
console.log("myDate.toDateString(): ", myDate.toDateString()); //Sun Sep 28 2025
console.log(myDate.toISOString());//2025-09-28T13:33:38.394Z
// YYYY → Year
// MM → Month (01–12)
// DD → Day (01–31)
// T → Separator between date and time
// HH → Hours (00–23, in UTC)
// mm → Minutes (00–59)
// ss.sss → Seconds and milliseconds
// Z → Indicates UTC time zone

console.log(typeof myDate);//object

console.log("myDate.toJSON(): ", myDate.toJSON());//2025-09-30T12:32:01.997Z - same as toISOString()


console.log("myDate.toLocaleDateString(): " + myDate.toLocaleDateString());// 9/28/2025 - returns local date only

console.log("myDate.toLocaleString(): " + myDate.toLocaleString());// 9/28/2025, 6:33:38 PM - returns local date and time

console.log("myDate.toLocaleTimeString(): " + myDate.toLocaleTimeString());// 6:33:38 PM - returns local time only

console.log("myDate.toUTCString(): " + myDate.toUTCString()); //Sun, 28 Sep 2025 18:33:38 GMT - returns UTC date and time in String

let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023, 01, 23")
console.log(myCreatedDate);//2023-01-23T00:00:00.000Z

console.log(myCreatedDate.toString()); //Wed Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
console.log(myCreatedDate.toLocaleString()); //1/23/2023, 12:00:00 AM
console.log("=============================");


// Timestamp comparison============================
let myTimeStamp = Date.now()

console.log(myTimeStamp);//1729856787711
console.log(typeof (myTimeStamp));//number
console.log(myTimeStamp.toString());//1729856787711

//we can do compare time by this way---------
let oldTime = new Date(2025, 0, 1);// 1/1/2025, 5:03:00 am
let howManyDays = Date.now() - oldTime.getTime();
console.log(howManyDays);//1729856787711
console.log(howManyDays / (1000 * 60 * 60 * 24));//272.7931680208333 - days
console.log("=> ", howManyDays / (1000 * 60 * 60 * 24 * 30));//=>  9.093219954089506 - months
console.log("=> ", howManyDays / (1000 * 60 * 60 * 24 * 30 * 12));//=>  0.7577683295074589 - years

console.log(Date.now());//1729856787711
console.log(Date.now() / 1000);//1759239589.619 - convert into seconds
console.log(Math.floor(Date.now() / 1000));//1759239589 - it reduce the size to compare essily by removing decimal

// console.log("->", new Date.now());//Error - because Date.now() is static method not an Constructor 

//=============================================
let anyTime = new Date(2021, 0, 23, 5, 3);//here 0 means january - index starts from 0

console.log(anyTime);//2021-01-23T05:03:00.000Z - here date is 2021-01-23 and time is 05:03:00
console.log(anyTime.getTime());//1674412200000
console.log(typeof (anyTime.getTime()));//number

// ==============================================
let newTime = new Date(1997, 7, 26, 5, 3);

console.log(newTime);//1997-08-25T23:33:00.000Z
console.log(newTime.toString());//Sat Aug 26 1997 05:03:00 GMT+0530 (India Standard Time)
console.log(newTime.toLocaleString());// 26/8/1997, 5:03:00 am

console.log(newTime.getTime());//872551980000 - means total defined time in milliseconds

//==============================================
let newTime1 = new Date("2021-01-23");
console.log(newTime1.toString());//Wed Jan 23 2021 00:00:00 GMT+0530 (India Standard Time)

let newTime2 = new Date("01-13-1999");
console.log(newTime2.toString());//Sat Jan 13 1999 00:00:00 GMT+0530 (India Standard Time)
console.log(newTime2.toLocaleString());//1/13/1999, 12:00:00 am

//==============================================
let newDate = new Date();

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);//month starts from 0 so we have to add 1 
console.log(newDate.getDay());//2 - weekday -  return no. of day's week
console.log(newDate.getFullYear()); //2025

//=========toLocaleString() overridede\\\\\\\\\\\\\ ======================
let date = newDate.toLocaleString('en-IN',
  {
    day: "numeric",//other options -> numeric - 2, 2-digit - 02
  })
console.log(date);//2

let day = newDate.toLocaleString('en-IN',//natinalization
  {//OBJECT
    weekday: "short", //other options -> short - tue, long - tuesday, narrow - 2
  })

console.log(day);//Tuesday

let month = newDate.toLocaleString('en-IN',
  {
    month: "short",//other options -> short - jan, long - january, narrow - 1
  })
console.log(month);//Jan

let year = newDate.toLocaleString('en-IN',
  {
    year: "numeric",//other options -> numeric - 2025, 2-digit - 25
  })
console.log(year);//2025

let fullDate = newDate.toLocaleString('en-IN', {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});
console.log(fullDate); // e.g., " Tuesday, 2 January, 2025"
