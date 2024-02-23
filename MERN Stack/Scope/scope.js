// learning the global scope and local scope in js 
let username = "shivam singh " ; 
var userlover = "itisha singh " ;
const userage = 21 ; 

if(true){
   let friendname = "shivam singh " ;
   var friendgf = "itisha singh " ;
   const frutearray = ["apple" , "banana" , "mango" , "grapes"] ;
}

// creating the function 
function brackup(){
    let lovername = "shivam singh ";
    var lovergf = "itisha singh " ;
    const brackupdate = "11/10/2019" ; 

    // consoling all local variable 
    console.log(`the lover name is ${lovername} and the lover gf is ${lovergf} and the brackup date is ${brackupdate}`) ;
    // consoling the 
    console.log(`the username is ${username} and the user lover is ${userlover} and the user age is ${userage}`) ;
    console.log(friendgf) ;
}

//  console.log(`the lover name is ${lovername} and the lover gf is ${lovergf} and the brackup date is ${brackupdate}`) ;

// calling the function
brackup( ) ;
var x =10 ;
console.log(friendgf) ;
