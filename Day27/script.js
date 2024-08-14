const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const add_form = document.querySelector("#add-form");
const taskList = document.querySelector(".taskList");
const addBtn = document.querySelector(".Add");
const updateBtn = document.querySelector(".Update");
const formAction = document.querySelector("#formAction");

window.onload = () => {
    updateUi();
}

add_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);

    // validation:
    const { title, desc, dueDate, formAction } = obj;
    if (!title.trim() || !desc.trim() || !dueDate.trim()) {
        alert("values cannot be empty");
        return false;
    }

    if (formAction === "add") {
        // add to list
        tasks.push({ ...obj, id: (tasks.length + 1) });


    } else {
        // update the details:
        const index_to_update = formAction.split("-")[1];
        tasks[index_to_update] = obj;
        // hide update btn and show add btn
        updateBtn.classList.add("hidden")
        addBtn.classList.remove("hidden")
    }
    // update list on ui
    updateUi();

    // update data in local storage
    localStorage.setItem("tasks", JSON.stringify(tasks))
    add_form.reset();
})

addBtn.addEventListener("click", (e) => {
    formAction.value = "add"
})

function updateUi() {
    let s = ""
    tasks.forEach(task => {
        s += `
    <div class="task border rounded p-2 bg-white text-black mb-4">
        <div class="flex items-center">
            <div class="Details w-2/3">
                <div class="title text-xl font-bold underline">${task.title}</div>
                <div class="date">${task.dueDate}</div>
                <div class="desc text-sm">${task.desc}</div>
            </div>
            <div class="Action w-1/3">
                <button id="action-update-${task.id}" class="action-update-btn px-4 py-2 border border-black rounded m-1">Update</button>
                <button id="action-delete-${task.id}" class="action-delete-btn px-4 py-2 border border-black rounded m-1">Delete</button>
            </div>
        </div>
    </div>
    `;
    });
    taskList.innerHTML = s;
    // map the btn to their click event listeners:
    const updateBtns = document.querySelectorAll(".action-update-btn");
    const deleteBtns = document.querySelectorAll(".action-delete-btn");
    updateBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            updateItem(e.target.id.split("-")[2]) //the id goes as a parameter
        });
    });
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            deleteItem(e.target.id.split("-")[2]) //the id goes as a parameter
        });
    });
}

function updateItem(id) {
    const index = id - 1; //as id is set as index + 1;
    console.log(tasks[index]);
    // show update btn in form and hide add btn:
    updateBtn.classList.remove("hidden")
    addBtn.classList.add("hidden")

    formAction.value = `update-${index}` // this will tell which index to update at form submit
    // set form fields:
    document.getElementById("title").value = tasks[index].title
    document.getElementById("desc").value = tasks[index].desc
    document.getElementById("dueDate").value = tasks[index].dueDate
}

function deleteItem(id) {
    if (window.confirm("Are you sure to delete?")) {
        const index = id - 1; //as id is set as index + 1;
        tasks.splice(index, 1);
        // update data in local storage
        localStorage.setItem("tasks", JSON.stringify(tasks))
        // show updated list in ui
        updateUi();
    }
}

// updateBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     alert("hello");
//     return false;
// })