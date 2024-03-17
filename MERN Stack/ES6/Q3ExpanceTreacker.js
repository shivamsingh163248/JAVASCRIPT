//complete the ExpenseTracker class.
// Do not alter the starter code
function main() {
    class ExpenseTracker {
      //Create your private properites here
        #expenses  ; 
        #income ; 
      //Create a constructor function
        constructor (income){
    this.#income = income ; 
    this.#expenses  = new Array() ; 
    }
      //create your private properties to calculate expenses
        #calculateTotalExpenses = function(){


             var totalvalue = 0 ; 

            for (const i of this.#expenses) {
                totalvalue += i.amount ; 
               //  console.log(i) ; 
            }
          //  console.log(totalvalue) ; 


            
           
          

            return totalvalue ; 
            
            
        }
      //Create your public properties here
        addExpense = function(name, amount, date){
            
            // creating the object and push into the arrys 
            const obj = {
                name:name , 
                amount:amount,
                date:date
            }
         //   console.log(obj) ; 
           this.#expenses.push(obj) ; 
            
        }
        calculateBalance = function(){

            // now calling the private member 
            const total  = this.#calculateTotalExpenses() ; 
          
            const allvalue = this.#income - total ; 
            console.log(allvalue) ; 
            
        }
    }
    //The class should function accordingly.
    const tracker = new ExpenseTracker(5000);
    tracker.addExpense("Rent", 1000, "2021-10-01");
    tracker.addExpense("Groceries", 500, "2021-10-02");
    console.log(tracker.calculateBalance()); // should output 3500
    return ExpenseTracker;
  }
  
  main() ; 