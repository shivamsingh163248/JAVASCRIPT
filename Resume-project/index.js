// creating the name of the 
let p1_name = "shivamSingh" ; 
let p2_name =  "Itisha" ; 

// creating the function for the getpockeman 

function getPokemon(){

    // creating the fetch 
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((response)=>response.json())
    .then((response)=>{
        let x = Math.floor(((Math.random())*20)) ; 
        // now calling the next url 
        return fetch(response.results[x].url) ; 
    })
    .then((response)=> response.json()) 
    .then((response)=>{
        // calling the function the display user 
        dispaypalyer1(response) 
        // in the return creating the new request of the 
        return fetch("https://pokeapi.co/api/v2/pokemon/")
    })
    .then((response)=>response.json())
    .then((response)=>{
        let x = Math.floor(((Math.random())*20)) ; 
        // now calling the next url 
        return fetch(response.results[x].url) ; 
    })
    .then((response)=> response.json()) 
    .then((response)=>{
        // calling the function the display user 
        return fetch("https://pokeapi.co/api/v2/pokemon/")
    })

}