// creating and the learning the fetch api 
 const result = fetch("https://jsonplaceholder.typicode.com/users") 
 console.log(result) ;  

const ans =  result.then((ans)=>{
    return  ans.json(); 
 })

 ans.then((myans)=>{
    console.log(myans) ; 
 })