const number = 400 ;  // hear its dedect the and change in the type of the number
console.log(number) ; 
console.log(typeof(number)) ; 

// creating the using the obj
const NewNumber = new Number(450) ;  // it is the fix type of the number 
// now print and the check what is the type 
console.log(NewNumber) ; 

// now change to string 
console.log(NewNumber.toString())
// check the type 
const NewNumberStr = NewNumber.toString() ; 
// and the print the type of 
console.log(typeof(NewNumberStr)) 

// now check the lenght of the string 
console.log(NewNumberStr.length)

// using the fix function 
console.log(NewNumber.toFixed(2))


const otherNumber = 4564.87 

// now using the function of the two Persian 
console.log(otherNumber.toPrecision(5))
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000 ; 

// now convert in the india and american standerd 
console.log(hundreds.toLocaleString('en-IN')) ; 

// check for the min and max values 
console.log(Number.MIN_VALUE) ; 
console.log(Number.MAX_VALUE) ; 

// write all the function which are the use in the frequents 


//write the math library most frequent used 
// i wite the some 
console.log(Math)
console.log(Math.floor(45.67)) ;  // compared foolr round abs 
console.log(Math.round(565.7878))
console.log(Math.abs(-5)) ; 
console.log(Math.ceil(4.2)) ; 
console.log(Math.sqrt(25)) ; 
console.log(Math.pow(5,2)) ; 
console.log(Math.min(5,7,5,4,8))
console.log(Math.max(5,7,5,4,8))

console.log(Math.random()) // values lies 0-1 
console.log(Math.random()*10)
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)) ; 
console.log(Math.floor(Math.random()*10+1)) ; 

// find the values in the range 
const min  = 90  ; 
const max = 120  ; 

console.log(Math.floor(Math.random()*(max-min +1))) ; 
console.log(Math.floor(Math.random()*(max-min +1)+min)) ; 