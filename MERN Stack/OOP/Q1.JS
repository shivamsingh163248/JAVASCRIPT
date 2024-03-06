function main(){

    const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      city: "New York",
      street: "123 Main St",
      zipCode: "10001"
    }
  };
  const userProfile2 = {
    name: "Marry Jane",
    email: "marry.jane@example.com",
    address: {
      city: "L.A",
      street: "154, washington road",
      block: '0101',
      zipCode: "10011"
    }
  };
  
function getUserDetail(profile, keys) {
    // Implement your function here
    let value = profile // Initialize the value variable
    for (const i of keys) {
        value =  value[i];
    }

    if (value == undefined) {
        return  "Not available" ; 
    }

    return value ; 
}

console.log(getUserDetail(userProfile, ["address", "block"]));
  // Usage: should return "New York"
  //do not modify the return statement
return getUserDetail;
}

// function getUserDetail( keys) {
//     // Implement your. function here
//       var value = "" ; 
//      for(const i of keys){
//         console.log(i) ; 
//         value = value+"."+i ; 
//      }  

//      console.log(value) ; 
      
//   }

//   getUserDetail(["address", "city"]);

main() ; 