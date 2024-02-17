
// Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
const school = {
    schoolName : "swami harsewanad public school " , 
    schoolMode : "cbsc" ,
    schoolAddress : "varanshi" ,
    schoolId : 44545 , 
    schoolHeadName : { 
        principle : "satyendra kumar singh " ,
         Director :  " shivam singh "
        } ,
    anominusFunction : function sum(a ,b){
      return a+b ; 
    },
    more : function sum(a ,b){
        return a+b ; 
      },
      schoolStudent : {
        John: [85, 90, 92, 88, 87],
        Jane: [92, 95, 89, 91, 94],
        David: [78, 85, 90, 92, 84],
       Emily: [90, 88, 92, 87, 91],
       Michael: [86, 92, 90, 89, 94]
      }
}



// all the convert into the string using the jason.stringfy 
let ConvertStringObject = JSON.stringify(school) ; 
console.log(ConvertStringObject) ;  // convert into the string formate 