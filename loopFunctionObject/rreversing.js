let shi = "shivam "  ; 

console.log(shi.substring(1)) ; 
console.log(shi.charAt(1)); 


function reverseString(str){
    
    if(str.length == 0 ){
        return str ; 
    }
    
  const value  =  reverseString(str.substring(1))
   const final =  value + str.charAt(0)  ;
   return final ; 
    
    
    
    
}



console.log(reverseString("Hello"));