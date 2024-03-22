// now learning the the shaado copy 
// that mans copy 1 single layer 


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

// now if the printing the and changes the value 

const value3 = details1 ; 
// change in the value3 then found the changed in details1 
value3.name = "satyendra kumar singh" ; 
console.log(details1.name) ; 

// now using the shadow copy 
const value5 ={...details1} ; 
// second method assign new object in different object 
const value6 = Object.assign({} , details1) ; 
console.log(value5) ; 
console.log(value6) ; 