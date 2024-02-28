// learning the pure function 

// in the pure function it cant manupulated by the other that are called the pure function 

// creating the pure function 
function pureFunction(num1 , num2){
    return num1 * num2 ;   // this is the pure function in the js 

}


// now learning the impure function in the js how actually work the impure function in the js 
let discount = 20 ; 
function impureFunction(value){
    discount = discount -10 ; 
    return value - discount ;  // this is the type of the impure function 
}