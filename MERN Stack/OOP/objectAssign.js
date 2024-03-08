// now learning the object assign method 
// object.assign method have the two parameter in which frist one is the target and second one is the source we can also use 
// rest ...rest one or the more object insert as the target 

// creating the object 

const school ={
    schoolNmae : "vbspu" , 
    getschoolDetails(schoolname){
      console.log(`college name is ${schoolname}`) ; 
    }

}

const student ={
    studentNmae : "shivam singh ", 
    class : "b.tech" , 
    branch : "coumputer science engineering ",
    getStudentDetails : function (){
        console.log(`all the name ${this.studentNmae} ${this.class} ${this.branch}`) ; 
    }
}

// hear we are the writing the school and student both class in the mix way 

const schoolstudent = {

    StudetnDreamCollege : "IIT DELAHI" , 

}


// NOW we are the using object..assign method 

const newObj = Object.assign({} , student , school) ; 
console.log(newObj) ; 


// creating the second object and assign in the preDefine object 

const schStu = Object.assign(schoolstudent  , student , school) ;  // assign the in the same pre-defined object 
console.log(schStu) ; 
console.log(schoolstudent) ; 
