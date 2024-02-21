// creating the function of the learning the hodting in js 

// creating the var this is the global var this is not a blok scope var 

var value1 = `my name is ${Myname} and i am learning the hosting in js` ; 
console.log(value1) ;
var value2 = ` my father name is ${fatherName} and he is a good person` ;
console.log(value2) ;

 var Myname = "shivam singh" ;
 var fatherName = "Satyendra kumar singh " ;

    var value3 = `my name is ${Myname} and i am learning the hosting in js` ; 
console.log(value3) ;
var value4 = ` my father name is ${fatherName} and he is a good person` ;
console.log(value4) ;

// now calling the some function for the learning the hosting in js 
 address() ; 

 // now creaitng the function for the learning the hosting in js
    function address() {
        var Mynames = "Rahul" ; 
        var fatherNames = "Rajesh" ; 
        console.log(`my name is ${Mynames} and i am learning the hosting in js`) ;
        console.log(` my father name is ${fatherNames} and he is a good person`) ;
        var year = 2021 ; 
        console.log(`the year is ${year}`) ;
        return year ;
    }


    // here we are calling the function before the function is created
    var yearvalue = address() ; 
    console.log(`the year is ${yearvalue}`) ;