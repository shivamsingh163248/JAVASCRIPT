// now again learning the renaming Destructuring  
  
const obj = {
    a : 4 , 
    b : [4,65,4,4,2,4,5] , 
    value :{ name:"shivam singh" , address : "nadiahr rajgarh mirzapur"} , 
    result : function(){console.log("learning the Destrecturing ")} , 
}


// now we are the de structuring of the object and remaining 

const{a:four} = obj ; 
console.log(four) ;

const {value:Details} = obj ; 

// now again check the 
console.log(Details) ; 


// assign pattern 
// fist we are the assign value then implement 

let b1 ; 
({b:b1} = obj );  // this is the way of the writing to code 
console.log(b1) ; 



let obj1 = { name: "John", country: "India", age: 38 };
let names;

({ names } = obj1);

let { country: c, age: a } = obj1;

obj1.country = "Canada";

console. log(names, c, a);