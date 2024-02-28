
// creating the iifi and creating the object 

var result = (
    function(){
        var num = 10 ; 
        return {
            increment : function(){
                num++ ; 
            } , 
            getDetails : function(){
                console.log(num) ; 
            },

        };
    }
)() ; 

// now testing the all the function 
result.increment() ; 
result.increment() ; 
result.getDetails() ;
