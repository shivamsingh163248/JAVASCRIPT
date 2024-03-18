// creating the constructor function 
function Vehikals(VehikalsNmae , vahikalsType , vehikalNumber){
   this.VehikalsNmae = VehikalsNmae ; 
   this.vahikalsType = vahikalsType ; 
   this.vehikalNumber = vehikalNumber ; 


   // creating the function of the getDeials 
   this.getdetails = function(){

    // all the details of the vehikals are printid on the console
    console.log(`vehikals name is ${this.VehikalsNmae} and the type is ${this.vahikalsType} and the number is ${this.vehikalNumber}`) ;
    
 
   };

 

}

// creating another counstoctor another function 
// and using vehikal in the class 

function Car(CarName , CarHub){
    // creating the car properties 
    this.CarName = CarName ; 
    this.CarHub = CarHub  ; 

    // if want to user 
    // using the call function using the this property to user like inheritance 
    console.log(`vehikals name is ${this.VehikalsNmae} and the type is ${this.vahikalsType} and the number is ${this.vehikalNumber}`) ;
    console.log(`CAR NAME ${this.CarName} carhub ${this.CarHub}`) ; 


}

// creating the object of the car 
const obj = new Car("Z-20" , "toytaShow room") ; 