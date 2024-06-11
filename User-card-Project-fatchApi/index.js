
// now using the xmlhttp request using the fetch the api and 
// and showing and the using 

  // using the require 


  const request = new XMLHttpRequest() ; 


  

  // now fetch the request 
  request.open('GET' , 'https://jsonplaceholder.typicode.com/users');
  request.send() ; 
  request.onload = function(){
  const value =  request.responseText ; 
  console.log(value) ; 
  const myArr = JSON.parse(value) ; 
  console.log(myArr) ; 
  console.log(myArr.length) ; 
 

  for (const key in myArr) {
    
       console.log(myArr[key].name) ; 
        

  }
  
  

    // find the length of the response 
    

  }


  // now creating the function for the creating the html 

  function userData(){
    // this function use to creating the element and using the 
    // jason to display the picture 
    

  }


  

  
