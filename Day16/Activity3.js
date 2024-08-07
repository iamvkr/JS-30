// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

const reverse = (str)=>{
    if (str.length == 1) {
        return str;
    }
    return reverse(str.slice(1)).concat(str[0])
}
console.log(reverse("HELLO"));
console.log(reverse("WORLD"));
console.log(reverse("JS"));

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
const pl = (str)=>{
    if (str.length == 1) {
        return str;
    }
    return reverse(str.slice(1)).concat(str[0])
}
const str = "ABCBA";
if (pl(str) === str) {
    console.log("string is palindrome");
}else{
    console.log("String is not Plaindorme");
}
const st2 = "EABCBAD";
if (pl(st2) === st2) {
    console.log("string is palindrome");
}else{
    console.log("String is not Plaindorme");
}