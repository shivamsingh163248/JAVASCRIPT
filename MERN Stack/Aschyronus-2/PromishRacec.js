// creating the promise all the using the all the promise 
const pro = new Promise((resolved , reject)=>{
    setTimeout(()=>{
        resolved("this is the resolve in 2000 second ") ; 
    },9000)
});
const pro1 = new Promise((resolved , reject)=>{
    setTimeout(()=>{
        resolved("this is the resolve in 4000 second ") ; 
    },100)
} ) ; 


const result = Promise.race([pro1, pro]) ; 

// n ow checking the ans 
result.then((re)=>{
    console.log(re) ; 
})



// promise resolved are the directly resolved

const ans = Promise.resolve("this is the ans ") ; 
ans.then((ans)=>{
    console.log(ans) ; 
})