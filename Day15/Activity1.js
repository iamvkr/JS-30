// Day 15: Closures
// Tasks/Activities:

// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function closure() {
    let apiKey = "1234567890";
    function fetchUrl() {
        const url = "https://dummy.com?api=" + apiKey;
        console.log(url);
    }
    fetchUrl();
}
closure();

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
const counter = () => {
    let c = 0;
    const inc = () => {
        c++;
    }
    const getCounter = () => {
        console.log("Current value of counter is:", c);
    }
    return { inc, getCounter }
}
const ct = counter();
ct.getCounter();
ct.inc();
ct.inc();
ct.getCounter()