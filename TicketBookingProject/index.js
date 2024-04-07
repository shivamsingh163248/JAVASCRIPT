//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];



  
const cans = document.querySelector('#cancelBtns'); 
// creating the event listener on the button 
cans.addEventListener('click' , ()=>{
    const selected = document.getElementsByClassName('selected');
    for (const i in selected) {
        
        selected[i].className = 'seat' ; 
            
        }
    });

// creating the option element

// creating the loop 

// now i am learning the contan class and list class of pending for the learning 




moviesList.forEach(element => {
    console.log(element.movieName) ;
    const option = document.createElement('option') ; 
    // using the queryselector 
    option.textContent = element.movieName +' $'+ element.price; 
    const selectMovie = document.getElementById('selectMovie') ; 
    selectMovie.appendChild(option) ; 

   option.addEventListener('click' , change) ; 
   // creating the function changed 
   function change(){
    // now writing the function to set the the movies name and 
    // movies price and movies date 
    // now getting the variable using the doc type of id 
    const moviesname = document.getElementById("movieName");
    const moviesprice = document.getElementById("moviePrice");
    const moviesdate = document.getElementsByClassName("date");
    // now appending the set the inner the html 
    moviesname.textContent = element.movieName ; 
    moviesprice.textContent = '$  '+element.price ; 

    // now creating the date 
    const dates = new Date() ; 
    moviesdate[0].textContent = dates.getDate()+"-"+dates.getMonth()+"-"+dates.getFullYear() ; 



   }

});


// now working on the seat 
// class return the array and using the arrays number you print the seat number 
const seats = document.getElementsByClassName('seat') ; 

// creating the arrys of all the seats 
for (const i in seats) {
   
    seats[i].addEventListener('click' , ()=>{

       // seats[i].setAttribute('class' ,' seat selected') ; 
       seats[i].className ='seat selected';
    }) ; 

}

// creating the event listoner on the cancel button cancelBtn 

// fetch selected class in html

// const cancelBtns = document.getElementById('cancelBtns') ;
// console.log(cancelBtns) ;
// // creating the onlick event listoner
// cancelBtns.addEventListener('click' , ()=>{

//     // creating the array of all the seats 
//     for (const i in seats) {
//         // setting the class name of the seats
//         seats[i].className ='seat';
//         }
// }
// ) ;








// Use moviesList array for displaing the Name in the dropdown menu
//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button