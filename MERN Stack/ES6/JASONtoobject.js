// using the stringfy to use 

const value = '{ "name": "Molecule Man","age": 29,"secretIdentity": "Dan Jukes","powers": ["Radiation resistance", "Turning tiny", "Radiation blast"] }'
// this jason value to convert into the object 
const convertingToObject = JSON.parse(value) ; 
console.log(value) ; 

console.log(convertingToObject.name) ;  // now converting object is the working 
      