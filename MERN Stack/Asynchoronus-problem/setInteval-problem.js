const container = document.getElementById('container') ; 

// learning the set time interval function 
// this is the use for the some interval and after the interval that are the working again 

// creating the h1
const h1 = document.createElement('h1') ; 
h1.textContent = 'timer' ; 

// now creating the variable function 
let time = 0 ; 

const timescale  = document.createElement('h1') ; 

// now append as the child both of h1 
container.appendChild(h1) ; 
container.appendChild(timescale) ; 

timescale.textContent = `${time}` ; 

// now using the time interval function to update the time 
const timer = setInterval(function(){
    time++ ; 
    timescale.textContent = `${time}` ; 

   // using the if condition and clear interval function 
   if (time >= 5) {
     clearInterval(timer) ; 
   }


},1000) ; 