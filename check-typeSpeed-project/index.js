// no writing the js code for the speed writing test 


// fist using the dom manipulation then creating the all the variable 
const sentence = document.getElementById("sentence");
const inputsentence = document.getElementById('input');
const startTest = document.getElementById("start-btn");
const CountDownTimer = document.getElementById('timer');

// creating the object using the dom for the result 
const typingResult = document.getElementById("result");
const speedResult = document.getElementById('speed');
const accuracy = document.getElementById('accuracy');

// button for the retry-button means function are the again call and the using 
const retry = document.createElement('retry-btn');



// creating the variable of the time 
let second = 30;
const sentences =
    `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`
    ;
let countsDownTimer;




startTest.addEventListener('click', () => {

    // now the input field  become the enable 
    inputsentence.disabled = false;
    // and the showing the sentence 
    sentence.textContent = sentences;
    // creating the timer function 
    CountDownTimers();
    // desable the start button 
    startTest.disabled = true ; 


}) ;



// now creating the function display game and the game are the started 

// function gameStart() {

//     // creating the event listener on the start button 
//     startTest.addEventListener('click', () => {


        
//         // now the input field  become the enable 
//         inputsentence.disabled = false;
//         // and the showing the sentence 
//         sentence.textContent = sentences;
//         // creating the timer function 

//         // Now Disable the  start function 

//         CountDownTimers();


//     });




// }



function CountDownTimers() {

    // creating the time interval method for the set time 
    countsDownTimer = setInterval(() => {
        second--;
        // now display the time 
        CountDownTimer.textContent = `00:${second}`;

        
    // now creating the condition for when the time is the 0 then the close 
    // time and the out put 

    // in the if condition call the result function 
    if (second <= 0) {

        // calling the close function 
        // calling the result function 
        closeTimer() ; 
        endgameDisplayResult();


    }

    }, 1000)





}

function endgameDisplayResult() {

    // creating the event listener on the retry button 
   // writing the algorithm  for the checking the typing speed 
  typingResult.style.display = "block" ; 

  // creating the event listener on the on the re-try button 
  retry.addEventListener('click' , ()=>{
    // enable the start button 
    startTest.disabled = false ; 
  })

}


// now hear the invoking the game start function 

function closeTimer(){
    clearInterval(countsDownTimer) ; 
    CountDownTimer.textContent = '' ; 


}
gameStart(); 