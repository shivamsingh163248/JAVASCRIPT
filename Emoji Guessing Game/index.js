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

    const header = document.createElement('div');
    const emoji = document.createElement('div');
    const score = document.createElement("div");

    // now append all the creating element as the child 

    container.appendChild(header);
    container.appendChild(emoji);
    container.appendChild(score);

}



// creating the variable 
let EmojiIndex = 0 ; 
let score  = 0 ; 



// creating the function display

function display(){
    
}




// creating the function for the next

// creating the function 