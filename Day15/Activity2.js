// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
const uniqueId = () => {
    let idCounts = 0;
    const generateUniqueId = () => {
        let uid = ""
        for (let i = 0; i < 8; i++) {
            uid += (Math.floor(Math.random() * (10 - 1)) + 1).toString();
        }
        idCounts++;
        return uid;
    }
    return { generateUniqueId }
}
const u = uniqueId();
console.log(u.generateUniqueId());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
const setName = (name) => {
    const greetUser = () => {
        console.log(`Hello ${name}`);
    }
    return greetUser
}
const s = setName("John");
s();