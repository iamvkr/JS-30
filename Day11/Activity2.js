// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const connectToServer = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ status: true, message: "connected to server" });
    }, 1000);
})

const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ status: true, data: { username: "jhonDoe67" } });
    }, 800);
})

connectToServer.then(result => {
    if (result.status) {
        return getData;
    }
})
    .then(result => {
        if (result.status) {
            console.log("Data recieved from Server:", result.data);
        }
    })
    .catch(err => console.log("Error:", err))

