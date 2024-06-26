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
    .then((response)=> response.json())  ; 



}