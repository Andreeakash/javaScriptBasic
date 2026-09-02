// using Math object 

// console.log(Math.random());
// console.log(Math.random());

// console.log(Math.random());

// console.log(Math.random());

// console.log(Math.random());



// console.log(Math.PI);
// console.log(Math.round(1.01));

// console.log(Math.round(2.56));


//  String can be prmitive and Object also 

//  Here String is primitive

// let lastName='  kumar  ';


// //  Here String is object(using String constructor function)
// let firstname=new String ('aman');

// console.log(typeof lastName);

// console.log(typeof firstname);



// console.log( lastName.toLowerCase());
// console.log();

// console.log(lastName.toUpperCase());


//  trimLeft and trimRight is outdated instead of these yo should use 
// trimStart and trimEnd
// console.log(lastName.trimLeft());
// console.log(lastName.trimRight());

// console.log(lastName.trimStart());
// console.log(lastName.trimEnd());


// let message = "you are the guinness man";

// let temp=message.split(" ");
// console.log(temp);
// //  koi v method temporay changes krta hai permanent change k liye reassign krna hota hai
// message=message.replace('are', 'is');

// message=message.replace('guinness', 'intelligent');

// message=message.replace('man', 'person');
// message=message.replace('you', 'aman');
// console.log(message);


// console.log(`
//     give me 
//     a glass 
//     of water`);
//  console.log("give me \n a glass \n of water");

//  let firstName="Aman";
// // place holder using Dollar Symbol with curly braces 
//  console.log(`
//     Hello, ${firstName} Bhai 
//     kaise ho aur sab thik `);

// Date Object

// let date = new Date();

// let date2= new Date('October 16 2000 03:20 am');

// console.log(date2);



//  CREATIN AN ARRAY
// Array- ARRAY IS THE COLLECTION OF ITEMS

// let number=[1,3,5,7];

// console.log(number[0]);
// console.log(number[1]);
// console.log(number[3]);
// console.log(number[5]);

// //  add element 
// // Starting(beginning)-> .unshift();

// number.unshift(9);
// console.log(number);

// //  End (last)-> .push();

// number.push(18);
// console.log(number);


// //  Middle or any position;
// // . splice(kaunse index pr add akrna hai , kitne element delete krna hai, kya add krna hai  it could be multiple)

// number.splice(4,0,"ram", "mohan");
// console.log(number);
// let number=[1,3,5,7];


// console.log(number.indexOf(5));
// console.log(number.indexOf(3));
// console.log(number.indexOf(9));
// console.log(number.indexOf(7));

// console.log(number.includes(8));
// console.log(number.includes(4));

// let course=[
//     {no:1, naam:'aman'},
//     {no:2, naam:'mohan'}

// ];
// console.log(typeof course);
// console.log(course.indexOf(0));


// predicate function ya callback function

// let temp= course.find(function(temp){
//     return temp.naam === 'aman';
// });

// console.log(temp);

//  using arrow function

// step1 -> function keyword remove krna hoga aur arrow(=>) use krna hai 
// step 2-> agr single parameter hai to parenthesis( ) remove kr sakte hai
// step 3 -> agr return m single line k code hai to return  aur curlyBraces bhi remove kr sakte hai  
// let temp= course.find(temp=>temp.naam === 'aman');
// console.log(temp);


//  removing a Element in An array
// let number=[1,3,5,7];

// at the end 

// number.pop();
// console.log(number);

// // at beginning

// number.shift();
// console.log(number);

//  at middle using index
// number.splice(1,2);
// console.log(number);


//   to make EMPTY an Array

// let number=[1,3,5,7];
// let num=number;
//  this not a good way are array take  reference so the numbers 
// in array does't empty , it only change their   refrence
// number=[];



//  best practice is to make the length array is to zero 

// number.length=0;

// console.log(number);
// console.log(num);

//  another medthod is .splice

// number.splice(0,number.length);
// console.log(number);
// console.log(num);

//  another method using  while loop that is bulky code
// while(number.length>0){
//     number.pop();
// }
// console.log(number);
// console.log(num);


//  combined an element in primitive types
//  HW combining alemenusing object or reference types
// let first=[1,3,5,7];
// let second=[3,2,7,8];
// let combined=first.concat(second);
// console.log(combined);

// let spliced=combined.slice(2,6);
// console.log(spliced);
// //  2 to length or array
// let splice=combined.slice(2);
// console.log(splice);
// //  copy an array using slice;
// let copied= combined.slice();
// console.log(copied);



// spread operator is used to megr two array

// let first=[1,4,5,6];
// let second=[3,2,7,8];

// // let combined=[...first,...second];
// // console.log(combined);

// //  you can do this thing also 
// let combined=[...first,'a','b',...second,"Aman"];
// console.log(combined);


// // copy using spread operator
// let another = [...combined];
// console.log(another);


//  iterating an array using for-of loop 

let arr=[1,2,3,4,5,6];
// for(let value of arr){
//     console.log(value);
// }

//  for each loop 
//  here you have to write prediacte function ya call back function


// arr.forEach(function(value){
//     console.log(value);
// });

//  convert above function into arraow function
arr.forEach(value=>console.log(value));


// joining an array 

// let num =[1,2,3,45,66];
// let joined=num.join( '@');
// console.log(joined);

//  split 

let str='i am the intelligent person';

let splitted=str.split(" ");
console.log(splitted);

let another= splitted.join('3');
console.log(another);









