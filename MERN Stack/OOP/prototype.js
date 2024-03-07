// now learning the prototype 


// creating the simple the coustoctur in js 

function Student(name , rollno){
    this.usename = name ; 
    this.rollno = rollno ; 

    // creating the function for the return and display the user name and the roll no 
    this.getdetails = function(){
        console.log(`username  : ${this.usename} roll no : ${this.rollno}`) ; 
    }
}


// now set the value 
const student1 = new Student("shivam" , 205569) ; 
// now consoling the value 
console.log(student1) ; 
console.log(student1.getdetails) ;
student1.getdetails() ; 


// now set the value in the student 1 

student1.address = "nadihar rajgarh mirzapur" ; // this line to important 

// now again invoking the the student1 and check its set or not 

console.log(student1) ; 
console.log(student1.address) ;



// again creating the different object of the this function 
const student2 = new Student("itisha" , 54545) ; 
// now consoling the value 
console.log(student2) ; 



//...................................................................................
//..................................................................................

// now checking the prototype of the both object 

console.log(student2.__proto__.__proto__) ; 
console.log(student2.__proto__) ; 


//...................................................................................
//..................................................................................


function Game(name, platform) {

    this.name = name;
    
    this.platform = platform;
    }

    const fifa = new Game("FIFA 23", "PlayStation")

    console.log(fifa.__proto__ === Game.prototype);
    console.log(fifa.__proto__.__proto__ === Object.prototype);

