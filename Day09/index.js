// 'Day 9: DOM Manipulation
// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.
const hello_para = document.getElementById("hello_para");
hello_para.innerText = "Hello World"

// Task 2: Select an HTML element by its class and change its background color.
const burlywood_box = document.querySelectorAll(".burlywood_box")[0];
burlywood_box.style.background = "burlywood"


// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.
const myDiv = document.createElement("div");
const text = document.createTextNode("This is a dynamically created box");
myDiv.appendChild(text)
document.body.appendChild(myDiv)

// Task 4: Create a new li element and add it to an existing ul list.
const navbar_links = document.getElementById("navbar_links");
const li = document.createElement("li");
li.innerText = "contact";
navbar_links.appendChild(li)


// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.
document.getElementById("removeable").remove();
// Task 6: Remove the last child of a specific HTML element.
const parentBox = document.getElementById("parentBox")
const lastchildIndex = parentBox.children.length -1;
parentBox.removeChild(parentBox.children[lastchildIndex]);


// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).PaymentResponse
const passwordBox = document.getElementById("passwordBox")
passwordBox.setAttribute("type","text")

// Task 8: Add and remove a CSS class to/from an HTML element.
passwordBox.classList.remove("bg-red");
passwordBox.classList.add("bg-grey");


// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click",()=>{
    hello_para.innerText = "Hello in JS"
})
// Task 10: Add a mouseover event listener to an element that changes its border color.
const coloredBorderDiv = document.getElementById("coloredBorderDiv");
coloredBorderDiv.addEventListener("mouseover",()=>{
    coloredBorderDiv.style.borderColor = "red"
})
coloredBorderDiv.addEventListener("mouseleave",()=>{
    coloredBorderDiv.style.borderColor = "black"
})