// Activity 4: Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const str1 = "This is Text"
const str2 = "Text is This"
const str3 = "is Text This"
console.log(str1.match(/^\w+/g)); /** ^ match beginning of a string */
console.log(str2.match(/^\w+/g));
console.log(str3.match(/^\w+/g));

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
console.log(str1.match(/\w+$/g)); /** $ match end of a string */
console.log(str2.match(/\w+$/g));
console.log(str3.match(/\w+$/g));
