function main() {
    let userAuth = (function () {
      let registeredUsers = [];
  
       // creating the function 
       function registerUser(username , password){
         // creating the conation 
         if(checkCredentials(username,password)){
            console.log("The user is already registered") ; 
         }else{
            registeredUsers.push({username: username , password:password });
            console.log("The user have been added to the registeredUser array");
         }

       }

       // calling the function checkCridaional
       function checkCredentials(username , password){
             
        // creating the logic to check 
        // creating the loop 
        for (const i in registeredUsers) {
            
            // creating the condition 
            if (registeredUsers[i].username === username && registeredUsers[i].password === password) {
                return true ; 
            }
        }
        return false ; 
             
       }

       return {registerUser : registerUser} ;
         

  
      
    })();
    return userAuth;
  }
  