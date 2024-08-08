// Activity 3: Understanding SessionStorage

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem("authKey", "13465790");
const auth = sessionStorage.getItem("authKey");
console.log("Auth Key:", auth);

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const server ={
    host:"learnjs.com",
    port:3000,
    statusCode: 200
}

sessionStorage.setItem("serverDetails",JSON.stringify(server));

const serverDetails  = JSON.parse(sessionStorage.getItem("serverDetails"));
const {host,port,statusCode}  = serverDetails
console.log(host,port,statusCode);