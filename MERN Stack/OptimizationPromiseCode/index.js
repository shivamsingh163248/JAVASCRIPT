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
    const id = searchInput.value ; 
    fetchData(id) ; 
    searchInput.value = '' ; 

 })


 // now append the element  of the input 


mainDiv.appendChild(button) ; 
 mainDiv.appendChild(searchInput) ; 



}

displayUser() ; 


// creating the function for the fetching the data form the api
async function  fetchData(id){
 // id taking form the user 
 //and the finding the data of the user 
 // creating the fetch and you also using the async wait 

 // applying the try catch for the getting any error and the get 
 // and the error are the resolved 

  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
 .then((response)=> response.json())
 .then((response)=>{

    // calling the the display user 
    userDisplay(response) ; 
 }) 

}


// creating the different approach  to solved the problem 
async function fetchDataUser(id){

 try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
     // in the async and await can directly use  the convert the jason 
     // creating the condition 
     const userJson = response.json() ; 
 }catch(err){

 }

}

function userDisplay(response){

     const userDataDisplay = document.getElementById('userDataDisplay') ; 
    // creating the div 
    userDataDisplay.innerHTML = " " ; 
    const userDiv = document.createElement('div') ; 
    // creating the id 
    userDiv.id = 'userDiv' ; 

    // creating the element h1 for the name 
    // creating the username and email address 
    // creating the address 
    const name = document.createElement('h1') ; 
    const email = document.createElement('h3') ;
    const username = document.createElement('h3') ; 
    const address = document.createElement('p') ; 


    // all the element in the 
    name.textContent = response.name ; 
    username.textContent = response.username ;
    email.textContent = response.email ; 

    // now append all the 
    userDiv.appendChild(name) ; 
    userDiv.appendChild(email) ; 
    userDiv.appendChild(username) ; 
 
    userDataDisplay.appendChild(userDiv) ; 



    
    


    
}

