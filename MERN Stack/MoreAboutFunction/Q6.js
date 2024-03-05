//Complete the totalorderValue function
// Do not alter the starter code
const orders = [
    {
      orderNumber: 1,
      items: [
        { name: "Cappuccino", price: 3.5 },
        { name: "Chocolate Croissant", price: 2.5 }
      ]
    },
    {
      orderNumber: 2,
      items: [
        { name: "Latte", price: 4.0 },
        { name: "Blueberry Muffin", price: 2.75 }
      ],
      discountCode: "COFFEELOVER"
    }
  ];
  function totalOrderValue(orders, applyDiscount){
    //Implement your function here
  //The function should return the total price after applying the discount.
  // creating the map function 
    const totalvalue = orders.map(

function(currentvale){
 
// in which we are the implement redue function thata are the calulate the total prise of the particual oreder
 var total = currentvale.items.reduce((accumlator , currentvale) => accumlator+currentvale.price , 0) ; 

 // now apply the discount of the total 
 // console.log(total) ; 
  if (currentvale.discountCode) {
    
    total =  applyDiscount(currentvale.discountCode , total) ; 
    
  }
  return total ; 
 


});

// again we are the calling   total value 
console.log(totalvalue) ; 
 return totalvalue.reduce((accumlator , customElements) => accumlator+customElements , 0).toFixed(2);



  }
  //define your callback function here to calculate the discount.

  // applyfunction take two parameter 
  function applyDiscount(couponCode , TotalValueofParticular){

    if (couponCode == "COFFEELOVER") {
        return TotalValueofParticular-(TotalValueofParticular*0.1 ) ; 
    } if (couponCode == "TEALOVER") {
        return TotalValueofParticular - (TotalValueofParticular*0.2 ) ; 
    } else {
        return TotalValueofParticular ; 
    }

  }

   console.log(totalOrderValue(orders , applyDiscount)) ; 


