// Day 20: LocalStorage and SessionStorage
// Tasks/Activities:
// Activity 1: Understanding LocalStorage

// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
localStorage.setItem("mode","dark");
 const mode = localStorage.getItem("mode");
 console.log("Mode:",mode);

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const user ={
    email:"sam@sam.com",
    age:21,
    isloggedIn: true
}

localStorage.setItem("userDetails",JSON.stringify(user));

const userDetails  = JSON.parse(localStorage.getItem("userDetails"));
const userEmail  = userDetails.email

console.log(userDetails);
console.log(userEmail);

