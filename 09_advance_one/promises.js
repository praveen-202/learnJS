// // promise 1
// const promiseOne = new Promise(function(resolve, reject){
//   //It Do an async task
//   //Used to DB calls, cryptography, network
//   setTimeout(function(){
//     console.log(`Async task is completed`);
//     resolve()
//   },1000);
// });

// promiseOne.then(function(){
//   console.log("Promise consumed");
  
// })

// // promise 2
// new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log("Async task 2");
//     resolve()
//   }, 1000)
// }).then(function(){
//   console.log("Async 2 resolve");
// })

// // promise 3
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve({user: "Boat", email: "boat@abc.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//   console.log(user);
  
// })

// //Promise 4
// const promiseFour = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let error = false;
//     if(!error){
//       resolve({username: "praveen", password: "p@123"})
//     }else{
//       reject(`ERROR: Somthing went wrong..`)
//     }
//   }, 1000)
// })

// promiseFour.then((user) => {
//  console.log(user);
//  return user.username
// }).then((myUsername) => {
//   console.log(myUsername); 
// }).catch(function(err){
//   console.log(err);
// }).finally(() => console.log("The promise is either resole or rejected"))

// //Promise 5
// const promiseFive = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     let error = true;
//     if(!error){
//       resolve({username: "Javascript", password: "p@123"})
//     }else{
//       reject(`ERROR: Js went wrong..`)
//     }
//   }, 1000)
// })

// async function consumePromiseFive(){
//  try {
//   const response = await promiseFive;
//   console.log(response);
//  } catch (error) {
//   console.log(error);
//  }
// }

// consumePromiseFive()

// async function getAllUser() {
//   try {
//     const respose =  await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await respose.json()
//     console.log(data);
//   } catch (error) {
//     console.log("ERROR: ",error);
    
//   }
  
// }
// getAllUser();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {//with the here no need of try & catch beacuse then() executes when privous then() completes
  return response.json()
})
.then((data) => {
  console.log(data)
  console.log(data.name);
  console.log(data.login);
})
.catch((err) => console.log(err))
.finally()

//note: read theorytically promises and fetch()API