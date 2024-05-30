// creating the emoji game in the js 

const EmojiDetails = [
    {
        Description: 'smile face with the sunglass',
        Emoji: '😎'
    },
    {
        Description: 'smile face with the sunglass',
        Emoji: '😍'
    },
    {
        Description: 'smile face with the sunglass',
        Emoji: '😔'
    },
    {
        Description: 'smile face with the sunglass',
        Emoji: '🥱'
    },
    {
        Description: 'smile face with the sunglass',
        Emoji: '😘'
    }


]






// getting the the container
function emogigame() {

    const container = document.getElementById('container');

    // creating the three division in the in the container 

    const emoji = document.createElement('div');
    const header = document.createElement('div');
    const score = document.createElement("div");

  // creating the button and the input that are the using in the game 
   const button = document.createElement('button') ; 
   const input =  document.createElement('input') ; 

   button.textContent = "next" ; 
   input.type = 'text' ; 
   input.placeholder = "enter the your gassing " ; 
   input.id = "text_input" ; 

   header.appendChild(input) ; 
   header.appendChild(button) ; 



    // now append all the creating element as the child 
    header.id = 'header' ; 
    emoji.id =  'emoji' ; 
    score.id =  'score' ; 
    

    container.appendChild(emoji);
    container.appendChild(header);
    container.appendChild(score);

    display(header , emoji , score) ; 

}



// creating the variable 
let EmojiIndex = 0 ; 
let totalscore = 0 ; 



// creating the function display

function display(header , emoji , score ){
 
    emoji.innerHTML  = EmojiDetails[EmojiIndex].Emoji
    score.innerHTML = `${totalscore}` ; 


}

// creating the next function and taken the value 

function next(){

  // getting the value of the user using the form input 
  


}










// creating the function for the next

// creating the function \

emogigame() ; 