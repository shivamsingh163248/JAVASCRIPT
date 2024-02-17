
// rest operator are the using for the multiple input in the function using the one key 

// rest operator using ...spread 

// creating the an array 

const fruits  = new Array("banana" , "apple" , "pine apple" , "lemone" , "gavava") ; 

// creating the function for the pushing element and find the difference 

function addFruits(arrys , stringvalue ) {
    // using the push element 
    arrys.push(stringvalue) ; 

}

// after the pushing the value then consoling the value 
addFruits(fruits , "shivam") ;  // hear is the single parameter  but rest solve the problem 

// now consoling the fruits 
console.log(fruits) ; 

//--------------------------------------- check the REST operator -----------------------------

function addFruitsaUsingRest(objectsArray , ...stringValue){
    // pushing the element in 
    objectsArray.push(stringValue) ; 
}

// again calling the function and insert the value and check on the console 

addFruitsaUsingRest(fruits  , 'petato','mango', 'papaya') ;  // this is the an array if we want to insert the creating the loop and 

console.log(fruits) ; 

// [
//     'banana',
//     'apple',
//     'pine apple',
//     'lemone',
//     'gavava',
//     'shivam',
//     [ 'petato', 'mango', 'papaya' ]
//   ]


// creating the function for the inserting the value in the single single formate so creating the loop and inserting the value 


   function addFrutsUsingRESRuUsing(objectArray , ...value){

    // creating the loop 
    for (const key of value) {
        objectArray.push(key) ; 
    }
   }

   // calling the value and insert the value 
   addFrutsUsingRESRuUsing(fruits , "itisha" , "shivam" , "varanshi") ; 
   // now printing the the console 
   console.log(fruits) ; 