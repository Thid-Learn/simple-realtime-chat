const socket = io("ws://localhost:3031");

const messages = document.getElementById("messages");
const form = document.getElementById("message-form");
const input = document.getElementById("message-input");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (input.value) {
    socket.emit("message", input.value);
    input.value = "";
  }
});

socket.on("message", (msg) => {
  const item = document.createElement("li");
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
