const value = document.getElementById('nav') ; 
// creating the change the color 
value.style.color = "red" ; 


// now learning the onclick function and the quarySelect and attribute selector 
// learning the setattribute 

// creating the onclick function 
//in the button 
// const value = document.querySelector("button").parentElement ;
// const value1 = document.getElementById("black") ; 

// now  creating the function 

function changedColor(){
    // value.setAttribute("class" , "constainer");
    // value1.setAttribute("class" , "constainer");
    // document.getElementById('black').setAttribute("class","const");
   const element =  document.getElementById('black')
    element.setAttribute("class","const");
}

