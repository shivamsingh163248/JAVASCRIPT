
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

  userData(myArr) ; 

  console.log(myArr) ; 
  console.log(myArr.length) ; 
 

  for (const key in myArr) {
    
       console.log(myArr[key].name) ; 
        

  }
  
  

    // find the length of the response 
    

  }


  // now creating the function for the creating the html 

  function userData(myArr){
    // this function use to creating the element and using the 
    // jason to display the picture 

    // fist find the length 

      const mainContainer = document.getElementById('main-container') ; 


        for (const key in myArr) {
           
            const userId = document.createElement('div')
            const name = document.createElement('div') ; 
            const username = document.createElement('div') ; 
            const email = document.createElement('div') ; 
            const container = document.createElement('div') ;
            const address = document.createElement('div') ; 

            container.id = 'sub-container';

            // creating the id of the each 
            userId.id = 'id' ; 
            name.id = 'name' ; 
            username.id = 'username' ; 
            email.id = 'email' ; 
            address.id = 'address' ; 

            // now append all the element 
            userId.textContent = `userID : ${myArr[key].id} ` ;
            name.textContent = `Name  : ${myArr[key].name} ` ; 
            username.textContent = `userName : ${myArr[key].username} ` ; 
            email.textContent = `Email : ${myArr[key].email} ` ;  

            const addressObject  = myArr[key].address ; 
            address.textContent = `address : ${addressObject.street} ${addressObject.suite} ${addressObject.city} ${addressObject.zipcode}  ` ;  

            
                

            // creating the loop 
         

           console.log(addressObject);

            container.appendChild(userId) ; 
            container.appendChild(name) ; 
            container.appendChild(username) ; 
            container.appendChild(email) ; 
            container.appendChild(address) ; 

            mainContainer.appendChild(container) ; 


        }

     





  }


  

  
