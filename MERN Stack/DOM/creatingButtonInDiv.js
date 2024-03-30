// creating the button in the div using the creating element in the document 
const btn = document.createElement('button') ; 
btn.textContent = 'click hear' ; 
btn.className = 'creatingButton'  ; 

// this is the the append in the section and div try both to creating the button 
const sectionvalue = document.getElementById('black') ; 
const valuesetinDiv = document.querySelector('div') ;
// var children = sectionvalue.childNodes; 


// for (let i = 0; i < children.length; i++) {
//     var child = children[i];
//     if (child.nodeType === 1 && child.tagName.toLowerCase() === 'div') { // Check if the node is an element node and if it's a div
//         child.style.backgroundColor = 'lightgray'; // For example, change the background color
//         child.style.padding = '10px'; // Add padding
//         child.style.marginBottom = '10px'; // Add margin bottom
//     }
// }


 sectionvalue.appendChild(btn) ; 
 valuesetinDiv.appendChild(btn) ; 