

function isValid(str){

    // creating the condition for the checking the first index 
    if (!((str[0] >= 'a' && str[0]<='z') || (str[0] >= 'A' && str[0] <= 'Z' ) ||(  str[0] === '_' ) ||( str[0] === '$') )) {
        return false ; 
    }

    // now creating the loop 
}




function isValidIdentifier(identifire){

          
   
 

}
isValidIdentifier("myVariable"); // Logs: myVariable is a valid identifier.
isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
isValidIdentifier("_pr&ivate");