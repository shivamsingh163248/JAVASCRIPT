

// least index of the searching form the last of the element 
const fruits = ["Apple", "Orange", "Apple", "Mango"];

console.log(fruits.lastIndexOf("Apple")) // if not found then return -1 ;

// again check the find method 
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first)