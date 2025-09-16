var g1 = "I am global (var)";
let g2 = "I am global (let)";
const g3 = "I am global (const)";

function test() {
  console.log(g1); // ✅ Accessible
  console.log(g2); // ✅ Accessible
  console.log(g3); // ✅ Accessible
}
test();
console.log(g1);   // ✅ Accessible
console.log(g2);   // ✅ Accessible
console.log(g3);   // ✅ Accessible


