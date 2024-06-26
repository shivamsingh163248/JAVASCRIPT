// creating the search of the user enter the user id and get the 
// search result 

// creating the html 
// creating the function display the user 
function displayUser(){

const mainDiv = document.getElementById('main-container') ; 
// now creating the element in the html for the search \
const searchInput = document.createElement('input') ; 
// creating the id of the input 
 searchInput.id = 'input-field' ; 
 // creating the input type 
 searchInput.type = 'text' ; 
 searchInput.placeholder = 'Enter the id' ; 
 searchInput.required = 'true' ; 
 searchInput.name = 'User-Id' ; 


 // now append the element  of the input 

 mainDiv.appendChild(searchInput) ; 



}

displayUser() ; 