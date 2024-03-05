// Complete the function calculateAverage
const weather = [
    { city: "New York", temperature: 50, pressure: 1015 },
    { city: "Los Angeles", temperature: 70, pressure: 1010 },
    { city: "Chicago", temperature: 40, pressure: 1012 },
    { city: "Houston", temperature: 75, pressure: 1020 },
    { city: "Miami", temperature: 80, pressure: 1017 }
  ];
  const pressureThreshold = 1015;
  function calculateAverage(pressureThreshold){
    //Implement your function here
  // frist fileter the value 
  const filterValue = weather.filter(
    function(curentvalue){
        if(curentvalue.pressure >= pressureThreshold){
            return curentvalue ; 
        }
    }
  )

  // now maping the value 
  const maptemp = filterValue.map((currentvalue)=>{return currentvalue.temperature}) ; 

  // again applies the reducing function for the calculation 
  const totalTemp = maptemp.reduce((accumlator , currentvalue)=> accumlator+currentvalue , 0) ; 

  // now finding the avg 
  const avg = totalTemp/maptemp.length ; 
  return avg.toFixed(1) ; 


  }
  console.log(calculateAverage(pressureThreshold))
  //Output : 68.3