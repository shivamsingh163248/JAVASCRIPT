/** Operators in JavaScript */
/* 1. Arithemetic 
      (+, -, *, /, %, **, ++, --) 
*/
let a = 10 ; 
let b = 20 ; 
let c = a+b ; 
console.log(c) ; 
console.log(10*20) ; 
console.log(typeof c) ; 
// now increment the operator 
console.log(c++) ; 
console.log(c) ; 
console.log(c--) ;
console.log(c) ;



/* 2. Assignment 
      (=, +=, -=, *=, /=, %=, **=) 
*/


// now learning the assignment operator 

c += 20 ; 
// now assign the value in the c and add 20  





/* 3. Comparison 
      (<, > ,<=, >=, ==, !=, ===, !==)
*/ 

console.log(5 == '5') ; 

console.log(6 == 5) ; 
console.log(5 != 6) ; 
console.log(6==='6') ; 
console.log(6 !== '6' ) ; 


/* 4. Logical 
      (&&, ||, !)
*/

// logical operator 
console.log(true && true) ; 

// 0 , '' , null , undefined , false , Nan except this all the value of the truth 
// && operator return fist falsy value and last truthy value 
// || operator return fist value truth last value false

//now implement 

console.log(1&&6) ; 
console.log(0&&6&&1) ;
console.log(1||6) ; 
console.log(0||6||1) ;



/* 5. Bitwise 
      (>>, <<, &, |, ^, ~)
*/