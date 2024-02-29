// now we are the learning today call back function 

// function call another function in the inner the are the call back function 

function saysomething(value){
    console.log(`${value()} this is the using  call back function for the java Script`) ; 
}

function hello(){
    return "hello !" ; 
}


function hi(){
    return "h! !!" ; 
}

// now calling the sayfunction 

saysomething(hello) ; 