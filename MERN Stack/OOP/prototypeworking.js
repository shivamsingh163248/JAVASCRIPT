// now learning the prototype how acctually working 

function vehickals(vehikalName , color){
  
    this.vehikalName = vehikalName ; 

}


// now check the pototype 
console.log(vehickals.__proto__) ; 


// creating the obejct of vehivals 
const vehikal = new vehickals("bmw" , "red") ; 

vehickals.prototype.Design =  "red" ;

console.log(vehikal.Design) ; 
console.log(vehikal) // we can see not a copy of the counstroctur 


// again crating to add the prototype in the counstroctur in the js 
// now add the function in the js 

vehickals.prototype.getDetails = function(){console.log(`vehikal Design : ${this.Design} , vehicla name :  ${this.vehikalName}`)} ; 

// now inheriting the property 

vehikal.getDetails() ; 
console.log(vehikal) ; 