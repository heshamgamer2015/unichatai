// Seleciona os elementos HTML
const chatHistory = document.getElementById('chat-history');
const chatMessageInput = document.getElementById('chat-message-input');
const chatSendButton = document.getElementById('chat-send-button');

// Adiciona um evento de clique ao botão de enviar
chatSendButton.addEventListener('click', sendMessage);

// Adiciona um evento de pressionar Enter no campo de entrada de mensagens
chatMessageInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Função para enviar uma mensagem
function sendMessage() {
  // Obtém a mensagem do campo de entrada
  const message = chatMessageInput.value;

  // Cria um novo elemento para exibir a mensagem
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  messageElement.innerHTML = message;

  // Adiciona a mensagem ao histórico de chat
  chatHistory.appendChild(messageElement);

  // Limpa o campo de entrada
  chatMessageInput.value = '';
}
