//RANDOME Question Generator 

function main() {
    const questions = [  "Question1",  "Question2","Question3", "Question4", "Question5"];
    
    function shuffle(arr) {
      return function () {
        
          let num = Math.floor(Math.random() * questions.length);
           let num2 = Math.floor(Math.random() * questions.length);
          // now mainupulate the array using the exchange
          
          const result = [...arr] ; 
          const temp = result[num] ; 
          result[num] = result[num2] ; 
          result[num2] = temp ; 
           
        return result;
      };
    }



    const func = shuffle(questions)
    const shuffledArray1 = func();
    const shuffledArray2 = func();
    console.log(shuffledArray1) ; 
    console.log(shuffledArray2) ; 

    return shuffle;

   

  }

  main() ; 
  
  
