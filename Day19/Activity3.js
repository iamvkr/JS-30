// Activity 3: Grouping and Capturing

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.


// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const email = "sam@sam.com"
console.log("sam@sam.com".match(/([^\s@]+)/g)); //[ 'sam', 'sam.com' ] /** alternative */
console.log(email.match(/^([^\s@]+)@([^\s@]+)$/));
/*
^: Matches the beginning of the string.
([^\s@]+): Matches one or more characters that are not whitespace or at-signs. This captures the username.
@: Matches the literal at-sign.
([^\s@]+): Matches one or more characters that are not whitespace or at-signs. This captures the domain.
$: Matches the end of the string.
*/
const username = email.match(/^([^\s@]+)@([^\s@]+)$/)[1]
const domain = email.match(/^([^\s@]+)@([^\s@]+)$/)[2]
