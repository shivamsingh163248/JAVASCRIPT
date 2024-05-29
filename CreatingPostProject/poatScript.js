let postsData = [
    { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
    { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
    { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
    { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
  ];

  const likepostset = new Set() ; 


  // now creating the post 
  // creating the function of the  render post 
  function randers_post(){
    // accessing the the posts id 
    const posts = document.getElementById('posts') ; 
    posts.innerHTML = '' ; 


// creating the for each loop fot the accessing all the deta 
postsData.forEach((post) => {

  
    // now creating the div of the post 
    const UserPost = document.createElement('div') ; 
    // creating and the using the class list and add function() for add
    UserPost.classList.add('post') ;
    
    // creating the heading h3
    const postHeading = document.createElement('h3') ; 
    postHeading.textContent = post.author ; 
    // creating the image of the post 
    const postImage = document.createElement('img') ; 
    postImage.src = post.image ; 
    postImage.alt = 'post image'  ; 

    // creating the element paragraph 
    const postParagraph = document.createElement('p') ; 
    postParagraph.textContent = post.content ; 


    // creating the the button and input field 
    const postLikeButton = document.createElement('button') ; 
    postLikeButton.textContent = 'Like' ; 
    postLikeButton.classList.add('like-button') ; 
     
    // creating the event listener
    postLikeButton.addEventListener('click' , ()=>{
        if (!likepostset.has(post.id)) {
            postLike(post.id) ; 
            likepostset.add(post.id) ; 
           
            postLikeButton.style.color = "red" ; 
            postLikeButton.disabled = true ; 

            for(let ind of likepostset){
                const button = document.querySelectorAll('.like-button')[ind-1];
                button.style.backgroundColor = 'red';
        
            }
        }
    })

    // creating the input field with the placeholder 
    const postCommentsInput = document.createElement('input') ; 
    postCommentsInput.placeholder = 'write a comment ...' ; 
    postCommentsInput.type = 'text' ; 

   


    // now creating the button for the comment button 
    const commentButton = document.createElement('button') ; 
    commentButton.textContent = 'comment' ;
    
    // creating the event liston of the button 
    // creating the event listener of the button 
    commentButton.addEventListener('click' , ()=>{
        // calling the add comment function 
        addComment(post.id , postCommentsInput.value) ; 
        // now set the post comment vaLue is p
        postCommentsInput.value = '' ; 
    })
   

    // creating the post footer 
    const postFooter = document.createElement('div') ; 
    postFooter.classList.add('post-footer') ; 

    postFooter.textContent = `Likes : ${post.likes}  Comments : ${post.comments.length}`;
   //  postLike(post.id);


    const commentContainer = document.createElement('div') ; 
    commentContainer.classList.add('comment-container');
    // creating the loop od the object and creating the element and append 
    // every element of down 
    post.comments.forEach((comments)=> {
       const commentPara = document.createElement('p') ; 
       commentPara.textContent = comments ; 
       commentContainer.appendChild(commentPara) ; 
    });


    // now creating the event listener of the comment post footer
    postFooter.addEventListener('click' , ()=>{
        UserPost.appendChild(commentContainer) ;  
    })


    

    

   console.log(post) ; 


   UserPost.appendChild(postHeading) ; 
   UserPost.appendChild(postImage) ; 
   UserPost.appendChild(postParagraph) ; 
   UserPost.appendChild(postLikeButton) ; 
   UserPost.appendChild(postCommentsInput) ; 
   UserPost.appendChild(commentButton) ;
   UserPost.appendChild(postFooter) ; 
   
   posts.appendChild(UserPost) ; 


 });






    





  }


  // creating the function of the like button if the click buuton 
  function postLike(postId){
    
    // now writing the function of the update the likes 
    const post = postsData.find(post => post.id === postId);

    // now creating the condition 
    if (post) {
        post.likes++ ; 
        randers_post() ; 
    }
    console.log('this is the post'+post.id)

  }

  // creating the function of the add comment for the adding the comment in the jason file 
  // creaing the function to add comment 
  function addComment(postId , comment ){

   const post = postsData.find(post => post.id === postId ) ; 
   // creating the condition when we get the post object 
   if (post) {
    post.comments.push(comment) ; 
    // hear is the calling the raider post and apply them 
    randers_post() ; 
   }

  }

  // creating the element to post to add data in the jason 
  function createPost(){
    
    // fist we are the create the element 
    // creating the division of class side bar 
    const sidebar = document.createElement('div') ; 
    // creating the class of the slide bar 
    sidebar.classList.add = "sidebar" ; 
    // creating the h3 element 
    const h3 = document.createElement('h3') ; 
    // in this contain the creating the new post 
    h3.textContent = "Creating the new post" ; 

    // now creating the form for the taking the input
    const postforms  = document.createElement('form') ; 
    postforms.id = "postForm" ; 
    // creating the input and append in the form all the input 
    const inputPostCaption = document.createElement('input') ; 
    // creating the type and the place holder 
    inputPostCaption.type = "text" ; 
    inputPostCaption.placeholder = "writing the your application caption " ; 
    inputPostCaption.id = "postInput" ; 
    
    
    // again creating the second input that is the file 
    const inputFile = document.createElement

  }

  randers_post() ; 