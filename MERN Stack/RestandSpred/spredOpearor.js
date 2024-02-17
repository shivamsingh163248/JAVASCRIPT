
// this is the array 
const fruits  = new Array("banana" , "apple" , "pine apple" , "lemone" , "gavava") ; 
const vaeg = ["branjil" , "cally flower" , "redis" , "carrot" ] ; 
const anuimal = ["loin" , "elephent" , "rabbit"]  ; 

// now we are the pushing element in fruts ; 



// now printing on the console 
console.log(fruits) ; 

const newarr = [...fruits] ;  // hear is not copy address hear the generated the new address 
fruits.push("new element") ; 
console.log(fruits) ; 
console.log(newarr) ; 

 // if want to contat 
 const mergeCreature = [...anuimal , ...fruits] ; 
 console.log(mergeCreature) ; 


