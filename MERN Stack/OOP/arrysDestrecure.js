// now learning the arrays Destructuring

const fruits = ["apple" , "orange" , "pathos" , "guava" , "banana" , "watermelon" , "lemon" , "lichi"] ; 

// now learning the arras the destructuring 

const[a,,b] = fruits ; 
console.log(a) ; 
console.log(b) ; 


const[e , ,...g] = fruits ; 

console.log(e) ; 
console.log(g) ; 

const[frustvalue,,...[,s,r]] = fruits ; 
console.log(s) ; 
console.log(r) ; 

