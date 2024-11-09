// forEach loop------------------
// most used in industry

const coding = ['js', 'ruby', 'java','python', 'cpp'];

// coding.forEach(function (val){
//   console.log(val);
// })//valid

// coding.forEach((val)=>{
//   console.log(val);
// })//valid

coding.forEach(value => {
  // console.log(value);
});//valid

//or we can give the reference of function in forEach
function printElement(value){
  console.log(value);
}
coding.forEach(printElement);

//---forEach have more then one parameters
coding.forEach( (val, index, arr) => {
  console.log(val, index, arr);
})

//objects inside array, iterate by forEach()

const myCoding = [
  {languageName: 'Javascript',
    languageFileName: '.js'
  },
  {languageName: 'Java',
    languageFileName: '.java'
  },
  {languageName: 'python',
    languageFileName: '.py'
  },
]

myCoding.forEach((item) => {
  console.log(item.languageName+" : "+item.languageFileName);
  
})