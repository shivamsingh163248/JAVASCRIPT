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
const questions = document.getElementById('question');
const option = document.getElementById('option');
const score = document.getElementById('score');
const privous_Button = document.getElementById('privous');
const next_Button = document.getElementById('next');
const submit_button = document.getElementById('submit');
const Question_window = document.getElementById('Question-window')


// now creating the variable of the score of the Question 
// and creating the total score 
// and creating the variable of the question number this is the update 


let totalSore = 0;
let CurrentQuestion = 0;
const JASON_Length = quesJSON.length;


// next_Button.addEventListener('click', () => {
//   console.log(`current ${CurrentQuestion}`);
//   nextQuestion();

// })
showQuestion();


function shuffledOptions(option) {

  // fist the find the length of the option 
  const lengthOption = option.length;
  // console.log(lengthOption) ; 
  // using the meth random and the meth flower creating the random number between the range 

  const randomNumber = Math.floor(Math.random() * lengthOption);
  const randomNumber1 = Math.floor(Math.random() * lengthOption);


  // now switching to each other because the address of the arr is the same 
  let temp = option[randomNumber];
  option[randomNumber] = option[randomNumber1];
  option[randomNumber1] = temp;
  return option;


}


// creating the function of the next Question 
// and the set the Question if it is the final Question then the ans the congratulation 
// fist the find the jason length 


// console.log(`chekc the lenght ${JASON_Length}`) ; 


function nextQuestion() {


option.textContent = '' ; 

  if (JASON_Length == CurrentQuestion + 1) {

    // its means the this is the final Question 
    // so creating the login of the final Question after the calling the last

    questions.innerHTML = "final score";


    option.style.display = "none";
    // creating the div element 
    const divElement = document.createElement('div');
    const headingElement = document.createElement('h1');
    divElement.id = 'final_result';
    // printing the total score 
    headingElement.innerHTML = `total score ${totalSore}`;

    // now appending the all the child element 
    divElement.appendChild(headingElement);
    Question_window.appendChild(divElement);


  } else {
    // increment the current Question 
    CurrentQuestion++;
    showQuestion();

  }

}


function showQuestion() {

  const QuestionObject = quesJSON[CurrentQuestion];

  // fist the getting the object 

  // now destructor of the object 
  const { correctAnswer, options, question } = QuestionObject;
  questions.textContent = question;


  // console.log(options.length);

  // after the destructor apply of the loop on the current Question 
  options.forEach(element => {

    // creating the button with the id  options 
    const button = document.createElement('button');
    button.id = "options";
    button.textContent = element;

    // now appending in the option 
    option.appendChild(button);





    // add event list
    button.addEventListener('click', () => {
      // now creating the condition if you are the choose the write ans 
      // then color will update 

      nextQuestion();


      if (correctAnswer == element) {

        // then the calling the write ans and the score will increase 
        rightAns();
        // ans the color will changed 

        button.setAttribute("style", "background-color:green;")


      }
      if (correctAnswer != element) {

        // then the calling the write ans and the score will increase 

        // ans the color will changed 
        button.setAttribute("style", "background-color:red;")

      }

    });





  });



}





// creating the function of the right ans ans wrong ans 

function rightAns() {
  // if the write the ans then you have the add the 1 mark
  // so score will increase 
  totalSore++;

}


// now creating the function of the wrong ans 
function wrongAns(minusmarking) {

  // if you given the wrong ans then mius 
  totalSore = totalSore - minusmarking;
  // score will update 
  // if you want to return something the you return 
  return totalSore;

}






