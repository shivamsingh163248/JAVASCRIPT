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



 // again creating the another function and the check the reducing the function 
 const test = arr.reduce((accumulatorstoring , currentvalue  , currentIndex) => {
     console.log( `accumlator ${accumulatorstoring} `+currentIndex) ;
     return accumulatorstoring+currentvalue ; 

 });

 console.log(test) ; 


 // one more test of the reducing function 

 // creating the blank arr 
 const newarr = []  ; 
 // now testing the reducing function 
const chekcWithBlnakArrys = newarr.reduce((accumulator , currentVlue) =>{ return accumulator ; } ,5)
console.log(chekcWithBlnakArrys) ; 
