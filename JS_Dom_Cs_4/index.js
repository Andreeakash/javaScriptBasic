// //  synchrnous code

// function sync(){
//    console.log("hello how are you ")
// }

// console.log("first");
// console.log("second");

// //  O/P->
// // hello how are you
// // first
// // second

//  Asynchrnous code

// setTimeout(function(){
//     console.log("hello jee");
// },3000);

// console.log("first");
// console.log("second");

// // O/P WILL BE

// first
// second
// hello jee


// JS- JS IS SINGLE THREADED LANGUAGE

// API->Application program interface;
// example-> waiter in resturant, way to communicate with backend, 
// to connect with one app to another , connection b/w frontemd and backend


// CREATION OF PROMISE(in synchronous method )
// let meraPromise= new Promise(function(resolve, reject){
//     console.log("i'm your promise");
//     resolve(1998);
// });

// console.log("ye rha hero ");

// CREATION OF PROMISE(in Asynchronous method)

// let dusraPromise= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hello bachho");
//     },3000);
//     resolve(2233);
// });

// console.log("hum first ,hum first");


// let meraPromise= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("i'm inside the promise ");
//     },5000);
//     resolve(2323);
// });

// meraPromise.then((value)=>{console.log("o/p aa gya hai")});


// let meraPromise1= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("i'm inside the promise ");
//     },5000);
//     reject(new Error("bhaishab error aa gya hai"));
// });

// meraPromise1.catch((error) => console.log(error));          
// // Poora Error object + stack trace (debugging ke liye useful)

// meraPromise1.catch((error) => console.log(error.message));  
// // Sirf clean message (user ko dikhane ke liye ya simple logging ke liye)

let firstPromise = new Promise(function(resolve, reject){
    setTimeout(()=>console.log("ye rha first promise"),3000);
    resolve(true);
});

let thirdPromise=firstPromise.then(()=>{
    let secondpromise=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("second promise 2 started")
        },2000);
        resolve("second promise to resolved");
    })
    return secondpromise;
});

thirdPromise.then((value)=>console.log(value));