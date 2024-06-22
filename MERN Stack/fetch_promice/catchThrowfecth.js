// learning the throw and using the catch we are the using 

const result = fetch("https://jsonplaceholder.typicode.com/users") ; 

result.then((ans)=>{
    if(!ans.ok){
         throw new Error("this is the error not a fetch Api");
    }
    return ans.json() ; 

})
.then((value)=>{
    console.log(value) ; 
}).catch((error)=>{
    console.error(error);
})