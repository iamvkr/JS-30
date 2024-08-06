// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const getUserDetails = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "iamvkr", lang: "js" });
    }, 1000);
})
async function server() {
    const result = await getUserDetails;
    console.log("User Result: ", result);
}
server();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const getUserDetails2 = new Promise((resolve, reject) => {
    let err = true;
    if (err) {
        reject({ message: "internal server error" });
        return false;
    }
    setTimeout(() => {
        resolve({ username: "iamvkr", lang: "js" });
    }, 2000);
})
async function server2() {
    try {
        const result = await getUserDetails2;
        console.log("User Result: ", result);
    } catch (error) {
        console.log("ERR",error);
    }
}
server2();
