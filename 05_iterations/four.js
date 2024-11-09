//forin loop-------------------------

const myObject = {
  js: 'javascript',
  cpp: 'c++',
  rb: 'ruby',
  swift:'swift by apple'
}


for (const key in myObject) {
  // console.log(key); //if want values, see nextline
  // console.log(myObject[key]);//if want both key and value
  //- console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
// console.log(key);//In forin loop it returns keys of array, like 0,1,2,3.., if we print key it not give the direct value like forof loop or map
//- console.log(programming[key]);//returns values
}

// Does forin works on Map---No maps are not itterable
const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', 'France')
map.set("KK", 'India')

for (const key in map) {
  console.log(key);
  
}