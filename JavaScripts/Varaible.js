// ✅ Let's start with declaring variables

let accountId = 45;                    // 'let' allows re-assignment but not re-declaration in the same scope
const accountName = "shivam singh";   // 'const' is a constant, cannot be reassigned or redeclared
var accountNumber = 56556;            // 'var' can be re-assigned and redeclared (function scoped)

console.log(accountName); // Output: "shivam singh"

// accountName = "itisha singh"; // ❌ Error: Cannot reassign a const variable

// ✅ Declaring a variable without 'var', 'let', or 'const' becomes GLOBAL (not recommended)
city = "mirzapur"; // Implicit global variable (works but is bad practice)


// ✅ Now let's create a block scope
{
    var accountNumber = 565; // ✅ 'var' is function-scoped, so it gets updated globally
    let accountId = 76;      // ✅ 'let' is block-scoped, so this is a separate 'accountId' (shadowing outer one)
    console.log("Inside block accountId:", accountId); // Output: 76
}

console.log("Outside block accountNumber:", accountNumber); 
// Output: 565 → because 'var' is not block-scoped, it gets updated even outside

console.log("Outside block accountId:", accountId);    
// Output: 45 → because 'let' in block is separate from outer scope

// ✅ Use console.table to view variable values in tabular format
console.table([accountId, accountName, accountNumber]);

console.log("City:", city); // Output: mirzapur (declared globally without keyword)


// ✅ Confusing String + Number additions in JavaScript

console.log('1' + 1);        // "11" → string + number = string concatenation
console.log(1 + '1');        // "11"
console.log('1' + 1 + 1);    // "111" → left to right: "1"+1 = "11", then "11"+1 = "111"
console.log(1 + 1 + '1');    // "21" → 1+1 = 2, then 2+'1' = "21"
console.log('1' + (1 + 1));  // "12" → parentheses evaluated first, 1+1=2, then "1"+2 = "12"

console.log(typeof(accountId));     // number
console.log(typeof(accountName));   // string
console.log(typeof(null));          // ❗ "object" → this is a well-known bug in JavaScript
console.log(typeof(undefined));     // undefined

