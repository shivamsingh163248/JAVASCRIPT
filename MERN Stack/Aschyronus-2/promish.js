// creating the learning the js 
// creating the constocter 
const request = new Promise((resolved , reject)=> {

  // this is the callback function are the using the value 
//   resolved("this is the resolved fuction using by me " ) ; 
  resolved({key:1 , name:"shivam"}) ;
//   reject('this is the reject') ; 


}) ; 

// also can the display  the object 


// to get the request using the using the then 
console.log(request) ; 

 request.then((fullFilled) =>{
    console.log(fullFilled) ; 
 })