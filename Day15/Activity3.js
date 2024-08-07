// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
const createFunction = () => {
    const arrFunctions = []
    for (let i = 0; i < 5; i++) {
        const fn = () => {
            console.log(`I AM FROM ${i} index function`);
        }
        arrFunctions.push(fn)
    }
    return arrFunctions;
}
const arrFn = createFunction();
arrFn[0](); //==> I AM FROM 0 index function
arrFn[1](); //==> I AM FROM 1 index function
arrFn[2](); //==> I AM FROM 2 index function