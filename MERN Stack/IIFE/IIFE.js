// creating function 

// now learning the function 
const detail = (function(){
    // creating the object that name is the detatil 
    const farmer ={
        name : "shivam singh " , 
        age : 23,
    };

    // creating the another function 
    function getdatail(){
       console.log(farmer.name) ; 
    }

    // creating again secod function 
    function updateage(age){
        console.log(farmer.age+age) ; 
    }

    return {getdatail , updateage} ; 

})() ; 

// now consoling the data 
console.log(detail) ; 
console.log(detail.farmer) ; 

// this the function return in the object 
detail.getdatail() ; 
detail.updateage(45) ; 

// this is the vary importent feature of the js 

