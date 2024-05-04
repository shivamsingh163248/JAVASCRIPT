let postsData = [
    { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
    { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
    { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
    { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
  ];


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

    // creating the input field with the placeholder 
    const postCommentsInput = document.createElement('input') ; 
    postCommentsInput.placeholder = 'write a comment ...' ; 

    // now creating the button for the comment button 
    const commentButton = document.createElement('button') ; 
    commentButton.textContent = 'comment' ; 

    // creating the post footer 
    const postFooter = document.createElement('div') ; 
    postFooter.classList.add('post-footer') ; 

    postFooter.textContent = `Likes : ${post.likes}  Comments : ${post.comments.length}`

    const commentContainer = document.createElement('div') ; 
    commentContainer.classList.add('comment-container');
    // creating the loop od the object and creating the element and append 
    // every element of down 
    post.comments.forEach((comments)=> {
       const commentPara = document.createElement('p') ; 
       commentPara.textContent = comments ; 
       commentContainer.appendChild(commentPara) ; 
    });

    

   console.log(post) ; 


   UserPost.appendChild(postHeading) ; 
   UserPost.appendChild(postImage) ; 
   UserPost.appendChild(postParagraph) ; 
   UserPost.appendChild(postLikeButton) ; 
   UserPost.appendChild(postCommentsInput) ; 
   UserPost.appendChild(commentButton) ;
   UserPost.appendChild(postFooter) ; 
   UserPost.appendChild(commentContainer) ;  
   posts.appendChild(UserPost) ; 


 });






    





  }

  randers_post() ; 