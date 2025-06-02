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



