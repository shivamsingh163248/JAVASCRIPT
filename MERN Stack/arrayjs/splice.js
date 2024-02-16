// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits) ; 
fruits.splice(0, 2 );
console.log(fruits) ; 
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits) ; 

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruitss.splice(0, 1);
console.log(fruitss);
fruitss.splice(2, 1, "Lemon", "Kiwi");
console.log(fruitss);