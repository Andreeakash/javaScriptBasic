//  creation of function 
// FUNCTION: A BLOCK OF CODE THAT FULLFILL A PARTICULAR TASK 

// walk();

// function walk(){
//     console.log("Walking");

// };

// walk();

// HOISTING -> Process of moving function declaration to the top of fil, done automatically by JS-engine
//  yahi reason hai ki tum function declare kahi v karo aur call v kahi se kar skte ho chahe function call
//  pehle ho aur declaration niche ho 


// Function Assignment (Named and Anonymous fucntion assignment)
// let stand =function walk(){
//     console.log("I'm the Hero");
// };
// stand();
// walk();// walk naam sirf function ke apne "private scope" ke andar exist karta hai,
//  taaki function apne aap ko recursively call kar sake agar zarurat pade:

// Anonymous function Assignment
// let a=function(){
//     console.log("runing");
// };

// a();


// function sum(a,b ){
//     return a+b;
// }

// console.log(sum(7,5));// 12;
// console.log(sum(5));//(5, undefined)
// console.log(sum(1,2,3,4,5));// it  will be depends on number of arguments passes in function they will
//  only consider that number of vallue  chahe tum kitna v value 
// pass kyu na karo wo sirf aage se number of value conside karega

// you can do one thing 

// function sum(a,b){
//     let total=0;
//     for(let key of arguments){
//         total=total+key;
        
//     }
//     return total;
// }

// console.log(sum(4,5,6,7,71));

// (...  REST operator)
//  with the help of rest parameter you can convert the arguments into array format

// function sum(...args){
//     console.log(args);
// }
// sum(2,3,4,5,6,67,);


//  default parameter-> default parameter must be last parameter (arguments) 
// or that position  to the last parameter should be

// function interest(p,q,r=12){
//     console.log( p*q*r/100);
// }

// interest(200,4,10);// here r value take 10 beacuse of here user provide that value if not then it will consider as default value
// interest(234,7);// here r value take default value

// GETTER AND SETTER
//  GETTER -> TO ACCESS THE PROPERTIES 
// SETTER-> TO CHANGE OR MUTATE THE PROPERTIES

// let person={
//     Fname:"Aman",
//     Lname:"Kumar",
//     // Getter ->read only
//     get fullName(){
//         return `${this.Fname} ${this.Lname}`;
//     },
//     // Setter 
//     set fullName(value){
//         let temp =value.split(' ');
//         this.Fname=temp[0];
//         this.Lname=temp[1];

//     }
// };

// console.log(person.fullName);

// person.fullName="mohan Kumar";

// console.log(person.fullName);


//  USE OF TRY ,CATCH & THROW

let person={
    Fname:"Aman",
    Lname:"Kumar",
    // Getter ->read only
    get fullName(){
        return `${this.Fname} ${this.Lname}`;
    },
    // Setter 
    set fullName(value){
        if(typeof value!=String){
            throw new Error (" Value is not a string");
        }
        let temp =value.split(' ');
        this.Fname=temp[0];
        this.Lname=temp[1];

    }
};
try{
    person.fullName=true;
}
catch(c){
    alert(c);
}
console.log(person.fullName);

