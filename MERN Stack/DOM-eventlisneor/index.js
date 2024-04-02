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



