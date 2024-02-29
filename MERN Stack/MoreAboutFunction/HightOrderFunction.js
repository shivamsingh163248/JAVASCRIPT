// learning the hight order function in the js 

// simple function 

 const arr = [3,6,6,5,3,2,6,8,7,5,3,2,9,7,6] ; 

 //now printing the value 
 for (const i of arr) {
    console.log(i) ; 
 }

 // creating the function of the square and qube 

 function square(number){
    const sqe = [] ; 
    for (const i in number) {
       sqe.push(number[i] *number[i]  ) ; 
    }
    return sqe ; 
 }


 // now creating the another function of the qua

 function quab(number){
    const sqe = [] ; 
    for (const i in number) {
       sqe.push(number[i] *number[i] *number[i] ) ; 
    }
    return sqe ; 
 }


 // calling function 

//  const newarr = square(arr) ; 

//  for (const i of newarr) {
//     console.log(i) ; 
//  }


// creating the hight order function *******************************************************


// creating the sqare function 

function squar(num){
    return num*num ; 
}

function quabevalue(num){
    return num*num*num ; 
}


// creating the function number mainipulation function 

function numberManupulation(num , fun){

    // creating the for loop for the printing according the requirement 
    const arr = [] ; 
    for (const i of num) {
        arr.push(fun(i)) ; 
    }
    return arr ; 

}

