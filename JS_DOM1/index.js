//  in js interface is like blueprint

//  eventTarget->it is a top level entity,  it is a type of interface implement  by object that can receive  event and 
// may have eventlistner for them
//  it has three methods -> addEventListner(), removeEventListner(), dispatchEvent();

// eventTarget<---node<-- element  

// document.addEventListener('scroll', function(){
//     console.log("tumne scroll kiya hai  ");
// });

// document.addEventListener('click', function(){
//     console.log("you clicked");
// });
// document.addEventListener('mousemove', function(){
//     console.log("tumne mouse move  kiya hai  ");
// });

// let content = document.querySelector('h1');




// content.addEventListener('click',function(){
//     content.style.background='orange';
// });

// let content1=document.querySelector('h2');

// content1.addEventListener('mousemove',function(){
//     content1.style.background='grey';
// });

// let content3= document.querySelector('p');

// content3.addEventListener('mousemove',function(){
//     content3.style.background='green';
// });

//  remove eventListner -> ye sirf tin chijo pr work part hai
//  1 same type, same target, same, function
//  printed() -> return value ko print karta hai, aur ye likhne pr function sabse pehle chalta hai ye bad practice hai 
//  , printed: ye uss function m jo v rehta hai wo chalta hai
//  agr tumhara function kuch return kar rha hi to printed(), aise likho nhi to ptinted aise likho 


// let content= document.querySelector('h1');

// function printed(){
//     console.log(" you clicked ");
// };



// content.addEventListener('click',printed);

// content.addEventListener('click ', printed);


// let content= document.querySelector('h1');


// content.addEventListener('click',function printed(){
//     console.log(" you clicked ");
// });

// content.addEventListener('mousemove', function printed(){
//     console.log(" you clicked ");
// });


//  PHASES of events = capturingPhase->atTargetPhase->bubblingPhase
// capturingPhase->target k pass jaana(dhudhna)
//  atTargetPhase-> target mill jaana 
// bubblingPhase-> target se return jana  (waapas jana ) 
// by default eventListner work in bubbling phase

//  adding event using id tag
// const content =document.querySelector('#wrapper');
// content.addEventListener('click', function(event){
//     console.log(event);
// });

//  prevent default -> just like anchor tag will open the link into next window, default prevent will stop the opening link 

let data= document.querySelectorAll('a');

let thirdLink=data[2];

thirdLink.addEventListener('click',function(event){
    event.preventDefault();
    console.log("kya hua bhai kyu nhi new window m jaa rhe ho");
})



