// now creating the event on the heading 
// and using the event listener on the heading 
document
 .querySelector('h1')
 .addEventListener('click' , ()=>{
   console.log('heading 3 clicked') ; 
 }) ; 


 // using the selector access the inner div 
 document 
  .getElementById('innerDiv') 
  .addEventListener('click' , ()=>{
    console.log('inner div are clciked') ; 
  })

  // also creating the event on the outer div 
  