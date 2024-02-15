let shi = "shivamsingh"  ; 
const sp = shi.split("") ; 
console.log(sp.length) ; 
console.log(shi.substring(1)) ; 
console.log(shi.charAt(1)); 
console.log(shi.slice(4))



function reverseString(str){
    
    if(str.length == 0 ){
        return str ; 
    }
    
  const value  =  reverseString(str.substring(1))
   const final =  value + str.charAt(0)  ;
   return final ; 
    
    
    
    
}



console.log(reverseString("Hello"));