// now we are the learning the call apply and bind 

// now creating the object of the   as the sample 

const car = {
    name : "bus" , 
    color : "black" ,
    getDetails(seet , brand){
        // now printing on the console 
        console.log(`this is the name : ${this.name} color is the ${this.color}`) ; 
        console.log(`in the vehikal ${seet} name is brand ${brand}`) ; 
    }
}

// now we are the simple invoking the object 
car.getDetails(232,"toyta") ; 

// now learning the calling method in the object 
// creating the again object 
const cars = {
  name : "car" , 
  color : "blue" , 
}


// now again invoking the function using the call method 
car.getDetails.call(cars  ) ;
car.getDetails.call(cars  , 44543 , "mahendra" ) ; 

// ypu can see what is the difference between them 

// now using the apply method that take input of the in the arrays format 
car.getDetails.apply(cars ,[343 , "toyta"]) ; 



// now again creating bind 
const newobj = car.getDetails.bind(cars);
newobj(434,"honda") ; 
newobj(765 , "sujaki") ; 

