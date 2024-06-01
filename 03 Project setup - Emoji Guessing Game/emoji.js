const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];

  let currentEmojiIndex = 0;
  let score = 0;
  // creating the time field 
  // creating the second and timer variable 
  let second = 30 ; 
  let Countdown ; 


  //
  const guessInput = document.getElementById("guess-input");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
    // fetching the timer id using the dom manipulation 
    const timerElement  = document.getElementById('timer') ; 

  function displayEmoji() {
    const descriptionElement = document.getElementById("description");
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
  }

  function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    if (guess === correctEmoji) {
      resultElement.textContent = "Correct!";
      score++;
    } else {
      resultElement.textContent = "Wrong!";
    }
    console.log(score);
    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = "";
    guessInput.focus();
    nextEmoji();
  }

  function nextEmoji() {
    currentEmojiIndex++;

    setTimeout(()=>{ timerElement.textContent = '' ; })

    if (currentEmojiIndex === emojiDetails.length) {
      currentEmojiIndex = 0;
      score=0;
    }

    displayEmoji();
   
   
  }

  document
    .getElementById("guess-input")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkGuess();
      }
    });

  document.addEventListener("DOMContentLoaded", () => {
    displayEmoji();
    timer() ; 
  });



  // creating the function of the time
  function timer(){
     
     // creating the function using the time interval 
   Countdown = setInterval(()=>{
    second--
    timerElement.textContent = `Timer  -${second}s Remaining ` ; 

    // creating the conation  
    if (second <= 0 ) {
      // calling the function that are the closing 
      Timeouts() ; 
    }
   },1000) ; 


  }

  // now closing the setinterval 
  function Timeouts(){
    clearInterval(Countdown) ; 

    // creating the input disable
    // set the time value is the blank 
    timerElement.textContent = '' ; 
  }


