// input is the email 
// email should be length greater then 11 
 // after the . only 2 and the 3 three Charter  are the allowed 
 // minium 3 chelator are allowed between . @

  const email  = prompt('enter the email') ; 

  // fist checking the email length 
// const email = "s@gil.com" ; 

  const emailLength = email.length ; 
 
  const emailDotIndex = email.lastIndexOf(".") ; 
  // again find the the @  from the last index 
  const emailsymboeleLength = email.lastIndexOf("@") ; 

   console.log(emailLength) ; 
   console.log(emailDotIndex) ; 
   console.log(emailsymboeleLength) ; 


   // now creating the condition if any condition is the true then the show the inhaled email 

   if (emailLength < 11 ||  emailLength -  (emailDotIndex+1 )  < 2 ||  emailLength -  (emailDotIndex+1 )  > 3 ||emailDotIndex - emailsymboeleLength < 3) {
     console.log("invaled email ")
   }