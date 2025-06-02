// write all the data and time function and learning 
let myData = new Date() ; 
console.log(myData) ; 
// try to convert to string 
console.log(myData.toDateString()) ; 
console.log(myData.toString()) ; 
console.log(myData.toISOString()) ; 
console.log(myData.toLocaleDateString()) ; 
console.log(myData.toLocaleDateString()) ; 
console.log(myData.getMonth())

// write all the data and time function witch are the most frequent use 
let myNewData = new Date(2023 ,6,4) ; 
console.log(myNewData.toString()) ; 
console.log(myNewData.toLocaleString()) 

// if am pass the time in the data then check what changes i feel 
let myNewData1 = new Date(2023 ,6,4 ,5,7) ; 
console.log(myNewData1.toString()) ; 
console.log(myNewData1.toLocaleString()) 

// expore the more formate 
//yyyy-dd-mm
//yyyy-mm-dd
//dd-mm-yyyy

let myNewForamte = new Date("2023-02-4")
console.log(myNewForamte.toString()) 
console.log(myNewForamte.toLocaleString())
console.log(myNewForamte.getTime())

// write all the type 


// now exploring time stamp 
let myTimeStemp =  Date.now() ; 
console.log(myTimeStemp) ;
console.log(myTimeStemp/1000) ;



// data is the object 
let formateNewDate = new Date() ; 
console.log(formateNewDate.getTime())
console.log(formateNewDate.getFullYear())
console.log(formateNewDate.getMonth())
console.log(formateNewDate.getDay())


// alos using tolocalstring constmize like weeknd in long and timezone like 