// creating the promise all the using the all the promise 
const pro = new Promise((resolved , reject)=>{
    setTimeout(()=>{
        resolved("this is the resolve in 2000 second ") ; 
    })
},1000)
const pro1 = new Promise((resolved , reject)=>{
    setTimeout(()=>{
        resolved("this is the resolve in 2000 second ") ; 
    })
})


const result = Promise.race