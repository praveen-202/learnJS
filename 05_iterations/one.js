

for (let i = 0; i <= 10; i++) {
  const element = i;
  console.log(element);
  
}

for (let i = 1; i <= 10; i++) {
console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and innerloop ${i}`)
    console.log(i + '*' +j+ ' = ' +i*j)
  }
}


let myArray = ["flash", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
  
}


//break and continue
//break
for (let i = 1; i <= 20; i++) {
  if(i==5) {
    console.log(`5 Detected`);
    break
  }
  console.log(`Value of i is ${i}`);
  
}

//continue
for (let i = 0; i <= 20; i++) {
  if (i==7) {
    console.log(`7 detected`);
    continue;
  }  
  console.log(`Value of i is ${i}`);
    
}