// creating the carring  function 
// simple function 

function square(a,b,c){
  return a*b*c ; 
}


// in the carring 

function carrSq(a){
    return function(b){
        return function(c){
            return a*b*c ; 
        }
    }
}


// reusability concept of the carrying function finding the square and power and quabe of any function 

function power(a){
   return  function(b){
        return a**b ; 
    }
}

// calling the function and the check the reusability 

const suare = power(5) ; 
console.log(suare(2)) ; 


// let reusibility of the conde and function 
console.log(suare(3)) ; 