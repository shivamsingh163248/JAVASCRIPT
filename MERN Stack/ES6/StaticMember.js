// now learning the private member 
class Details{

    // creating the coustoctur 
    username ; 
    userclass ; 
    static value = "static name " ; 
    constructor(username , userclass , value){
        this.username = username ; 
        this.userclass = userclass ; 
       
    }


}

// creating the object of the these class 
const checkObj = new Details("shivam" , "b.tech" , "343") ; 
console.log(checkObj) ; 
console.log(checkObj.userclass) ; 
console.log(checkObj.value) ; 

// check the value using invoking with the class 
console.log(Details.value) ; 

