// creating the and learning the ajax the that are using the ashynous 
// that are the using for the call 

const request = new XMLHttpRequest() ; 

// creating the function for the sanding the data '
request.open('GET' , 'https://jsonplaceholder.typicode.com/users') ; 
// now using the sand method for the sanding the data 
request.send()  ; 
request.addEventListener('load' , ()=>{
    // now printing the request in the console on the 
   
    console.log(request.responseText) ; 
     // these are the change the stringify 
     console.log(JSON.parse(request.responseText)) ; 

     // now i want the  get the request in the xml formate 
     // request.responseXML ; 
     console.log() ; 

})
