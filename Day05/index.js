// "Day 5: Functions
// Tasks/Activities:

// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkNumber(num){
    if (num % 2 === 0) {
        console.log("Number is even");
        return true;
    }
    console.log("Number is odd");
}
checkNumber(45)

// Task 2: Write a function to calculate the square of a number and return the result.
function squareOfNumber(num){
    return Math.pow(num,2)
}
console.log(squareOfNumber(25));

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const maxNum = function(num1,num2){
    return Math.max(num1,num2)
}
console.log(maxNum(60,42));
// Task 4: Write a function expression to concatenate two strings and return the result.
const myConcat = function(str1,str2){
    return str1.concat(str2);
}
console.log(myConcat("Hello"," World"));

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sumTwoNum = (num1,num2)=> {
    return (num1 + num2)
};
console.log(sumTwoNum(10,20));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const msg = "Hello World"
const containsChar = (char)=> (msg.includes(char));
console.log(containsChar("o"));

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function myProduct(p1,p2=5){
    return (p1 * p2)
}
console.log(myProduct(40));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function user(name,age=21){
    return `Hell0 ${name}, Your age is ${age}`
}
console.log(user("Sam",20));

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const successMessage = ()=>{
    console.log("Account created successfully");
}
const createAccount = (callbackFn,count)=>{
    for (let i = 0; i < count; i++) {
        callbackFn();
    }
}
createAccount(successMessage,3) // This will call successMessage 3 times;

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const complexCalculation = (c1,c2,num)=>{
    const result  = c1(num);
    const result2 = c2(result);
    console.log("Final result of complex calculation is:",result2);
}
function f1(num){
    return num * 100;
}
function f2(num){
    return num * 1000;
}

complexCalculation(f1,f2,50)