// now creating the function 



// now creating the function for the return the total calculation 



const shipingCart = ( function(){
    let cart = [] ; 
    let Total = 0 ; 
  

function totalPrice(){

    // apply the reduce function for the getting the value 
 Total =  cart.reduce((total , curr)=>  total + curr.price , 0);

}

// creating the function of the adding the element 
// creating the three function 
 return {
     addItem : function(item){
  cart.push(item) ;
  // then calculated the total prise 
  totalPrice() ; 
 //  DisplayElement() ;  

},

// creating the function to get total 
 getTotal : function(){
    // creating the function 
    return Total ; 
},

// creating the function to return the arrays 
getCart : function(){
    return cart ; 
}
 };
})() ; 


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
   
    // creating the element for the total prise '
 const total = document.createElement('h1') ; 
 total.textContent =`Total Product : .....................${getTotal()}`  ; 
 container.appendChild(total) ; 
 


    ElementMain.appendChild(container) ; 
}
DisplayElement() ; 
