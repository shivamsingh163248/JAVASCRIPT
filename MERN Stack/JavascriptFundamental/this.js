// creating the java scripts 

console.log(this) ; 

// creating the function 
function checkthisKeyworld(){
    console.log(this) ; 
}

// now calling the function 
checkthisKeyworld() ; 


// creating the object with the anomies function 
const check = {
    name:"shivam singh "  ,
    class : 45 , 
    work : function (){
        console.log(this) ; 
    }
}


//now invoking the class 
console.log(check) ; 
console.log(check.work()) ; 


// again creating the another object and the check the this key word how thw actually the working of the this 
// key words 
 
const check2 = {
    name : "itisha singh ",
    class : "bse"
}

// now copy the function for the above class 

check2.work = check.work ; 

// now again the invoking the function 
console.log(check2.work()) ; 
// this is the perfectly work 
