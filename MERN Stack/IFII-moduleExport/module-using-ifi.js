// now creating the function 
let cart = [] ; 
let Total = 0 ; 


// now creating the function for the return the total calculation 

function totalPrice(){

    // apply the reduce function for the getting the value 
 Total =  cart.reduce((total , curr)=>  total + curr.price , 0);

}

// creating the function of the adding the element 
// creating the three function 
function addItem(item){
  cart.push(item) ;
  // then calculated the total prise 
  totalPrice() ; 
 //  DisplayElement() ;  

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


// now calling the additem 
addItem({id : 343 , product : "item "  , price : 54  }) ; 
addItem({id : 343 , product : "item "  , price : 4  }) ;
addItem({id : 343 , product : "item "  , price : 64  }) ;


const ElementMain = document.getElementById('container') ; 

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
       container.appendChild(element) ; 
        console.log(cart[key].id) ; 
    }
   



    ElementMain.appendChild(container) ; 
}
DisplayElement() ; 
