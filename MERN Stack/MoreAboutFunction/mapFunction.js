// now learning the map function 
// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array. 
const frusts = ["orange" , "graps" , "watermelon" , "apple" , "patato"] ; 
 const num = [2,4,5,6,7,6,5,4,2,5,7,34,6,46,324,46,53,6,3,6] ; 

 // map function are the using the modification into the array that are the map function 


 const cheange = frusts.map(function(currentarr){
    return currentarr+"ing" ; 
 })
 


 // if an calling the map function and not returning any thing in the function 
 // then check the what will the return the function 
//  const cheang = frusts.map(function(currentarr){
    
//  })
//  console.log(cheang) ; 



 //*************************************************************************************** */

 const checkSecond = frusts.map(objectcreatin) ; 


 // creating the the function for the passing in the arr 

 function objectcreatin(currentvale , index){
    return { [currentvale.length] : index} ; 
 }
 function objectcreating(currentvale , index){
    return index *currentvale.length ; 
 }


 console.log(checkSecond) ;
  


 //now check the the call back function using in the map function 

 const  numTestWithoutReturn = num.map(function(current){
    console.log(current) ; 
 })   ; 

 // now check the new array 
 console.log(numTestWithoutReturn) ;  // the output of this the project  undifined 
 


 // paassing the arraw function in the map function 
 const myName = ["Oluwatobi", "Tobi", "Olu"];

 function mergeName(item, ind, arr) {
   return `${ind + 1}) ${this} ${item} Sofela is part of ${arr}.`;
 }
 
 const myFullName = myName.map(mergeName, "Mr.");
 console.log(myFullName);
 
 // The console.log invocation above will return:
 [
   "1) Mr. Oluwatobi Sofela is part of Oluwatobi,Tobi,Olu.",
   "2) Mr. Tobi Sofela is part of Oluwatobi,Tobi,Olu.",
   "3) Mr. Olu Sofela is part of Oluwatobi,Tobi,Olu.",
 ];