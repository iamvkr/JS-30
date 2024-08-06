// 'Day 11: Promises and Async/Await
// Tasks/Activities:

// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const pm = new Promise((res, rej) => {
    setTimeout(() => {
        res("Successfully resolved!")
    }, 2000);
})
pm
    .then(result => console.log(result))

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const pm2 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("server internal error!")
    }, 2000);
})

pm2
    .then(result => console.log(result))
    .catch(err => console.log("Error:", err))

