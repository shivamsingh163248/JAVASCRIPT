// learning the throw and using the catch we are the using 

const result = fetch("https://jsonplaceholder.typicode.com/users") ; 

const pro = result.then((ans)=>{
    if(!ans.ok){
         throw new Error("this is the error not a fetch Api");
    }
  //  console.log(ans) ; 
    return ans.json() ; 

})

console.log(pro) ; 
pro.then((value)=>{
     console.log(value) ;
 //    console.log(value.ok) ;  
}).catch((error)=>{
    console.error(error);
})