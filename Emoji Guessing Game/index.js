// creating the emoji game in the js 

const EmojiDetails = [
    {
        Description: 'smile face with the sunglass',
        Emoji: '😎'
    },
    {
        Description: 'love',
        Emoji: '😍'
    },
    {
        Description: 'sad',
        Emoji: '😔'
    },
    {
        Description: 'sleep',
        Emoji: '🥱'
    },
    {
        Description: 'kiss',
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
    // creating the add event liston function 
    button.addEventListener("click" , ()=>{
        next(header , emoji , score) ; 
    })
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

function next(header , emoji , score){

  // getting the value of the user using the form input
  const input =  document.getElementById('text_input') ; 
  
  // creating the condition 
   const description = EmojiDetails[EmojiIndex].Description ; 

   // creating the if condition 
   console.log(input.value) ; 
   if (input.value == description) {
      
   // score would be increase 
   totalscore++ ; 
   EmojiIndex++ ; 




   }else{
    EmojiIndex++
   }

   if (EmojiIndex == 4) {
    EmojiIndex = 0 ; 
   }

   // calling for the display 
   display(header , emoji , score) ; 



}










// creating the function for the next

// creating the function \

emogigame() ; 