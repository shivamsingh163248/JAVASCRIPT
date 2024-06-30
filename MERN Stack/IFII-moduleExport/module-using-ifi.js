// now creating the function 
let cart = [] ; 
let Total = 0 ; 


// now creating the function for the return the total calculation 

function totalPrice(cart){

    // apply the reduce function for the getting the value 
 Total =  cart.reduce((total , current)=>  total+current , 0);

}

// creating the function of the adding the element 
// creating the three function 
function addItem(item){
  cart.push(item) ;
  // then calculated the total prise 
  totalPrice() ;  

}

// creating the function to get total 
function getTotal(){
    // creating the function 
    return Total ; 
}

// creating the function to return the arrays 
function getCart(){
    return cart ; 
}