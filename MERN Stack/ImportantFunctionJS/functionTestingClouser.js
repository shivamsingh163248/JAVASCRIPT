let a = "global variable" ; 
// creating the the outer function 
function outerFunction(){
    let b = "fristIneerVriable";

    // creating the inner function 
    function innerFunction(){
        let c = "secondInnerVriable";
        return ` a : ${a}  b : ${b}  c : ${c}` ; 
    }

    // calling the inner function 
    const result = innerFunction();
    console.log(result);
}

// calling the outer function 
const outer = outerFunction(); 
console.log(outer) ; 