// creating the no of the class ofr the learning inheritance 
class vehikals{

    // creating the coustoctur
    vahikalsType ; 
    willerNo ; 
    fuleTpye;

    constructor(vahikalsType , willerNo , fuleTpye){
        // now set the value of all the coustoctur 
        this.vahikalsType = vahikalsType ; 
        this.willerNo = willerNo ; 
        this.fuleTpye = fuleTpye ; 

    } 


    // creating the method of the getDetails 
    getDetaisl = function(){
        // now printing all the details 
        console.log(`vehikals type ${this.vahikalsType} and the vehikal No ${this.willerNo} and the type ${this.fuleTpye}`);
    }

}

// creating the another class 
class Car extends vehikals{
    CarName ;
    CarHub ; 
    Carluxary ; 
    constructor(CarName , CarHub , Carluxary){

        // now set all the value
        //now calling the super class
        super("Car" , "UP 32 1234" , "Petrol") ; 
        
        this.CarName = CarName ; 
        this.CarHub = CarHub ; 
        this.Carluxary = Carluxary ; 

    }

    // this function to use this 
    getDetaisl = function(){
        console.log(`Car name is ${this.CarName} and the hub is ${this.CarHub} and the car is ${this.Carluxary}`) ; 
    }
    // crating the function name getall details with all the parent class 
    getallDetails = function(){
        console.log(`vehikals type ${this.vahikalsType} and the vehikal No ${this.willerNo} and the type ${this.fuleTpye}`);
        console.log(`Car name is ${this.CarName} and the hub is ${this.CarHub} and the car is ${this.Carluxary}`) ; 
    }

    // hear we are the using this keyword


}


// now creating the object of the class 
const car = new Car("BMW" , "BMW" , "Luxary") ;
car.getDetaisl() ;
// now check the details of the car 
car.getallDetails() ;