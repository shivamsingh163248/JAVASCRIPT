// now learning the how creating the private member that are the not access out side of the scope 

// creating the class 
class student{

// creating the counstoctur 
constructor(){
    // set the name in the counstocter you can also left blank 
    
}

// nowcreating the private function 
#fetDetails = function(){
    console.log("my name is shivam singh ") ; 

}

// creating one public method use the private metnod 
getDetails = function(){
    this.#fetDetails() ; 
}

}

// creating the object 
const newobj = new student() ; 
// only privatemethod access within the class not the out side of the class 
console.log(newobj) ; 
// now calling the public method for the accessing the private object 
newobj.getDetails() ; 