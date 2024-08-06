// 'Day 10: Event Handling
// Tasks/Activities:

// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const para1 = document.getElementById("para1");
const userBtn = document.getElementById("userBtn");
userBtn.addEventListener("click", () => {
    para1.innerText = "Hello User"
})

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const toggleImage = document.getElementById("toggleImage");
toggleImage.addEventListener("dblclick", () => {
    /** If you use visibility:hidden on this element, clicking on the space where the element is will trigger nothing. that's why using opacity instead */
    if (toggleImage.style.opacity === "0") {
        toggleImage.style.opacity = "1"
        return false;
    }
    toggleImage.style.opacity = "0"
})

// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.
const coloredDiv = document.getElementById("coloredDiv");

coloredDiv.addEventListener("mouseover",()=>{
    coloredDiv.style.backgroundColor = "green"
})

// Task 4: Add a mouseout event listener to an element that resets its background color.
coloredDiv.addEventListener("mouseout",()=>{
    coloredDiv.style.backgroundColor = "aquamarine"
})


// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const keyInput = document.getElementById("keyInput");
const keyView = document.getElementById("keyView");
keyInput.addEventListener("keydown",(k)=>{
    console.log(k.key);
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
keyInput.addEventListener("keydown",(k)=>{
    if (k.code == "Space") {
        keyView.innerText += "\n"; 
        return false;
    }
    keyView.innerText += k.key; 
})

// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);
})

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const fruitsSelect = document.getElementById("fruitsSelect");
const outputView = document.getElementById("outputView");
fruitsSelect.addEventListener("change",(e)=>{
    outputView.innerText = e.target.value;
})

// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const navlist = document.getElementById("navlist");

navlist.addEventListener("click",(e)=>{
    // CHECK IF CLICKED TARGET IS LIST ITEM:
    if (e.target.tagName === 'LI') {
        console.log(e.target.innerText);
    }
})
// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const parentBox = document.querySelector(".parentBox");
parentBox.addEventListener("click",(e)=>{
    if (e.target.getAttribute("name") === "childbox") {
        console.log("childbox is clicked!!");
    }
})
const childBox = document.createElement("div");
childBox.setAttribute("name","childbox");
childBox.setAttribute("class","childBox");
parentBox.appendChild(childBox)