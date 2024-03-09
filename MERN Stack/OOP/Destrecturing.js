// now we are the learning the Destructuring in js 
// in js 
const obj = {
    a:1 , 
    b : 4 , 
    c : [5,7,5,34,] , 
    d : {name:"shivam"} ,
}


// now we are the Destructure the object and directly use

const {a} = obj ; 
console.log(a) ; 


// now again check the another 
const {b,c,d} = obj ; 
// now directly call the b cd and check on the console 
console.log(c[2]) ; 
console.log(d.name) ; 
console.log(d) ; 
