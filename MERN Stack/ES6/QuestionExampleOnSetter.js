function main() {
    //create your class here with the name Account with all the private properties and getter
    // and setter
    class Account{
        accountNumber;
        balance  = 0;
            constructor(accountNumber ){
               this.accountNumber = accountNumber;
               
      
    }
        
        // now creating the getter 
       get getbalance(){
           return this.balance ; 
       }
    set getbalance(balance){
        
        if(balance >=0){
            this.balance = balance ; 
        }else{
           console.log("Please enter a positive value for the balance") ;  
        }
        
    }
        
        // creating the method deposit 
         deposit = function(numbers){
             
             // it will creating the function for the adding 
              this.balance += numbers ; 
             
             
         }
        
        withdraw = function(withdewAmount){
            
            // creating the codiation of insufficent 
            if(withdewAmount > this.balance){
             console.log("Insufficient balance");
            }else{
                 this.balance -= withdewAmount ; 
            }
        }
        
        
        
    }
  
    const myAccount = new Account("1234567890");
    myAccount.deposit(500);
    myAccount.withdraw(200);
    console.log(myAccount.getbalance); // output: 300
    //Do not modify the return statement
    return Account;
  }

  main();