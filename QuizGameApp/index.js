// creating the js object of the quize game app 
const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three ',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };
  
    const{correctAnswer, options, question}=questionObj;

    const questionEl = document.getElementById("question");
    const optionEl = document.getElementById("option");
    const scoreEl = document.getElementById("score");

    questionEl.textContent = question;

    // creating the loop and creating the button with the id and 
    // text content 
    for (const key in options) {
   
        //creating the button 
        const button = document.createElement('button')
        button.id = 'options'
        button.innerHTML = options[key] ; 
       
        optionEl.appendChild(button) ; 

    }


    // creating the event listenor on the options 

    

