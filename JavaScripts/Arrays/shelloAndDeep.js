
let fruit = [] ; 
fruit.push("Apple" , "banana") ;  // hear we can take the multiple input // also write function witch can take multiple argument and describe the each of the function related to multiple  argument 
console.log(fruit)
// check for the single input 
fruit.push("watermelon ")
// try add one more arrays in the arrays 
let juicy_Fruit =  ["lemon" , "orange" , "pineapple"]
let solid_fruit = {
    tree : ["sugarCan" , "coconut"],
    king : "Mango",
    
}
fruit.push(juicy_Fruit) ; 
fruit.push(solid_fruit) ; 
console.log(fruit)

// creating the copy 
let shallow = [...fruit] ;
let shallow1 = structuredClone(fruit) ;  
// change in the shallow and check in the origin arrays 
shallow[0] = "wat" ; 
console.log(shallow) ; 
console.log(fruit) ; 

shallow[4].king = "sweet" ; 
console.log(shallow) ; 
console.log(fruit) ; 




// now trying the learning the deep copy 
// creating the copy 

// change in the shallow and check in the origin arrays 
shallow1[0] = "wat" ; 
console.log(shallow1) ; 
console.log(fruit) ; 

shallow1[4].king = "sweet" ; 
console.log(shallow1) ; 
console.log(fruit) ; 