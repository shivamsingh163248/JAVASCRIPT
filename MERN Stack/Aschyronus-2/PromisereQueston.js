// creating the new promise and test it 
function test(){
    return  new Promise((res , rej)=>{
        console.log("my name is shivam singh") ; 
    
            setTimeout(()=>{
                res("this is the resolved") ; 
            },8000)
    }) ; 
    

}




test().then((ans)=>{
    console.log(ans) ;  
})