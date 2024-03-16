// now creating the class that name is of the student 
class studentDetails{

    // creating the memeber 
    StudentName ; 
    StudentClass ; 
    #StudentRollNO ; 

    // Creating the coustoctur  of the all the member 
    constructor (StudentName , StudentClass , studentRollNo){
     this.StudentName = StudentName ; 
     this.StudentClass = StudentClass ; 
     this.StudentRollNO = studentRollNo ;  // that will assuimg the new property 
    }
}


// now creating the object of this class and check the object how actually are the working 
const obj = new studentDetails("Shivam singh " , "B.tech" , "205569") ; 
console.log(obj) ; 