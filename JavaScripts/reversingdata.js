// creating the function taking as the input and data my function work on the reversing date

function reversingData(data){
    //  let data = new Date("2023-06-04")
    let day = data.getDate().toString().padStart(2,'0')
    let month  = data.getMonth().toString().padStart(2 ,'0');
    let year = data.getFullYear().toString()

    return `${day}-${month}-${year}`
}
reversingData(new Date("2023-06-04")) ; 
console.log(reversingData(new Date("2023-06-04")) )



// now solved the second question 
// calculate age 
function calculateAge(dobString) {
    let dob = new Date(dobString);
    let today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    let monthDiff = today.getMonth() - dob.getMonth();
    let dayDiff = today.getDate() - dob.getDate();
    console.log(dob.getDate())

    // If birthday hasn't occurred yet this year, subtract 1
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

console.log(calculateAge("2023-06-02"));  // Output depends on today's date


// if creating the function to creating the function \
function sum(a,b){

    let sum = a+b ; 
    return function (mul){
        return sum*mul ; 
    }

}



