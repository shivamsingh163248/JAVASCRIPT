// learning  the function like set time out and set time 
// interval function 
// fetch api 

const container = document.getElementById('container') ; 

// creating the h1 
// creating the button 

const h1 = document.createElement('h1') ; 
const button = document.createElement('button') ; 

h1.textContent = 'now creating the button ' ; 
button.textContent = "click hear" ; 

container.appendChild(h1) ; 
container.appendChild(button) ; 
const sen = document.createElement("p") ; 


// creating the event listen on the button 
button.addEventListener('click' , ()=>{
    // creating the some sentence
    
    sen.innerHTML = "this is the sentence click by the button  this is the automatically removed " ;
    container.appendChild(sen) ; 

     // creating the set time out function 
     // set time  have the two parameter 
     setTimeout(()=>{
         sen.innerHTML = '' ; 
     } ,2000)

     // creating the function of the set time interval 
     setInterval(()=>{
        sen.innerHTML = "this is the used the setinterval function " ; 
     } , 2000) ; 



})
