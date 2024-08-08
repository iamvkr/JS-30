// Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?])(?!.*\s)/g;
let password1 = "abcd"
let password2 = "abcD"
let password3 = "ab5cD"
let password4 = "a5c@D56"

let isValid1 = password1.match(regex);
let isValid2 = password2.match(regex);
let isValid3 = password3.match(regex);
let isValid4 = password4.match(regex);

function checkValidity(isValid){
    if (isValid) {
        console.log("Password is valid");
    } else {
        console.log("Password is Invalid");
    }
}
checkValidity(isValid1)
checkValidity(isValid2)
checkValidity(isValid3)
checkValidity(isValid4)

/**
^: Matches the beginning of the string.

(?=.*[a-z]): Positive lookahead assertion. Ensures that at least one lowercase letter exists anywhere in the string.
// .*: Matches any character (except newline) zero or more times.
// [a-z]: Matches a lowercase letter.

(?=.*[A-Z]): Positive lookahead assertion. Ensures at least one uppercase letter exists anywhere in the string.
// .*: Matches any character (except newline) zero or more times.
// [A-Z]: Matches an uppercase letter.

(?=.*\d): Positive lookahead assertion. Ensures at least one digit exists anywhere in the string.
// .*: Matches any character (except newline) zero or more times.
// \d: Matches a digit.

(?=.*[!@#$%^&*()_+[\]{};':",.<>/?]): Positive lookahead assertion. Ensures at least one special character from the specified set exists anywhere in the string.
// .*: Matches any character (except newline) zero or more times.
// [!@#$%^&*()_+[\]{};':",.<>/?]: Matches any character within the specified set.

(?!.*\s): Negative lookahead assertion. Ensures no whitespace characters exist in the string.
// .*: Matches any character (except newline) zero or more times.
// \s: Matches a whitespace character.

.: Matches any character except newline.

/g: Global flag, finds all matches rather than stopping after the first match.

[ for min 8 length:
let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?])(?!.*\s).{8,}$/g;
]
where {8,}: Quantifier, matches the preceding token (any character except newline) at least 8 times.
$: Matches the end of the string.

 */



// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
const URL1 = "https://google.com";
const URL2 = "https://www.google.com";
const URL3 = "https://google.com?search=hello";
const URL4 = "https://goog le.com?search=hello";
const URL5 = "https:/google.com";
regex = /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,}(\/[\w-]*)*(\?[;&a-z=\d%_]*)?(\#[\w-]*)?$/gi;

const isValid5 = URL1.match(regex);
const isValid6 = URL2.match(regex);
const isValid7 = URL3.match(regex);
const isValid8 = URL4.match(regex);
const isValid9 = URL5.match(regex);

function checkValidit2(isValid){
    if (isValid) {
        console.log("url is valid");
    } else {
        console.log("url is Invalid");
    }
}

checkValidit2(isValid5)
checkValidit2(isValid6)
checkValidit2(isValid7)
checkValidit2(isValid8)
checkValidit2(isValid9)