function generateID(a){
    //Implement Your function here
        let c = a ;
        return function  func(){
            
          const values =  `A_2023_${c}`;
             c++ ; 
            return values ; 
        }
        
        
    }
    
    const func = generateID(99);
    console.log(func());//Output : A_2023_99
    console.log(func()); // Output: A_2023_100