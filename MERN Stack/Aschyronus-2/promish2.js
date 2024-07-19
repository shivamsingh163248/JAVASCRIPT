// creating the promish 2 that are the using 
const result = new Promise((accept , reject)=>{
    // this is the arrow function 
  // creating the set time out function 
  setTimeout(()=>{
    accept('this is the resolved')
  },5000) ; 


}) ; 

result.then((ans)=>{
    console.log(ans) ; 
}).catch((err)=>{
  console.log(err) ; 
})
.finally(()=>{
    console.log('this is the always axcute ') ; 
})