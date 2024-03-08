// now creating the coustoctur 

function Details(){
    this.username = "shivam"  ; 
    this.userpassward = "45454" ; 
}


// creating the object 

const studentDetails = {
    username : "shivam",
    userAddres : "nadiahr rajgarh mirazapur" , 
}


const obj1 = Object.create(studentDetails) ; 
// now update in the object1 ; 

obj1.userData = "english" ; 

console.log(obj1.username) ; 
console.log(studentDetails.userData) ; 


// if you want to update you coustoctur then we are the use prototype 