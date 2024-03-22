// learning the deep copy in the js 
const details1 = {
    name : "shivam singh " , 
    class : "b.tech" ,
    value : true , 
    
    studentDetails : {
        studentName : "itisha singh " , 
        studentClass : "bsc"  , 
        studentyear : 2023 , 
    }

}

// this is the treat like the JSON
// creating the converting the all the stringy

const obj = JSON.stringify(details1) ; 

// now checking the the 
console.log(obj) ; 

