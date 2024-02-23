// learning the call stack in the js 

// creating the two variable name and address 
var username = " shivam singh " ; 
var address = "nadhihar rajgarh mirzapur" ;

// now we are the both printing on the console for the checking 


let age = 20 ;
    
 console.log(`name is ${username}`);
    console.log(`address is ${address}`); 

// creating the function wising happy birthyday 
 function whishingHappyBirthday(age){
     console.log(`happy birthday ${username}`);
     let values = 10;
     console.log(values+20) ; 
    
     if (age > 18){
     happybirthday();
     }
 }


 // creating the happy birthday function 

 function happybirthday(){


    let number = 10;
        console.log(`happy birthday ${username}`);
        console.log(`your age is ${age}`);
        console.log(`your number is ${number}`) ; 

 }