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


 // now creating the button of the submit 
 const button = document.createElement('button') ; 
 button.textContent = 'submit' ; 


 // creating the event listener on the button 
 button.addEventListener('click',()=>{
    console.log(searchInput.value) ; 

 })


 // now append the element  of the input 


mainDiv.appendChild(button) ; 
 mainDiv.appendChild(searchInput) ; 



}

displayUser() ; 


// creating the function for the fetching the data form the api
function fetchData(id){

 // id taking form the user 
 //and the finding the data of the user 

 // creating the fetch and you also using the async wait 
 

}