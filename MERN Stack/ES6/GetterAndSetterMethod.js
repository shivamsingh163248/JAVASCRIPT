// learning the setter and getter method in the js 
// creatin the class learning the set and get thease are the getter and and teh setter in the java secript 

class Student{
    // creating the private and public member 
    usernaem ; 
    userDetails ; 
    userRollNo ; 

    // creating the constructor for the setting the the value 
    constructor(usrrName , userDetails , userRollNo){
        this.usernaem = usrrName ; 
        this.userDetails = userDetails ; 
        this.userRollNo = userRollNo ; 
    }

    // creating the function 
    get DetailsuserRollNo(){
        return this.userRollNo ; 
    }

    // now set the value of the userName 
    set DetailsuserRollNo(userRollNo){
        this.userRollNo = userRollNo ; 
    }

}

// now checking main function 

// creating the object of the main class 
const obj = new Student("shivam singh " , "b.tech" , "333434") ; 

console.log(obj.DetailsuserRollNo) ;  // not used the bracket in the in the get method 

// now i want to changed to the value using the set that means setter 
obj.DetailsuserRollNo = "54544" ; 
// now printing on the console the value 
console.log(obj.userRollNo);
console.log(obj.DetailsuserRollNo);