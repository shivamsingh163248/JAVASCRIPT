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


  // now creating the variable of the score of the Question 
  // and creating the total score 
  // and creating the variable of the question number this is the update 


  let totalSore = 0 ; 
  let QuestionNumber = 0 ; 

  

  // creating the function of the random changed the arrays the position
const arr = [1,2,3,4,5] ; 
const arrs = shuffledOptions(arr) ; 
// check the after the calling the arrays 
arrs.forEach((value)=>{
  console.log(value) ; 
})

  function shuffledOptions(option){

    // fist the find the length of the option 
    const lengthOption = option.length; 
    // console.log(lengthOption) ; 
    // using the meth random and the meth flower creating the random number between the range 

    const randomNumber = Math.floor(Math.random*lengthOption)+1 ; 
    const randomNumber1 = Math.floor(Math.random*lengthOption)+1 ; 

    // now switching to each other because the address of the arr is the same 
    let temp = option[randomNumber] ; 
    option[randomNumber] = option[randomNumber1] ; 
    option[randomNumber1] = temp ; 
    return option ; 


  }

  

