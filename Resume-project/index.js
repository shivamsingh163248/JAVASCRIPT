// // creating the name of the 
// let p1_name = "shivamSingh" ; 
// let p2_name =  "Itisha" ; 

// // creating the function for the getpockeman 

// function getPokemon(){

//     // creating the fetch 
//     fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then((response)=>response.json())
//     .then((response)=>{
//         let x = Math.floor(((Math.random())*20)) ; 
//         // now calling the next url 
//         return fetch(response.results[x].url) ; 
//     })
//     .then((response)=> response.json()) 
//     .then((response)=>{
//         // calling the function the display user 
//         dispaypalyer1(response) 
//         // in the return creating the new request of the 
//         return fetch("https://pokeapi.co/api/v2/pokemon/")
//     })
//     .then((response)=>response.json())
//     .then((response)=>{
//         let x = Math.floor(((Math.random())*20)) ; 
//         // now calling the next url 
//         return fetch(response.results[x].url) ; 
//     })
//     .then((response)=> response.json()) 
//     .then((response)=>{
//         // calling the function the display user 
//         return fetch("https://pokeapi.co/api/v2/pokemon/")
//     })

// }

let p1_name = "john";
let p2_name = "Alice";
function getPokemon(){
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((response)=> response.json())
        .then((response)=>{
                let x = Math.floor(((Math.random())*20));
                return fetch(response.results[x].url)
        })
        .then((response)=> response.json())
        .then((response)=> {
                displayPlayer1(response)
                return fetch("https://pokeapi.co/api/v2/pokemon/")
        })
        .then((response)=> response.json())
        .then((response)=>{
                let x = Math.floor(((Math.random())*20));
                return fetch(response.results[x].url)
        })
        .then((response)=> response.json())
        .then((response)=> {
                displayPlayer2(response)
        })
}
function displayPlayer1(response){
        document.getElementById('p1_name').innerHTML = p1_name;
        document.getElementById('p1_score').textContent = `Score: ${score1}`;
                const card1 = document.querySelector('#card1');
                card1.querySelector('#name').textContent = response.name;
                const imgc = document.createElement('img');
                imgc.setAttribute('src',response.sprites.other.dream_world.front_default);
                imgc.style.height = '300px';
                imgc.style.width = '300px';
                card1.querySelector('#img').innerHTML='';
                card1.querySelector('#img').append(imgc);
                const lst = card1.querySelector('#abilities');
                lst.innerHTML='';
                const abilities = response.abilities;
                for(let i of abilities){
                        const li = document.createElement('li');
                        li.textContent = i.ability.name;
                        lst.append(li);
                }
                const exp = card1.querySelector('#experience')
                exp.textContent = response.base_experience;
                
}
function displayPlayer2(response){
        document.getElementById('p2_name').textContent = p2_name;
        document.getElementById('p2_score').textContent = `Score: ${score2}`;
                const card2 = document.querySelector('#card2');
                card2.querySelector('#name').textContent = response.name;
                const imgc = document.createElement('img');
                imgc.setAttribute('src',response.sprites.other.dream_world.front_default);
                imgc.style.height = '300px';
                imgc.style.width = '300px';
                card2.querySelector('#img').innerHTML='';
                card2.querySelector('#img').append(imgc);
                const lst = card2.querySelector('#abilities');
                lst.innerHTML='';
                const abilities = response.abilities;
                for(let i of abilities){
                        const li = document.createElement('li');
                        li.textContent = i.ability.name;
                        lst.append(li);
                }
                card2.querySelector('#experience').textContent = response.base_experience;
}
let score1 = 0;
let score2 = 0;
const btn = document.getElementById('fight')
btn.addEventListener('click',()=>{
        getPokemon();
        setTimeout(()=>{                
        let crd1 = document.getElementById('card1');
        let scr1 = crd1.querySelector('#experience').textContent;
        let crd2 = document.querySelector('#card2');
        let src2 = crd2.querySelector('#experience').textContent;
        scr1 = Number(scr1);
        src2 = Number(src2);
        console.log(scr1,src2);
        if(scr1>src2){
                score1= score1+1;
                document.querySelector('#p1_score').textContent = `Score: ${score1}`;
        }
        else if(scr1<src2){
                score2 = score2 +1;
                document.querySelector('#p2_score').textContent = `Score: ${score2}`;        
        }
    
},1000)       
})