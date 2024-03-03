const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
function createUserObjects(ids,names,images){
    const resutl  = [] ; 
    
    for (const key in ids) {
       resutl.push({
        ids : ids[key] , 
        names : names[key] , 
        images : images[key],
                      
    })
    }   
    return resutl ; 
    
   
    
}


// now calling the function 

const check = createUserObjects(ids , names , images) ; 
console.log(check) ; 