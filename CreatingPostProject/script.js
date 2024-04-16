//Complete this JS file to render the post1 on the screen with all the specified tags.
let post1 ={
    id: 1, 
    author: 'John',
    content: 'My first Post!', 
    likes: 10, 
    comments: ['Great post!', 'Nice photo!'], 
    image: 'https://files.codingninjas.in/image2-28694.jpg' 
};
// creating the destructor of the post1
const{id,author,content,likes,comments,image} = post1 ; 

// creating the object of the taking input from the document form the 
// html 
let commentLength = comments.length ; 



const posts = document.getElementById('posts') ; 

// creating the div with the id post 
const div1 = document.createElement('div') ; 
div1.className = 'post' ; 


// creating the element of the h3 
const h3 = document.createElement('h3') ; 
// its contain the author name 
h3.textContent = author ; 

// creating the image 
const img = document.createElement('img') ; 
// set the id on this images 
img.id = "myimg" ; 
// now set the src ; 
img.src = image ; 

// creating the p in the in the div 
const p = document.createElement('p') ; 
// in this is the contest 
p.textContent = content ; 


// creating the button and input and then button 

const likeButton = document.createElement('button') ; 
likeButton.textContent = "Like" ; 
const commentButton = document.createElement('button') ; 
commentButton.textContent = "Comment" ; 
// creating the input tag which contain that text 
const inputComment = document.createElement('input') ; 
inputComment.type = 'text' ; 
inputComment.id = 'comment' ; 
inputComment.required = true; 

 


// creating the event listener 
commentButton.addEventListener('click', ()=>{

    

    const x = document.getElementById("comment").value;
    // this value add in the arrys 
    console.log(x) ; 
      if (x !=='') {
        comments.push(x) ; 
        commentLength++ ; 
        likecomment() ; 
      }

   
    
})


// creating the div element for the footer 
const footerDiv = document.createElement('div') ;
const comment_comment = document.createElement('div') ;

// this div also apend in the post 
// creating the class of the both div 
footerDiv.className = "post-footer";
comment_comment.className = "comments-container";

// creating the p ofr the like the comment 

// creating the function like comment 
  const likeCommnetValue = document.createElement('span') ; 
  footerDiv.appendChild(likeCommnetValue) ; 
function likecomment(){
    
    likeCommnetValue.textContent = `Likes: ${post1.likes} Comments: ${commentLength}`;
   
}
likecomment() ; 





// creating the spend on the 












div1.append(h3,img , likeButton ,inputComment , commentButton,footerDiv) ; 
posts.appendChild(div1) ; 
