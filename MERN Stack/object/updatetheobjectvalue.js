
// creating the new arr and inserting the object in this arry 

const arr = [] ; 
var usenames = "" ; 
var passwoeds = "" ; 

const updateobject = {

    update : function(name , passwoed){
        usenames = name ; 
        passwoeds = passwoed ; 
        return {user:usenames , pas:passwoed} ; 
    } , 




}

const ob = updateobject.update("shivam singh " , "sdaddwe");
console.log(`usename ${usenames} pas ${passwoeds}`) ; 
arr.push(ob) ; 
// console.log(arr[0]) ;
arr.push(updateobject.update("sh singh " , "dwe")) ;  
arr.push(updateobject.update("itihsa " , "djgjg")) ;  
arr.push(updateobject.update("shivam" , "sdaddwe")) ;  



const newarr = [...arr] ; 


// forin log of
for (const i of  arr) {

       console.log(i) ; 
    
}



const obj = {user: "shivam",
 pas: "sdaddwe"
};


console.log(arr.includes(obj));

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  function isCherries(fruit) {
    return fruit.name === "cherries";
  }
  
  console.log(inventory.find(isCherries));







