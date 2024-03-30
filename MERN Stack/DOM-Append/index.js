// // now creating the element and the learning appned method and append child 
// // that are the use in the js 
// const div_1 = document.createElement('div') ; 
// div_1.className = 'parent_child' ; 
// div_1.innerHTML = 'this is the parent child '

// // now getting the node from the 

// const parent = document.getElementById('parent') ; 
// const childElement = document.getElementById('child') ; 

// // just using the both and check the creating the child 

//  parent.appendChild(div_1) ; 

// // again creating the next child in the child 


// // child.appendChild(parent) ; 
// div_1.appendChild(childElement) ; 


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

  // calling the each object and print 
  for (let index = 0; index < blogData.length; index++) {
  console.log(blogData[index].title) ; 
    
  }
  for (const i of blogData) {
    console.log(i) ; 
  }

