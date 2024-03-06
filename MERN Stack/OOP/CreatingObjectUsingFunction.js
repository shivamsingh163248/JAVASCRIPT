
//learning the set the object value using the function 

function StudentDetails(names , mobile , address){

   const detail = {
    username : names  , 
    mobile : mobile , 
    address : address , 

   printDetals(){
    console.log(this.address+" "+this.mobile+" "+this.username) ; 
   }

   }

   return detail ; 

}

// now calling the function and set the details in the function 
const shivam = StudentDetails("shivam" , 43553553 , "nadiahr rajgarh mirzapur") ; 
const itisha = StudentDetails("itisha" , 3937837 , "rajgarh mirzapur") ; 

shivam.printDetals() ; 
itisha.printDetals() ; 



// this is the type of the function that are the handeling the oops concept in the js 

// now again we are the learning the the constructor based oop using the new keyword  