// Day 16: Recursion
// Tasks/Activities:
// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
const factorial = (num) => {
    if (num === 1 || num === 0) {
        return 1
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(10));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
// fibo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
const fibo = (num) => {
    if (num === 0) {
        return 0
    }
    if (num === 1) {
        return 1
    }
    return fibo(num - 1) + fibo(num - 2);
}
console.log("0th fib no is: ",fibo(0));
console.log("1st fib no is: ",fibo(1));
console.log("2nd fib no is: ",fibo(2));
console.log("3rd fib no is: ",fibo(3));
console.log("4th fib no is: ",fibo(4));
console.log("5th fib no is: ",fibo(5));