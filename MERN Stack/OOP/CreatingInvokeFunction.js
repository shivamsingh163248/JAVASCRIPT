// now learning the creating the invoke function in oop 

// creating the one object of name of the details 
//and knowing the accessing method 

const details = {
    username : "shivam singh" , 
    class : "b.tech"  , 
    branch : "CSE",
    session : "2020-24" , 

    address : function(){
        const vill = " nadiahr" ;
        const post = "rajgarh" ; 
        const dist = "Miz" ;

        console.log(`${this.username} is the address is ${vill} , ${post} , ${dist}`) ; 

    },

    // again crating the key and contained the 
    result : {
        fisryear : 65 , 
        secondyear : 70 , 
        thridyear : 75 , 
        fourtyear : 80 

    }
}


// now accessing the element through the square bracket and the dot are the using for the invoking the object 
console.log(details.username) ; 
console.log(details) ; 
console.log(details.address()) ; 
console.log(details.result.fisryear) ;

// accessing using the square bracket 

const yearname = "fourtyear" ; 

console.log(details.result[yearname]) ; 




// thw new way of the writing of using this keyword and and using the direct writing the function not required the function name 
const detail = {
    username : "shivam singh" , 
    class : "b.tech"  , 
    branch : "CSE",
    session : "2020-24" , 

    address(){
        const vill = " nadiahr" ;
        const post = "rajgarh" ; 
        const dist = "Miz" ;

        console.log(`${details.username} is the address is ${vill} , ${post} , ${dist}`) ; 

    },

    // again crating the key and contained the 
    result : {
        fisryear : 65 , 
        secondyear : 70 , 
        thridyear : 75 , 
        fourtyear : 80 

    }
}
