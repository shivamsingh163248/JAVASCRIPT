// creating the two class 
class cat{
    // creating the constructor of the cat class take one parameter 
    username ; 
    constructor (username){
      this.username ; 
    }

    // creating the method that name is the 
    spark(){
        console.log(`cat is braking ${this.username}`) ; 
    }

}
class dog{
    username ; 
    constructor (username){
      this.username ; 
    }

    // creating the method that name is the 
    spark(){
        console.log(`dog is braking ${this.username}`) ; 
    }



}

// creating the counstoctur 
function animal(animalname){

    this.animalname = animalname ;

    check = function(){
        if(this.animalname == "dog"){
            return new dog("dog") ; 
        }else if(this.animalname == "cat"){
            return new cat("cat") ; 
        }else{
            return null ; 
        }

    }
 

}


// now calling the check 
