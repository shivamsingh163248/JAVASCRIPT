// now learning the reduce fucnti
// reduce function have the three parameter 

// reduce function hava the two value 

//  reduce(reduceFun , insialvalue)

// reducation function have the four  parameter 
 // reudcefunction(accumulator  , currentVlue , currentIndex , arr) 


 const arr = [3,4,5,6,78,5,3,24,2] ; 

 function adding(accumulator , currentVlue , currentIndex ){
    return `${accumulator+currentVlue} index : ${currentIndex} => ` ; 
 }

 const result = arr.reduce(adding) ; 
 console.log(result) ; 