let arr = [74,8,3,7,0,4,23]
let arr1 = [4,6,4,3,2,4,23]

// concat and spred operatior 
console.log(arr.concat(arr1)) ;
let newar = arr.concat(arr1) ; 
console.log(newar)


// spread  arrays 
console.log([...arr , ...arr1])



// soleved and 

const another_arr = [5,[6,4,6,4],[6,4,[12,[1,1],5,4],7,869,5],[43467,8,[64,4,65],3],23,]

// creating the flat 
console.log(another_arr.flat(1))
console.log(another_arr.flat(2))
console.log(another_arr.flat(3)) // parameter is the depth of the arrays 


// write all the propery of the arrays function heare is few example 
// check is the isArrys or not 
console.log(Array.isArray("shivam"))
console.log(Array.from("shivam"))
console.log({name : "shivam"}) // write a correct to convert using the key and all 

let score1 = 5 ; 
let score2 = 6 ; 
let score3 = 7 ; 


// convert is in the arrys 
console.log(Array.of(score1 , score2 , score3))