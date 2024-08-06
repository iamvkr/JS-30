// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const p1 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("P1 is done")
    }, 1000);
})
const p2 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("P2 is done")
    }, 1500);
})
const p3 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("P3 is done")
    }, 2000);
})

const result =  Promise.all([p1,p2,p3]);
result.then(res=>{
    console.log(`Result of p1: ${res[0]}`);
    console.log(`Result of p2: ${res[1]}`);
    console.log(`Result of p3: ${res[2]}`);
});
// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
