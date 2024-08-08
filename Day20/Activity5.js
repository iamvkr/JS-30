// Activity 5: Comparing LocalStorage and SessionStorage
document.body.innerHTML = ""
// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
localStorage.setItem("local","This goes in local storage");
sessionStorage.setItem("session","This goes in session storage");
const node = document.createElement("div");
node.innerHTML = `
local: ${localStorage.getItem("local")}, <br>
session: ${sessionStorage.getItem("session")}
`
document.body.appendChild(node);


// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearAll(){
    localStorage.clear();
    sessionStorage.clear();
}

const btn = document.createElement("button");
btn.innerText="clear data";
btn.addEventListener("click",()=>{
    clearAll();
})
document.body.appendChild(btn);