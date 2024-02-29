// in this function return more function 

function wishing(message){
    return function(name){
       console.log(` hello ! ${name} ${message}`) ; 
    }
}


// now invoking the function with the two type 
// fist invoking the function using the storing call and another function way to invoking using the link iif


// type 1 

const fun = wishing("googd morning") ; 
fun("shivam") ; 

// type 2  ................. this is the type 2 

 wishing("happy holi")("isu") ; 