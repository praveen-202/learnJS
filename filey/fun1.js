function add(a, b){
  return a+b;
}

function diff(a, b){
  return a-b;
}

function operate(operationFun, a, b){
  return operationFun(a, b);
}

console.log(operate(add, 2, 3));
console.log(operate(diff, 2, 3));
