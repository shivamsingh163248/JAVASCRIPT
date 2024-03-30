const blogData = [
    {
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'this is content of the first blog page.'
    },
    {
      title: 'Second Blog Post',
      date: 'February 1, 2022',
      content: 'This is the content of the second blog post.'
    },
    {
      title: 'Third Blog Post',
      date: 'March 1, 2022',
      content: 'This is the content of the third blog post.'
    }
  ];
//Create your function here with the name addBlog which takes a blog object as parameter
function addBlog(blog){
    // now creating the element div 
    const newdiv = document.createElement('div') ; 
    // creating the class name of the newDiv
    newdiv.className = 'blog-post' ; 
    
     const newdiv1 = document.createElement('div') ; 
    // creating the class name of the newDiv
    newdiv1.className = 'blog-header' ;
    
       const heading = document.createElement('h2') ; 
    // creating the class name of the newDiv
    heading.className = 'blog-title' ;
    heading.textContent = blog.title ; 
    
    const data = document.createElement('p') ; 
    // creating the class name of the newDiv
    data.className = 'blog-date' ;
    data.innerHTML = blog.date ; 
    
    // now appending the h2 and p in the belog header 
       const content = document.createElement('p') ; 
    // creating the class name of the newDiv
    content.className = 'blog-content' ;
    content.innerHTML = blog.content ; 
    newdiv1.append(heading,data);
    
    
    // now appending the div with the parent div 
    newdiv.appendChild(newdiv1) ; 
    newdiv.appendChild(content) ;
    
    // now taking the class from the html 
    const last = document.querySelector('.blog-list');
    // now making the children of the blog-list 
   last.appendChild(newdiv);
     
    
}
//Call each object present in blogData with addBlog.

// now calling all the arrys 
for (const i of blogData) {
    addBlog(i);
  }


//If page does not update the changes automatically please refresh