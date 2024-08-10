let ws = null;
let user = null;

const connect = () => {
    ws = new WebSocket('ws://localhost:8000');
    ws.onopen = function (e) {
        document.getElementById("connection_status").innerText = "Connected"
        // document.getElementById("total_user_count").innerText = "Content"
    }
    ws.onclose = function (e) {
        document.getElementById("connection_status").innerText = "Disconnected"
        // document.body.appendChild(document.createTextNode("Connection End"))
    }
    ws.onmessage = function (message) {
        // this fn exec when some message is sent from server to client as broadcast
        const m = JSON.parse(message.data);
        console.log(m);
        if (!m.ischat) {
            document.getElementById("total_user_count").innerText = `Connected users:${m.clientCount}`;
            return false;
        }
        // else render the chat:
        renderMessageOnContainer(m);
    }
}

const form_user = document.getElementById("form_user");
form_user.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    if (!obj.username.trim()) {
        alert("Username cannot be empty");
        return false;
    }
    user = (obj.username);
    document.querySelector(".userLoginForm").classList.add("hidden")
    document.querySelector(".messageForm").classList.remove("hidden")

    // now connect
    connect();
})

const form_message = document.getElementById("form_message");
form_message.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    ws.send(JSON.stringify({
        user,
        msg:obj.message
    }));
})

const renderMessageOnContainer = (m)=>{
    const message_container = document.querySelector(".message_container");
    message_container.innerHTML += `
    <div class="border-[1px] rounded p-2 w-2/3  border-black m-2 text-sm ${m.user === user && "ms-auto"}">
    <div class="flex items-center gap-x-2">
    <div class="icon bg-black text-white rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>

    </div>
    <div>
        <div class="name font-bold" id="msg_username">${m.user}</div>
        <div class="message"id="msg_content">${m.msg}</div>
    </div>
    </div>
    </div>
    `
}