// now we are the learning how actually work object created test with two metrology 

// creating the simple object and in the object created the function 

const student = {
    getstudentvalue(studentname){
        console.log(`student name is ${studentname}`) ; 
    },
    collage : "vbspu"  , 
    collageDetails : function(){
        console.log(`the college name is ${this.collage}`) ; 
    },
}



// again creating the coustoctur
// we can see the difference between them 

function studentCounstoctur(){
    this.getstudentvalue = function(studentname){
        console.log(`student name is ${studentname}`) ;
    }
    this.collage = "vbspu"  ;
    this.collageDetails = function(){
        console.log(`the college name is ${this.collage}`) ; 
    }
}


 // now we are the adding interface in both 

 studentCounstoctur.prototype.studentClass = "b.tech" ; 
 student.studentclass  = "b.tech" ; 

 // now inheritng the both way to simple way and counstoctur way 

 const  stu = new studentCounstoctur() ; 
 console.log(stu.studentClass) ; 
 console.log(student) ; 
 const newStudentObj = Object.create(student) ; 
 console.log(newStudentObj) ; 



 // now learning the created object in the java secipts 

 const objectCreateds = Object.create(student) ; 
 console.log(objectCreateds) ; 
 console.log(objectCreateds.collage) ;
 objectCreateds.getstudentvalue("shivam") ; 
 
 

 // counstur method calling in proto 


//..................................................................................................
//..................................................................................................

// important this is the vary important 

    console.log( studentCounstoctur.prototype.studentClass);
    console.log( studentCounstoctur.prototype.collage);



// now test the assign how to use a assign 
