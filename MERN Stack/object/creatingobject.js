
// creating the variable type and name of the object and the key and the write the value in the object 

// simpleclass 

const className = {
 classteaher : "shivamsingh" ,
 id : 34353 , 
postion : "lavel1"


}

// now printing the key of that class using for in loop 

for (const key in className) {
         console.log(key);  
        
    }


// now printing the value and class name both 
for (const key in className) {
    console.log("class name : "+key+" - "+className[key]);   // this is the preferable method 
   
}

// also using the . method the access the value 

console.log(className.id)  ; 


