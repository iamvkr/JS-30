// Day 26: Project 3 - Chat Application
// Tasks/Activities:
// Activity 1: Setting Up the Project

// Task 1: Initialize a new project directory and set up the basic HTML structure for the chat application.
// Task 2: Add a basic CSS file to style the chat application, including a chat window and input area.
// Activity 2: Setting Up WebSocket Server

// Task 3: Set up a simple WebSocket server using Node.js and the ws library. Write a script to create the server and handle connections.
import ws, { WebSocketServer } from 'ws';
import { v4 as uuid } from 'uuid';

const wss = new WebSocketServer({ port: 8000 });
const allClients = []
wss.on('connection', (client) => {
  console.log('Client connected !');

  const id = uuid();
  allClients.push(id);
  broadcast(JSON.stringify({
    status: true,
    clientCount: allClients.length,
    ischat: false,
  }))

  client.on('error', (error) => {
    console.log(error);
  });

  client.on('message', (message) => {
    console.log(`Message received from client:${message}`);
    broadcast(JSON.stringify({
      status: true,
      ischat: true,
      user: JSON.parse(message).user,
      msg: JSON.parse(message).msg,
    }))
  });

  client.on("close", () => {
    allClients.pop();
    broadcast(JSON.stringify({
      status: true,
      clientCount: allClients.length,
      ischat: false,
    }))
  })
});

function broadcast(msg) {
  for (const client of wss.clients) {
    if (client.readyState === ws.OPEN) {
      client.send(msg)
    }
  }
}
// Task 4: Test the WebSocket server by logging messages when clients connect and disconnect.
// Activity 3: Establishing WebSocket Connection

// Task 5: Add a script to the HTML file to establish a WebSocket connection to the server.
// Task 6: Write functions to handle sending and receiving messages through the WebSocket connection. Log received messages to the console.
// Activity 4: Building the Chat Interface

// Task 7: Modify the HTML structure to include a chat window and an input area for typing messages. Style the chat window and input area using CSS.
// Task 8: Write a function to display received messages in the chat window. Add event listeners to send messages when the user presses Enter or clicks a send button.
// Activity 5: Enhancing the Chat Application

// Task 9: Add user authentication to the chat application. Allow users to enter a username before joining the chat. Display usernames alongside their messages in the chat window.
// Task 10: Add CSS styles to differentiate messages sent by different users. Add CSS animations or transitions to make the chat application more interactive and visually appealing.