// now learning the class and difference between them 
// creating the class name is the class but in creating the normal coustoctur   

// now creating the constructor 
function Student(username , userDetals ){
    this.username = username ; 
    this.userDetals = userDetals ; 
    this.getDetails = function(){
        console.log(`this is username : ${this.username} and user Details : ${this.userDetals}`) ; 
    }
}


// now learning the class how to actually implement class 

// now the learning the class expression 
const classnames  = class {
    
}


// class Declaration 
class StudentDetails {

    username ; 
    userDetails ; 
    userAddress ; 

    constructor(username , userAddress , userDetails){
     
        this.userAddress = userAddress ; 
        this.userDetails = userDetails ; 
        this.username = username ; 
    }

    // creating the function in the class 
    // when we are the creating the function not write the function name 
   getDetails(){

    console.log(`username : ${this.username} , userDetails : ${this.userDetails} , userAdress : ${this.userAddress}`) ; 
       
    }

}

// now creating the object of the student details 

const check = new StudentDetails("shivam singh " , "nadiahr rajgarh" , "computer Science") ; 

console.log(check) ; 
check.getDetails() ; 

// creating the object of 
 const stu = new  Student("shivam" , "computer science") ; 
 console.log(stu) ; 
 stu.getDetails() ; 

