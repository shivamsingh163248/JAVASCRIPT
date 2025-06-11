// creating the basic arrays write all the moste use function in the table with the discription and input and output in the table with the proper formate 
// step sellowcopy share the same reference 
// deep copy do't share the same reference 
let arr = [7,6,7,5,6,5,6,5] ; 

// creating the loop 
console.log(arr) ; 
arr[0] = 1 ; 
console.log(arr) ; 
let arr1 = [4,6,4,5,4] ; 
arr = arr1 ; 
console.log(arr) ; 
console.log(arr.length)

// creating the loop 
for (const key in arr) {
   console.log(arr[key])
}

// check the of 
for (const element of arr) {
    console.log(element) ; 
}

// noramal for loop 

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(`this is the ans ${element}`)
}

// check the push and pop and sift and unshift operation inclide and indexof write all the most use function  .join 
// slice and splice 
// splice // change in the orinal arrays and include  the range  // after the splice only remaining element left in the origin arrays 


// creating the new arrays and 
let fruit = [] ; 

let Student_Details = [] ; 



// creating the push operation for the full fill the fruits 
fruit.push("Apple" , "banana") ;  // hear we can take the multiple input // also write function witch can take multiple argument and describe the each of the function related to multiple  argument 
console.log(fruit)
// check for the single input 
fruit.push("watermelon ")
// try add one more arrays in the arrays 
let juicy_Fruit =  ["lemon" , "orange" , "pineapple"]
let solid_fruit = {
    tree : ["sugarCan" , "coconut"],
    king : "Mango",
    
}

// now adding in the object 
fruit.push(juicy_Fruit) ; 
fruit.push(solid_fruit) ; 

// check for the length
console.log(fruit) ; // mean you can add every type of the deta in the arrys 

// creating the object of the every deta and push in the 
for (let i = 0; i < 10; i++) {

    // let creating the 10 deta to creating the object and add in the arrays 
    let Student_Roll = Math.floor(Math.random()*10+100) // three digit number
    let obj1 = {
        student_name : "shivam" , 
       Student_Rol : Student_Roll
    }

    // now push in the arrays 
    Student_Details.push(obj1) ; 
    
}

console.log(Math.random()) // math.randome fiven the values 0 between 0 to 1 

// print 
console.log(Student_Details)

const Roll_Number = [5456,5,4,53,6,64,5,3,5234,24,524,53,536,25,252,2,2,5265353,653,23635,6242,424,2,235,2634656,353,6,2525,26] ; 
// hear we apply and check the example and explore the function 
Roll_Number.pop()
console.log(Roll_Number) // lar elemant pop and also fetch the index wise 

// check for the shif and unshift
Roll_Number.unshift(4 , 6) ;  // take single and parameter and multiple for adding form the front 
console.log(Roll_Number) ; 
Roll_Number.shift() ;  // in the sfit if take any parameter 2 unshoft any thing explaine 
console.log(Roll_Number) ; 

// now use the join function 
let new_arr = fruit.join() ;  // change in the base arrays or not // its create in the string 
console.log(new_arr)
let new_arr_2 = fruit.join("nd") ; // if we want to add some thing between then add 
console.log(new_arr_2)


// Examples
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join();

// Another separator:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join(" and ");
// Description

// The join() method returns an array as a string.

// The join() method does not change the original array.

// Any separator can be specified. The default is comma (,).
// Syntax
// array.join(separator)
// Parameters
// Parameter 	Description
// separator 	Optional.
// The separator to be used.
// Default is a comma.


// write the difference of every relate function like join and cocnate and splice and slice ..like this and more 
// Syntax
// array1.concat(array2, array3, ..., arrayX)

const arr_1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr_1.concat(arr2, arr3); // check the change in the arr_1 or not 
console.log(arr_1) ; 
console.log(children)



// now explore the splice and splice 
const fruits_1 = ["Banana", "Orange", "Apple", "Mango"];


// Syntax
// array.forEach(function(currentValue, index, arr), thisValue)
// Parameters
// function() 	Required.
// A function to run for each array element.
// currentValue 	Required.
// The value of the current element.
// index 	Optional.
// The index of the current element.
// arr 	Optional.
// The array of the current element.
// thisValue 	Optional. Default undefined.
// A value passed to the function as its this value.
 function fr(current_values , index){
    console.log(current_values)  ; 
}

fruits_1.forEach(fr);

fruits_1.forEach(element => {
    console.log(element) ; 
});

console.log(fruits_1.slice(0,2)) // check the change in the orinal arrays or not and take include the last value or not 2
console.log(fruits_1)
// now using the splice 
console.log(fruits_1.splice(1,2)) // check the change in the orinal arrays or not and take include the last value or not 2
console.log(fruits_1)


// explore all the function 
// JavaScript
// JS Arrays
// Array[ ]
// Array( )
// at()
// concat()
// constructor
// copyWithin()
// entries()
// every()
// fill()
// filter()
// find()
// findIndex()
// findLast()
// findLastIndex()
// flat()
// flatMap()
// forEach()
// from()
// includes()
// indexOf()
// isArray()
// join()
// keys()
// lastIndexOf()
// length
// map()
// of()
// pop()
// prototype
// push()
// reduce()
// reduceRight()
// rest (...)
// reverse()
// shift()
// slice()
// some()
// sort()
// splice()
// spread (...)
// toReversed()
// toSorted()
// toSpliced()
// toString()
// unshift()
// values()
// valueOf()
// with()

// also wirte the refrence 
// https://www.w3schools.com/jsref/jsref_obj_array.asp

