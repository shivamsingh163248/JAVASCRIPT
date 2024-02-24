let a = "global variable" ; 
// creating the the outer function 
function outerFunction(){
    let b = "fristIneerVriable";

    // creating the inner function 
   return  function innerFunction(){
        let c = "secondInnerVriable";
        return ` a : ${a}  b : ${b}  c : ${c}` ; 
    }

    // calling the inner function 
   
}

// calling the outer function 
const outer = outerFunction(); 
console.log(outer);
const innerfunctioncheck = outerFunction(); 
console.log(innerfunctioncheck());
