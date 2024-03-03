    //complete the increaseSalaries function
    const employees = [
        { id: 1, name: "Alice", department: "sales", salary: 40000 },
        { id: 2, name: "Bob", department: "engineering", salary: 50000 },
        { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
        { id: 4, name: "David", department: "sales", salary: 35000 },
        { id: 5, name: "Emily", department: "engineering", salary: 55000 }
      ];
    function increaseSalaries(employees){
    //Implement your function here to modify the salaray.
        
        const result = employees.map(
        
  
            (employees) => {
                
                // creatin the condition 
                   if(employees.department === "sales"){
                    employees.salary = employees.salary*0.1+employees.salary ; 
                   }else if (employees.department === "engineering") {
                    employees.salary = employees.salary*0.15+employees.salary ; 
                   }else {
                    employees.salary = employees.salary*0.05+employees.salary ; 
                   }
                   return employees ; 
                
            }
        
        
        ) ; 
      
        return result ; 
    }

    
    const result = increaseSalaries(employees) ; 
    console.log(result) ; 
    
    
    
    
    
    
    
    
    
    
    // creating the function return the 10% increment in the n

     const employeesalary = (sallery)=>{
        return (sallery*0.1)+sallery ; 
     }

     console.log(employeesalary(100)) ; 