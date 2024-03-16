// now learning the private member in the class that is the encapsulation in the java script

// creating the class 

class student{
    studentName ; 
    studentClass ; 
    studentSubject ; 
    #studentbranch ; 

    // creating the counstrocter 
    constructor(studentName , studentClass ,studentSubject, studentBranch ){
    
        // now set all the properties 
        this.studentName = studentName ; 
        this.studentClass = studentClass ; 
        this.studentSubject = studentSubject ; 
        this.studentbranch = studentBranch ; 

    }

    // now creating the method that name is the getdetils 
     getDetails = function(){
        console.log(this.studentName);
        console.log(this.studentClass);
        console.log(this.studentSubject );
        console.log(this.#studentbranch);
     } 
}

// now creating the object 
const obj = new student("shivam singh" , "b.tech" , "cse" , "computerScienceand ENGINEERING") ; 
obj.getDetails() ; 

// NOW I want to update details 

// obj.#studentbranch = "machinkal enginnering" ; // Property '#studentbranch' is not accessible outside class 'student' because it has a private identifier.ts(18013)
// this is not accessbal out side of the object 