// console.log("hello ");

// Note-> performance.now()-> is a standard way to measure  how long you code taken to run ,
//  it provide a timestamps and that  is too much  accurate; 

//  measuring performace of code 
// const t1= performance.now();
// for(let i=0;i<100000;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent="this para number" + i ;

//     document.body.appendChild(newElement);
// }
// const t2=performance.now();

// console.log(" this took "+ t2-t1 + "millisecond");
// measure speed of code

// const t1= performance.now();

// function sum(val1,val2){
//     this.a=val1;
//     this.b=val2;
//     return a+b;
// }
// console.log(sum(44,25));
// const t2=performance.now();
// console.log(" this took " +(t2-t1) + "milisecond");


// function sum(val1, val2) {
//     return val1 + val2;   
// }

// const t1 = performance.now();

// let result;
// for (let i = 0; i < 1000000; i++) {
//     result = sum(5, 10);   
// }

// const t2 = performance.now();
// console.log("result:", result);
// console.log("Time lagaa: " + (t2 - t1) + " milliseconds");

//  SET TIMEOUT HAS TWO ARGUMENTS FIRST-> FUNCTION , SECOND-> TIME
// setTimeout(function(){
//     console.log("10 sec baad aunga ")
// },10000);

// setTimeout(function(){
//     console.log("3 sec baad aunga ")
// },3000);

