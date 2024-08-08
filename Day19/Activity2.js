// https://regexr.com/
// Activity 2: Character Classes and Quantifiers

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const str1 = "Hello world"
const str2 = "hello world"
const str3 = "hello World TO You"

console.log(str1.match(/\b[A-Z]\w*\b/)); //[ 'Hello', index: 0, input: 'Hello world', groups: undefined ]
console.log(str2.match(/\b[A-Z]\w*\b/g)); //null
console.log(str3.match(/\b[A-Z]\w*\b/g)); //[ 'World', 'TO', 'You' ]
/** 
\b: Matches a word boundary.
[A-Z]: Matches a single uppercase letter.
\w*: Matches zero or more word characters (letters, numbers, or underscores).
\b: Matches another word boundary.
 */

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const str4 = "Hello 12 hello 3 322"
console.log(str4.match(/\d+/g)); //[ '12', '3', '322' ]
/* a+ ==> 1 or more */

