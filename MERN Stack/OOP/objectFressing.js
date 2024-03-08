// now learning the object frezing method this is not allow to check the proto of the parent object 

const school = {
    studentName : "shivam", 
    studentClass : "b.tech " ,

}


const newobj = Object.freeze(school) ; 
newobj.studentClass = "b.phram" ; 
newobj.schoolNmae = "vbspu" ; 


// so we can parent value are the 

console.log(newobj.studentClass) ; 
console.log(newobj.schoolNmae);