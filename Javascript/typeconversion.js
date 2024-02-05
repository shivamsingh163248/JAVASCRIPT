// now we are the learning the type conversion 


//*--------- string()

let a = 40 ; 
let number = String(a) ; 
console.log(number) ; 
// now checking the type of 
console.log(typeof number) ; 
console.log(String(null)) ; 
console.log(String(undefined)) ; 
console.log(String(true)) ; 

// second method to convert to 
// tostring  can change the in the string 

console.log((40).toString()) ; 
console.log((40.45).toString()) ;
// console.log(null.toString()) ;

console.log('number') ; 
console.log("number") ; 


// next method to convert in the number  using the number  
// number()

console.log(Number("290"));
console.log(Number("290.09"));
console.log(Number("shivam"));
console.log(Number(true));
console.log(Number(false));


// now convening using the unary operator using + 
let valu3 = '234' ; 
let valu = '234shivam' ; 
let valu2 = 'shivam343' ; 
console.log(+valu) ; 
console.log(+valu2) ;
console.log(+valu3) ;


// now converting with the phreaseflot and phraseint 

console.log(parseInt("54.6f.54h")) ; 
// now we can see not not directed 
console.log(parseFloat("45.6fg.76")) ; 

//all the string given the true without the empty 
console.log(Boolean("")) ; 
console.log(Boolean('')) ; 
console.log(Boolean("shivam"))
console.log(Boolean(1)) ; 
console.log(Boolean(0)) ; 



