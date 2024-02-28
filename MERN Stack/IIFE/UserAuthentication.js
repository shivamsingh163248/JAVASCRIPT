function main(){
  
    const userAuth = (
      //Implement your IIFE here 
      //It should return the registerUser function
        // creating the anominus function 
        function (){
            const arr = [] ; 
            return {
                registerUser : function (user , passwoed){
                    arr.push(userAuth.registerUser()) ; 
                }
                
            }
        }
        
        
        
        
    )();
      
  
  console.log(userAuth.registerUser("user1","password123"));
  //Output: The user have been added to the registeredUser array
  console.log(userAuth.registerUser("user1","password123"));
  //Output : The user is already registered
  return userAuth;
  }

