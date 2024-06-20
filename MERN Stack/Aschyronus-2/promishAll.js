// creating the promise of all the 


// creating the object of the all the promise 

const promise1 = new Promise((resolved)=>{
    setTimeout(()=>{
        console.log("this is the resolved 1  ")
    } , 1000) ; 
})
const promish2 = new Promise((resolved)=>{
    setTimeout(()=>{
        console.log("this is the resolved 2  ")
    
    } , 500) ; 
})


console.log(promise1) ; 
console.log(promish2) ;



Promise.all([promise1 , promish2 ]).then((resp)=>{console.log(resp)}) ;  
console.log("check the full fill or not ") ; 

setTimeout()
