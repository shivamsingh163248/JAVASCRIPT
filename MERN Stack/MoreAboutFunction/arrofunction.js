// now learning the arrow function in the js 

const sum = (a,b) => {
    return a+b ; 
}


// arrow function replace function keword 
// that is the implicitly function 

const multiply = (a ,b) => a*b ; 


// now calling the function both function and test  the arrow function 

let sumfunction = sum(3,5) ; 
// now consoling the output the value 
console.log(sumfunction) ; 

let multiplyfunction = multiply(3,5) ; 
console.log(multiplyfunction) ; 

// all the function work properly 

// check function all balank parameter 
const checkFun = (() =>{
    // crating the another function 
    let x = 5 ; 
    return () =>{
        x += 1 ; 
        return x ; 
    };
}
) () ; 
console.log(checkFun) ;


const number = check =>{
    return "shivam"+check ; 
}

// now calling the function and printing on the console 
console.log(number("singh")) ;

// check the can possible two or the more returning 


function morereturnfunction(){
   let  num = 20 ; 
    let check = 50 ; 
    let sums = 10 ; 
    return  {num , check , sums} ; 
}

// now invoking the function 
console.log(morereturnfunction()) ; 
