// input is the email 
// email should be length greater then 11 
 // after the . only 2 and the 3 three Charter  are the allowed 
 // minium 3 chelator are allowed between . @

 const email  = prompt('enter the email') ; 

 // fist checking the email length 
  const emailLength = email.length ; 
 
  const emailDotIndex = email.lastIndexOf(".") ; 
  // again find the 