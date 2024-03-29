// creating the button in the div using the creating element in the document 
const btn = document.createElement('button') ; 
btn.textContent = 'click hear' ; 
btn.className = 'creatingButton'  ; 

// this is the the append in the section and div try both to creating the button 
const sectionvalue = document.getElementById('black') ; 
sectionvalue.appendChild(btn) ; 