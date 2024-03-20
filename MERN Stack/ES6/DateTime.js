// creating the Date Time 
// creating  date time 
const Today = new Date(); 
 console.log(Today) ; 
 const dob = new Date("01-08-2002") ; 
 console.log(dob) ; 

 // if a am giving input in the forment number 
 const somday = new Date(2002, 4) ; 
 console.log(somday) ; 
 console.log(somday.getFullYear()) ; 



// now converted to string the value 
const stringvalue  = dob.toDateString() ; 
const NoramlString =  dob.toString() ; 

// now checking the both on the console 
console.log(stringvalue) ; 
console.log(NoramlString) ; 

// now  change to slice 
console.log(NoramlString.slice(11,20)) ; 