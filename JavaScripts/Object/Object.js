// now insisted about the object  // now the topic of the object 
//singleton object 
// constructor based object 
// write a every syntax of the object and operation syntax and parameter and argument all type and each edge case 
Object.create
const id = {
    name : "shivam" , 
    id : 344544,
    male : true,
    "pr" : "apple"
}

//type of the access to object write the every type 
console.log(id.id)
console.log(id.name)
console.log(id["male"])
// ps not access by the . method 
// write all the edge case of the object 
console.log(id["pr"])
id.name = "itisha "
Object.freeze(id.name)
// freeze the object not change any object values 
// adding the method in the object 
id.sum = function(){
    console.log("this is the sum function") ; 

}

id.sum() ; 
// senario of the symbole 
// try this key world 
name = "mango"
id.print1 = function(){
    console.log(name)
}
id.print2 = function(){
    console.log(`${this.name}`)
}

id.print1()
id.print2()

const tinder_user = new Object()  // singleton object 
console.log(tinder_user)

// updating object using the 
tinder_user.id = "343"
tinder_user.user_name = "shivam"
tinder_user.active = true 

console.log(tinder_user)

// nested object 
const regural_user = {
    user_name : "shivam" , 
    active : {
        id : true,
        label : 1 , 
        
    },
    mobile_number : 4454544
}

// try to access nested object 
console.log(regural_user.active.id)
console.log(regural_user["active"]["id"]) // try each and every edge case 

// if the next objet not found ?
console.log(regural_user.active?.id)

// MORE EXPLORE THINGS ABOUT THE OBJECT AND EDGE CASE 
const newobj = {1 : 'a' , 2:'5'}
const secondobj = {4:"name" , 6: true} // write all the operation of the object 
const treeobject = {newobj , secondobj}
console.log(treeobject)

const newMergeObj = Object.assign(newobj  ,secondobj)
const newMergeObj1 = Object.assign({} , newobj  ,secondobj) //combine all the operation syntax target and source  

// spread objet 
const spread_object = {...newMergeObj , ...secondobj}
console.log(spread_object)
// arrays of the object // basically it use in the real project when api response it came in the form of the arrays of the object 
// write all the property of the object 
console.log(Object.keys(tinder_user)) // return the arrays 
console.log(Object.values(tinder_user)) // write all the most use property in the table 


// try check values ara the available or not 
console.log(tinder_user.hasOwnProperty("oil")) 