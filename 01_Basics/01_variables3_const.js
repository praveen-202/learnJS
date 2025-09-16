const pi = 3.14;
// pi = 3.1415;   // ❌ TypeError (cannot reassign)

//====⚠️ But: if the value is an object/array, you can change its contents (not the reference).====
const arr = [1, 2, 3];
arr.push(4);      // ✅ allowed (modifying content)
console.log(arr); // [1,2,3,4]
// arr = [5, 6, 7];   // ❌ TypeError (cannot reassign reference)

const obj = { name: "Alice" };
obj.age = 30;      // ✅ allowed (modifying content)
console.log(obj);  // {name: "Alice", age: 30}
// obj = {name: "Bob"}; // ❌ TypeError (cannot reassign reference)
//==========================================================
