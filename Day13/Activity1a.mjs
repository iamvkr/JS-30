/** the file name is mjs that represent this script file is of type="module" required in order to work with modules instead of creating package.json */
// Day 13: Modules
// Tasks/Activities:

// Activity 1: Creating and Exporting Modules

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
export const sum = (a, b) => {
    return a + b;
}
// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
export const person = {
    name: "sam",
    age: 22,
    play: () => {
        console.log("Playing...");
    },
    sleep: () => {
        console.log("sleeping...");
    }
}
