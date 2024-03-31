// creating the java script and learning the event listoner and the check the remove element '
const btn = document.createElement('button') ; 
btn.textContent = 'click hear' ; 
btn.className = 'newButton' ; 

// Fetching the id of the h2 from the html and remove the h2 using the java scripts in the js 
  document.getElementById('heading2').remove() ; 

  // noe setting the button in the div heading 
  // fetch details from the html through the id 
  const mainHeading = document.getElementById('heading') ; 
  mainHeading.appendChild(btn) ; 

  // now creating the event listener 
// fetch the paragraph from the html 
const para = document.getElementById('para') ; 
// using the event listoner in the para 
para.addEventListener('click' , function(){
    alert("this is the paragaph ") ; 
})
  
