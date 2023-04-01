const chatBody = document.getElementById("chat-body");
const messageInput = document.getElementById("message-input");

function sendMessage() {
	const message = messageInput.value;
	if (message) {
		const messageElement = document.createElement("div");
		messageElement.innerText = message;
		messageElement.classList.add("message", "sent");
		chatBody.appendChild(messageElement);
		messageInput.value = "";
	}
}
