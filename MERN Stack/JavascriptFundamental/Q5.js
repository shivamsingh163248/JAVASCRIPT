
const productList = [
    { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
    {
      id: "p2",
      name: "Oranges",
      category: "Fruits",
      price: 1.99,
      inStock: false
    },
    {
      id: "p3",
      name: "Blueberries",
      category: "Fruits",
      price: 4.99,
      inStock: true
    },
    {
      id: "p4",
      name: "Carrots",
      category: "Vegetables",
      price: 1.0,
      inStock: true
    },
    {
      id: "p5",
      name: "Tomatoes",
      category: "Vegetables",
      price: 1.5,
      inStock: true
    }
  ];
  function searchAndBuyProduct(arr , string){
    //Implement Your function here.
   // creating the find , or findIndexMethod and return the object for the purching 
    return arr.find((currentvalue) =>{
        if(currentvalue.name === string && currentvalue.inStock == true){
            currentvalue.inStock = false ; 
            return currentvalue ; 
        }
    })
  }


  // now calling the function and function some thing is returning 
  const result = searchAndBuyProduct(productList ,"Tomatoes" ) ; 
  console.log(result);