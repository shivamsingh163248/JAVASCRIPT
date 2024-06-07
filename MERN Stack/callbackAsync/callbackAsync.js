// learning the call  back function how actually work 

function result(){
// calling the time out api 
setTimeout(()=>{

console.log('hello world') ; 

},1000) ; 

}

// creating the next function for the for the welcome the message 

function welcome(){
    console.log("welcome to learning the callback ") ; 
}

// now calling the function 
result() ; 
welcome() ; 





//*************************************************** */

// this function to writing the different way to use this 

function result1(callback){
    // calling the time out api 
    setTimeout(()=>{

    
    console.log('hello world') ; 
    callback() ; 
    
    },1000) ; 
    
    }
    
    // creating the next function for the for the welcome the message 
    
    function welcome2(){
        console.log("welcome to learning the callback ") ; 
    }
    
    // now calling the function 
    result1(welcome2) ; 
   
    