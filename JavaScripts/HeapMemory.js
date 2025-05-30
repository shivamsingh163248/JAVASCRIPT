// creating the heap memory 
let AdminUserName = "shivam"
let SecondUserName = AdminUserName ; 
SecondUserName = "Saurabh"
console.log(SecondUserName) ; 
console.log(AdminUserName) ; 

// now creating the object and try in the object about the reference 
let obj1 = {
    userName : "shivam singh " , 
    UserId : 4545 , 
    userAccountActive : true
}

// now we are the assign another object and try to print and check the reference 
let obj2 = obj1 
// now change in the obj2 ;
console.log(obj1) 
obj2.UserId  = 45454 ; 

// now print the user one and the user two 
console.log(obj1)
console.log(obj2)



