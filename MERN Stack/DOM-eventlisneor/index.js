// creating the all the html part using the java scripts 
const para  = document.createElement('p') ; 
// now creating the class name of the para 
para.innerHTML ='this is the paragraph line  my am trying to learning the the event listener' ; 
// now adding the class name of this paragraph
para.className ='para'
// creating the setattribure

para.setAttribute('id' , 'paragraph');

// now paragraph the append in the parent div 
// accessing the id using the doc id 
const div = document.getElementById('main') ; 

// now append child in the div 
div.appendChild(para) ; 

// creating the color of the event listener creating on the paragraph

// creating the event on the click 
// creating the heading of my name 
const heading = document.createElement('h1') ; 
// creating the id name 
heading.innerHTML = 'Shivam singh ' ; 
heading.className = 'heading-shivamsingh' ; 

// now this heading is the append in main 
div.appendChild(heading) ; 

// creating the button in the  div also 
// creating the button 
const button = document.createElement('button') ; 
button.textContent = 'remove shivam singh ' ; 
// set the class name in the the button 
button.className = 'button-name' ; 

// append in the div 
div.appendChild(button) ; 

button.addEventListener('click',()=>{
    heading.remove() ; 
})

// creating the event listener in the paragraph 
para.addEventListener('mousedown' , ()=>{
    para.style.backgroundColor ='yellow' ; 
})
para.addEventListener('mouseup' , ()=>{
    para.style.backgroundColor ='green' ; 
})



//  creating the some event listener 
document.body.addEventListener('keydown',(event) => {
     console.log('keypressed shivam ') ; 
     console.log(event.type) ; 
     // creating the type of the event key 
     console.log(event.key) ; 
})




