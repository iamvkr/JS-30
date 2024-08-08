// Activity 4: Using SessionStorage

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
let form = document.getElementById('form');
const submit = document.getElementById("submit");
const dataView = document.getElementById("dataView");
submit.value = "Login"
dataView.innerText = "User Not Login"

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let obj = Object.fromEntries(formData.entries());
    const { email, username } = obj;
    if (!email.trim() || !username.trim()) {
        alert("values cannot be empty!!");
        return false;
    }
    sessionStorage.setItem("userDetails", JSON.stringify(obj));
    alert("Login successfully");
    window.location.reload();
})

const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
if (userDetails) {
    const dataView = document.querySelector("#dataView");
    dataView.innerHTML = `Welcome, ${userDetails.username} <br> Your Email: ${userDetails.email}<br>`
}
// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
