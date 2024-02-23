// learning the scope chaning in js 
// creating the tree variable 
let a = 10 ; 
const b = 20 ; 
var c = 30 ; 

// now consoling all the variable 
console.log(a +" " + b + " " + c) ;

// creating the function and it this function have the one more function 
function first(){
    let a = "frist"; 
    const b = "second"; 
 
    console.log(a +" " + b + " " + c) ;
    function second(){
        let a = "inner frist"; 
       
        console.log(a +" " + b + " " + c) ;
    }
    second() ;
}

// now calling the fist function 
first() ;

//  now run the program and check the output