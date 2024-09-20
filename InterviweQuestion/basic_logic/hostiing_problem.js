// creating the learning the basic logic of the hosting 
shivam() ; 
var shivam = function(){
    console.log(1) ; 
}

// again creating the function for the checking the hosting 
function shivam() {
    console.log(2) ; 
}
shivam() ; 
shivam() ; 

// again creating the second loop for the testing the settime out 
// creating the for loop for the testing 
for (let i = 0; i < 5; i++) {
    
    // writing the set time out function 
    setTimeout(() =>console.log(i) , 2000) ; 
    
}