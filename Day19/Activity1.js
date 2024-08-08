// Day 19: Regular Expressions
// Tasks/Activities:
// Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
let str1 = "hello javascript";
let str2 = "Welcome javascript";
let testRegex = /javascript/;
console.log(testRegex.test(str1)); //true
console.log(str2.match(testRegex)); //[ 'javascript', index: 8, input: 'Welcome javascript', groups: undefined ]

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
const str3 = "This 2012 is version 4"
console.log(str3.match(/\d/g)); 
console.log(str3.match(/[0-9]/g)); /** alternative */