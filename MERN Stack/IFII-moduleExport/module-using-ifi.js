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


const div = document.getElementById('container') ; 

// creating the loop of 
// creating the function display Element 
function DisplayElement(){
    // creating the element 
    const container = document.createElement('div') ; 

    // creating the loop of the element and creating all the element list 
    for (const key in cart) {
       
       // creating the element and append and the container 
       const element =  document.createElement('h2') ; 
       element.innerHTML = `  id : ${cart[key].id} productName :  ${cart[key].product}   Price : ${cart[key].price} `  ; 

        
    }
}
