// Activity 2: Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
export const sum = (a, b) => {
    return a + b;
}
export const sub = (a, b) => {
    return a - b;
}
export const product = (a, b) => {
    return a * b;
}
// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
const average = (...nums) =>{
    let s = 0;
    nums.forEach(num => {
        s += num;
    });
    return s/(nums.length);
}

export default average;


