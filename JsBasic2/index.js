// console.log("Chaliyea suru krte hai");

// Object creation with their behaviour and method

// let rectangle={
//     length:15,
//     breadth:3,

//     areaOfRectangle: function(){
//         console.log((rectangle.length)*(rectangle.breadth));
//     }
// };

// rectangle.areaOfRectangle();

// number  creation
// let a=5;

// empty object creation
// let obj ={};

// object with behaviours
// let rect ={
//     length:1,
//     breadth:3
// };

// Object with their behaviour and method 
// let recta ={
//     length:1,
//     breadth:3,

//     area(){
//         console.log(recta.length * recta.breadth);
//     }
// };


//  using factory function create object 

// function createRectangeObject(){
//     let recta={
//         length:3,
//         breadth:5,

//         area: function(){
//             console.log(recta.length * recta.breadth);
//         }
        
//     }
//     return recta;


// };
//  optimize  version of  factory function  to create object
// function createRectangeObject(){
//     return recta={
//         length:8,
//         breadth:5,

//         area: function(){
//             console.log(recta.length * recta.breadth);
//         }
        
//     }
// };

// let funct=createRectangeObject();
// funct.area();
// console.log(funct.length);


// creation of factory function using custom inputs
// function createRectangeObject(len,bre){
//     return recta={
//         length:len,// only le could  possible
//         breadth:bre,// only bre could be possible 

//         area: function(){
//             console.log(recta.length * recta.breadth);
//         }
        
//     }
// };

// let obj2=createRectangeObject(34,45);
// obj2.area();
// console.log(obj2.len);
// console.log(obj2.breadth)

//  constructor function->Pascal Notation -> first letter of every word shoul be in Capital letter 
//  creation of constructor fuction

// function Rectangle(){
//     this.length=8,
//     this.breadth=3,
//     this.draw=function(){
//         console.log((this.length) * (this.breadth));
//     }

// };

// let obj1= new Rectangle();
// obj1.draw();

//  creation of constructor fuction for custom input
// function Rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function(){
//         console.log((this.length) * (this.breadth));
//     }

// };

// let obj1= new Rectangle(35,25);
// obj1.draw();
// console.log(obj1.length);
// console.log(obj1.breadth);

//  dynamic nature in object -> you can add the new properties and can be delete 
// obj1.colour="Red";
// console.log(obj1.colour);

// delete obj1.colour;
// console.log(obj1.colour);

// obj1.combimation= function(){
//     console.log("combining");
// };


//  primitive types 
// let a=10;
// let b=a;
// a++; 
// console.log(a);
// console.log(b);

//  reference types 

// let val= {value:10};
// let valb=val;
// val.value++;

// console.log(val);
// console.log(valb);

//  with the help of function check primitive types

// let a= 10;
// function inc(a){
//     a++;
// };
// inc(a)
// console.log( a);


//  with the help of function check reference types

// let a= {value:15};
// function inc(a){
//     a.value++;
// };
// inc(a)
// console.log(a );


//  using for in loop

// let rectangle={
//     length:3,
//     breatdh:2,
//     height:7
// };
// //  for only key
// for(let key in rectangle){
//     console.log(key);
// }
// //  for both key and value
// for(let key in rectangle){
//     console.log(key, rectangle[key]);
// }

// //  for of loop are genrally used for iterable like array and map
// //  but there are some trick you can use to make object in array form to use for of loop 

// //  only for key
// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }
// //  for both key and value 
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }


//  object clonning use of  three methods
// 1 iterate
// 2 assign
// 3 spread

//  Assign method;

// let src={
//     a:23,
//     b:45,
//     c:34,
//     d:56
// };
// let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
// src.a++;

// console.log(src.a);

// console.log(dest.a);

// 2 assign method

// let src={
//     a:23,
//     b:45,
//     c:34,
//     d:56
// };
// let src2={value:35};

// let dest=Object.assign({},src);

// console.log(dest);
// src.a++;
// console.log(src.a);
// console.log(dest.a);

// //  using  assign operator you clone mulltiple object data into one object data
// let dest1=Object.assign({},src, src2);

// console.log(dest1);

// 3 spread operator

let src={
    a:23,
    b:45,
    c:34,
    d:56
};

let dest={...src};
console.log(dest);








