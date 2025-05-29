// JavaScript Data Type Conversion Deep Dive

// ----------------------------------------------------------
// 🧠 SECTION: Number Conversion
// ----------------------------------------------------------

// Case 1: Number from a number
let score = 33;
console.log(typeof score); // number

// Case 2: Number from a numeric string
let numericString = "33";
let convertedNumber = Number(numericString);
console.log(typeof convertedNumber); // number
console.log(convertedNumber); // 33

// Case 3: Number from a non-numeric string
let invalidNumericString = "343abc";
let convertedNaN = Number(invalidNumericString);
console.log(typeof convertedNaN); // number
console.log(convertedNaN); // NaN

// Case 4: Number from null
let nullValue = null;
let convertedNull = Number(nullValue);
console.log(typeof convertedNull); // number
console.log(convertedNull); // 0

// Case 5: Number from undefined
let undefinedValue = undefined;
let convertedUndefined = Number(undefinedValue);
console.log(typeof convertedUndefined); // number
console.log(convertedUndefined); // NaN

// Case 6: Number from boolean
let boolTrue = true;
let boolFalse = false;
console.log(Number(boolTrue));  // 1
console.log(Number(boolFalse)); // 0

// Case 7: Number from string with only spaces
let spaceString = "   ";
console.log(Number(spaceString)); // 0

// Case 8: Number from empty string
let emptyString = "";
console.log(Number(emptyString)); // 0

// Case 9: Number from a non-empty string (non-number)
let randomString = "shivam";
console.log(Number(randomString)); // NaN

// ----------------------------------------------------------
// 🧠 SECTION: String Conversion
// ----------------------------------------------------------

// Case 1: String from number
let num = 44;
let strFromNum = String(num);
console.log(typeof strFromNum); // string
console.log(strFromNum); // "44"

// Case 2: String from boolean
console.log(String(true));  // "true"
console.log(String(false)); // "false"

// Case 3: String from null and undefined
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"

// Case 4: String from array
console.log(String([1, 2, 3])); // "1,2,3"

// Case 5: String from object
console.log(String({ name: "shivam" })); // "[object Object]"

// ----------------------------------------------------------
// 🧠 SECTION: Boolean Conversion
// ----------------------------------------------------------

// Falsy values
console.log(Boolean(0));          // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// Truthy values
console.log(Boolean(1));         // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
console.log(Boolean(" "));       // true

// ----------------------------------------------------------
// 📋 SUMMARY TABLE
// ----------------------------------------------------------
// Data Type      | Converted to Number       | Converted to String     | Converted to Boolean
// -------------- | --------------------------| -------------------------| ---------------------
// "33"           | 33                         | "33"                     | true
// "33abc"        | NaN                        | "33abc"                  | true
// ""             | 0                          | ""                       | false
// "   "          | 0                          | "   "                    | true
// null           | 0                          | "null"                   | false
// undefined      | NaN                        | "undefined"             | false
// true           | 1                          | "true"                   | true
// false          | 0                          | "false"                  | false
// [1,2,3]        | NaN                        | "1,2,3"                  | true
// {}             | NaN                        | "[object Object]"        | true

// ----------------------------------------------------------
// ✅ Important Concepts
// ----------------------------------------------------------
// - NaN is still a type of number in JavaScript.
// - String conversion of arrays joins elements with commas.
// - All objects (even empty ones) are truthy in Boolean context.
// - Boolean conversions mostly depend on whether the value is considered empty or invalid.
// - Type coercion can introduce bugs, use strict equality (===) to avoid it.

// End of Deep Dive on Type Conversion