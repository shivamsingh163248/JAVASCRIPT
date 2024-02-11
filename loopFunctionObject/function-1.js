

function isValid(str){

    // creating the condition for the checking the first index 
    if (!((str[0] >= 'a' && str[0]<='z') || (str[0] >= 'A' && str[0] <= 'Z' ) ||(  str[0] === '_' ) ||( str[0] === '$') )) {
        return false ; 
    }

    // now creating the loop 
    for (let i = 0; i < str.length(); i++) {
      
        // check the all the place of  of string to validate the chreacture 
        if (!((str[i] >= 'a' && str[i]<='z') || (str[i] >= 'A' && str[i] <= 'Z' ) ||(  str[i] === '_' ) ||( str[i] === '$') )) {
            return false ; 
        }
        
    }
    return true ; 
}




function isValidIdentifier(identifire){

          
   // noe calling the above function for the checking the validation 
   // we can also use the validation and the print the variable using the concatenation and the power symbol in the in java script 
 
    // creating the the if else condition 
    if (isValid(identifire) == true) {
        
        console.log(identifire+" is a valid identifier.");
    }else{
        console.log(identifire+" is not a valid identifier.");
    }


}
isValidIdentifier("myVariable"); // Logs: myVariable is a valid identifier.
isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
isValidIdentifier("_pr&ivate");