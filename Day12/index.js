// Day 12: Error Handling
// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
try {
    throw new Error("Something is wrong")
} catch (error) {
    console.log("Err:", error.message);
}
// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divide(a, b) {
    try {
        if (b == 0) {
            throw new Error("cannot divide with 0");
        }
        console.log(a / b);
    } catch (error) {
        console.log("Err:", error.message);
    }
}

divide(-10, 0);

// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

try {
    throw new Error("Something is wrong")
} catch (error) {
    console.log("Err:", error.message);
} finally {
    console.log("This will always execute");
}

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class MyCstmError extends Error {
    constructor(message, options) {
        super(`some more details added to err and Your Err is :${message}`, options)
    }
}
function readData() {
    let err = true;
    try {
        if (err) {
            throw new MyCstmError("this is my cstm error");
        }
    } catch (error) {
        console.log(error.message);
    }
}
readData()
// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
function validate(input) {
    try {
        if (!input.trim()) {
            throw new Error("values cannot be empty")
        }
        if (input.length < 8) {
            throw new Error("values cannot be less than 8 chars")
        }
    } catch (error) {
        console.log("ERR VALIDATION:", error.message);
    }

}
const input = "test";
const valid = validate(input);

// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const pm = new Promise((res, rej) => {
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * (11 - 2)) + 2;
        if (randomNum > 6) {
            res("number greater than 6")
        } else {
            rej("number is less than 6")
        }
    }, 1000);
})
pm
.then(res=>console.log("SUCCESS:",res))
.catch(err=>console.log("ERR:",err))

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function getNumber(){
    try {
        const res = await pm;
        console.log("SUCCESS:",res)
    } catch (error) {
        console.log("ERR:",error)
    }
}
setTimeout(() => {
    getNumber()
}, 2000);


// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch('https://someDummyUrl.com')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log("There was some problem in fetching data:",err.message))
// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
const getData = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json(url);
        console.log(data)
    } catch (error) {
        console.log("There was some problem in fetching data:",error.message)
    }
}
getData('https://someDummyUrl.com');
