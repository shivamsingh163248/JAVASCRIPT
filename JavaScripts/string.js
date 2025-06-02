// now learning the all the concept of the string in the java script 
// simple the concat the string 
console.log("hi"+"boys") ; 
let SchoolName = "National Institute of Technology "
// string interpolation 
console.log(`my college name is ${SchoolName}`) ;

// creating the object of the string 
let MyName  = new String("My name is     shivam singh ")
console.log(MyName)
console.log(MyName[8]) // pas the key i think store in the key value pair 
console.log(typeof(MyName))
console.log(MyName.__proto__) ; 
console.log(MyName.length)
console.log(MyName.toUpperCase()) ; 
console.log(MyName) // not change in the origin sentance 
console.log(MyName.charAt(4)) ; 
console.log(MyName.indexOf('a')) ; 
// if do't muse mdn doc
console.log(MyName.split()) // starting it take negative values 
console.log(MyName.trim()) ; 
console.log(MyName.substring(1 ,5)) ; 

// test for the some url you give the all possibility 
const url = "https://github.com/shivamsingh163248?tab=overview&from=2024-12-01&to=2024-12-31"

console.log(url.replace('?tab=overview&from=2024-12-01&to=2024-12-31' , ''))

// check keyword are the avalabe or not 
console.log(url.includes("git"))

// let i convert in the arrays based on the space based on the des 
console.log(MyName.split(' '))

// write all the strig method with in the talble proper function name input output function working and feature 
// i want create a deep notebook about the string 