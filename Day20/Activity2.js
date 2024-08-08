// Activity 2: Using LocalStorage

// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

let form = document.getElementById('form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let obj = Object.fromEntries(formData.entries());
    const { email, username } = obj;
    if (!email.trim() || !username.trim()) {
        alert("values cannot be empty!!");
        return false;
    }
    localStorage.setItem("userDetails", JSON.stringify(obj));
    alert("Data saved successfully");
    window.location.reload();
})

const userDetails = JSON.parse(localStorage.getItem("userDetails"));
if (userDetails) {
    const dataView = document.querySelector("#dataView");
    dataView.innerHTML = `Recently saved data: <br>Username: ${userDetails.username} <br> Email: ${userDetails.email}<br>`
}

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
const removeBtn = document.querySelector("#RemoveBtn");
removeBtn.addEventListener("click", () => {
    if (localStorage.getItem("userDetails")) {
        localStorage.removeItem("userDetails");
        alert("data remved");
        window.location.reload();
    } else {
        alert("No data exist")
    }

})