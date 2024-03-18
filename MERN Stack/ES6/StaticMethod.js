// creating the class od the student 
class student{

// creating the constroctur of these class 
constructor(username){
    console.log(`my name is ${username}`)
}

// creating the static method 
static printDetails(){ // you car write  the method like the 
   console.log("this is the static method ") ; 
   console.log("you can check the static method " ) ; 
}

Details(){
    console.log("this is the normal method ") ; 

}

typeDetailsMehtod = function(){
    console.log("this is the the changed the type method ") ; 
}


}

// now creating the 
const checkObject  = new student("shivam") ; 
console.log(checkObject) ; 
checkObject.Details() ; 
checkObject.typeDetailsMehtod() ; 

// now again calling the 
// checkObject.printDetails() ; 
// static method of the directly call the with class name 
student.printDetails() ; 