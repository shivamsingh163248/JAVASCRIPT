
// creating unary operator 

let number = 5 ; 

   number/2 == 0 ? console.log("this is the even number")  : console.log("this is the odd number") ; 


   let num = 34.767 ; 


   let value  = `this is  ${num.toFixed(1)} number` ; 
    console.log(value) ; 
   console.log(typeof value) ; 

  let amount = 100 ; 
   let discount;

   // write your code here
   // hear we are the learning the from the switch statement using the true and false condition 
   
     switch(true){
     
     case(amount < 500) : {
         discount = "No Discount." ; 
         break ; 
     }
    case( 500 <= amount && amount < 1000) :{
         discount = "10% Discount." ;  
         break ; 
    }
    case( 1000 <= amount && amount < 2000) :{
         discount = "20% Discount." ;
         break ; 
    }
   case( 2000 <= amount && amount < 4000) :{
         discount = "30% Discount." ; 
         break ; 
   }
   case( 4000 <= amount && amount < 5000):{
         discount = "40% Discount." ; 
         break ; 
   }
     default : 
         discount = "50% Discount." ;  
         break ; 
     
     }

     console.log(discount) ; 