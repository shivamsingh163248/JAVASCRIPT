// creating the constructor function 
function Vehikals(VehikalsNmae , vahikalsType , vehikalNumber){
   this.VehikalsNmae = VehikalsNmae ; 
   this.vahikalsType = vahikalsType ; 
   this.vehikalNumber = vehikalNumber ; 


   // creating the function of the getDeials 
   this.getdetails = function(name){

    // all the details of the vehikals are printid on the console
    console.log(`vehikals name is ${this.VehikalsNmae} and the type is ${this.vahikalsType} and the number is ${this.vehikalNumber}`) ;
    console.log(name) ; 
 
   };

 

}

Vehikals.prototype.getAllDetails = function(){
    console.log("This is the  prototype") ; 
}

 


// creating another counstoctor another function 
// and using vehikal in the class 

function Car(CarName , CarHub){
    // creating the car properties 
    this.CarName = CarName ; 
    this.CarHub = CarHub  ; 

    // now using the calling the function 
    Vehikals.call(this , "4 viller" , "disul" , "4545") ; 

    // if want to user 
    // using the call function using the this property to user like inheritance 
    this.getdetails = function(name){

        // all the details of the vehikals are printid on the console
        console.log(`vehikals name is ${this.VehikalsNmae} and the type is ${this.vahikalsType} and the number is ${this.vehikalNumber}`) ;
        console.log(name) ; 
     
       };

}

// creating the object of the car 
const obj = new Car("Z-20" , "toytaShow room") ;


console.log(obj) ;
obj.getdetails("shivam ") ; 

