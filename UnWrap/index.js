const data=document.getElementById("counterValue");
// const data = document.querySelector("#counterValue");
// above both line we can use 


function inc(){
    // get the value from UI
    let value=parseInt(data.innerText);
    // update the value from UI
    value=value+1;
    // set the value into UI
    data.innerText=value;
};


function dec(){
    // get(fetch )the value from UI
    let value= parseInt(data.innerText);
    // update the value
    value=value-1;
    //  set the value into UI
    data.innerText=value;
}

