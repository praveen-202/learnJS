const arr = [1, 2, 3, 4, 5, 6];
//double 
//triple
//binary repregentation

function double(x) {
  return 2 * x;
}

function triple(x){
  return 3 * x;
}

const output = arr.map(double);
console.log(`DoubleVal: `,output);//default tostring

const outout2 = arr.map(triple);
console.log(`TripleVal: `, outout2);

const binRep = arr.map((x) => x.toString(2));
console.log(binRep);




