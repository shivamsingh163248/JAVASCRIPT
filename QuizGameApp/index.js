const quesJSON = [
    {
      correctAnswer: 'Three ',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      correctAnswer: 'L. Frank Baum',
      options: [
        'Suzanne Collins',
        'James Fenimore Cooper',
        'L. Frank Baum',
        'Donna Leon',
      ],
      question:
        "Which author wrote 'The Wonderful Wizard of Oz'?",
    },
    {
      correctAnswer: 'Atlanta United',
      options: [
        'Atlanta United',
        'Atlanta Impact',
        'Atlanta Bulls',
        'Atlanta Stars',
      ],
      question:
        'Which of these is a soccer team based in Atlanta?',
    },
    {
      correctAnswer: 'A Nanny',
      options: [
        'A Sow',
        'A Lioness',
        'A Hen',
        'A Nanny',
      ],
      question: 'A female goat is known as what?',
    },
    {
      correctAnswer: 'P. L. Travers',
      options: [
        'J. R. R. Tolkien',
        'P. L. Travers',
        'Lewis Carroll',
        'Enid Blyton',
      ],
      question:
        "Which author wrote 'Mary Poppins'?",
    },
  ];

  // now accessing all the dom object using the get element by id 
  const question = document.getElementById('question');
  const option = document.getElementById('option');
  const score = document.getElementById('score');
  const privous_Button = document.getElementById('privous') ; 
  const next_Button = document.getElementById('next') ; 
  const submit_button = document.getElementById('submit');
  const Question_window = document.getElementById('Question-window')


  // now creating the variable of the score of the Question 
  // and creating the total score 
  // and creating the variable of the question number this is the update 


  let totalSore = 6 ; 
  let CurrentQuestion = 2 ; 
  const JASON_Length = quesJSON.length ; 



  function shuffledOptions(option){

    // fist the find the length of the option 
    const lengthOption = option.length; 
    // console.log(lengthOption) ; 
    // using the meth random and the meth flower creating the random number between the range 

    const randomNumber = Math.floor(Math.random()*lengthOption) ; 
    const randomNumber1 = Math.floor(Math.random()*lengthOption) ; 
    

    // now switching to each other because the address of the arr is the same 
    let temp = option[randomNumber] ; 
    option[randomNumber] = option[randomNumber1] ; 
    option[randomNumber1] = temp ; 
    return option ; 


  }


  // creating the function of the next Question 
  // and the set the Question if it is the final Question then the ans the congratulation 
  // fist the find the jason length 

  
  // console.log(`chekc the lenght ${JASON_Length}`) ; 


function nextQuestion(){
   if (JASON_Length == CurrentQuestion+1) {
    
   // its means the this is the final Question 
   // so creating the login of the final Question after the calling the last
   option.style.display = "none" ; 
   // creating the div element 
   const divElement = document.createElement('div') ; 
   const headingElement = document.createElement('h1') ; 
   divElement.id = 'final_result' ; 
   // printing the total score 
   headingElement.innerHTML = `total score ${totalSore}` ; 
   
   // now appending the all the child element 
   divElement.appendChild(headingElement) ; 
   Question_window.appendChild(divElement) ; 
   

   }else{
    // increment the current Question 

    CurrentQuestion++ ; 
   }
  
}

// calling the next question for the checking 
// nextQuestion() ; 
// console.log(CurrentQuestion) ; 



// now getting the object
// now implement the event listener of the button and creating the button 

// creating the loop on the options 
function showQuestion(){

  // fist the getting the object 
  const QuestionObject = quesJSON[CurrentQuestion] ; 
  // now destructor of the object 
const{currectAnswer,QuestionOptions,Question} = QuestionObject ; 


     // after the destructor apply of the loop on the current Question 
     QuestionOptions.forEach(element => {
      
       // creating the button with the id  options 
   

     });

}




  

 