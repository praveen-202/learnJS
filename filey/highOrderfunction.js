const radius = [3, 1, 2, 5];

const area = function(radius){
  return Math.PI * radius * radius;
}

const circumfarence = function(radius){
  return 2 * Math.PI *radius;
}

const diameter = function(radius){
  return 2*radius;
}

const calculate = function(arr, logic){
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};

console.log(calculate(radius, area));

console.log(radius.map(area));//same as above result


console.log(calculate(radius, circumfarence));
console.log(calculate(radius, diameter));


