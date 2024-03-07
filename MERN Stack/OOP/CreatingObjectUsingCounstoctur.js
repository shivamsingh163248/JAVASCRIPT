// hear we are the learning the method of the coustoctur based oop 

// pont 1 ; function name fist latter should be capital latter 
// pont 2 : if we are the creating the function the using the name this keyword of the function 
// creating the time of generation of the function 



// now lets learn how actually created the coustoctur in the java scripts 

function Movie(moviesName , MoviesTitle){

  this.moviesName = moviesName ; // this should be use the semicolon at that time of the counstoctur inisalization 
  this.MoviesTitle = MoviesTitle ; 

  this.getDetails = function() {  // this is the not have the name 
        
    console.log(` moviesName ${this.moviesName} movies title : ${this.MoviesTitle}`) ; 

  }

}


// now creating the object using the 

const movies1  = new Movie("kgf" , "south") ; 
const movies2 = new Movie("SLR" , "SOUTH") ; 


movies1.getDetails() ; 
movies2.getDetails() ; 

// this is the working the perfectly of the coustoctur based creating object 
