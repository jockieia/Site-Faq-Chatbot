// Função para adicionar uma nova mensagem ao chat
// Função para adicionar uma nova mensagem ao chat
function addMessage(message, messageType) {
  const chatBox = document.getElementById("chatBox");
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", messageType);
  messageElement.innerText = message;
  
  // Insere a mensagem no início do chat
  chatBox.insertBefore(messageElement, chatBox.firstChild);
  
  // Rola para a última mensagem (agora no topo)
  chatBox.scrollTop = chatBox.scrollHeight;
}
// Função para iniciar a conversa automaticamente
function startBot() {
  // Envia a primeira mensagem do bot
  addMessage("⚠️ Modifique no app.py..", "bot-message");
  
  // Envia mais mensagens do bot com um intervalo, para simular uma conversa
  setTimeout(() => {
    addMessage("1. Lembre-se de configura a mensagem: ⚠️ Modifique no app.py..", "bot-message");
  }, 1500);
  
  setTimeout(() => {
    addMessage("2. Lembre-se de configura a mensagem: ⚠️ Modifique no app.py..", "bot-message");
  }, 2500);
  
  setTimeout(() => {
    addMessage("3. Lembre-se de configura a mensagem: ⚠️ Modifique no app.py..", "bot-message");
  }, 3500);
  
  setTimeout(() => {
    addMessage("4. Lembre-se de configura a mensagem: ⚠️ Modifique no app.py..", "bot-message");
  }, 4500);
  
  setTimeout(() => {
    addMessage("Mensagem final: ⚠️ Modifique no app.py..", "bot-message");
    // Mostra o campo de entrada para o usuário após as mensagens
    document.getElementById("userInput").style.display = "block";
  }, 5500);
}

// Função para capturar a mensagem do usuário e responder
// Função para adicionar uma nova mensagem ao chat
function addMessage(message, messageType) {
  const chatBox = document.getElementById("chatBox");
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", messageType);
  messageElement.innerText = message;
  
  // Insere a mensagem no início do chat
  chatBox.insertBefore(messageElement, chatBox.firstChild);
  
  // Rola para a última mensagem (agora no topo)
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Função para capturar a mensagem do usuário e responder automaticamente
function sendMessage(event) {
  if (event.key === "Enter" && document.getElementById("userInput").value.trim() !== "") {
    const userMessage = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";
    
    // Adiciona a mensagem do usuário
    addMessage(userMessage, "user-message");
    
    // Resposta automática do bot
    setTimeout(() => {
      const botMessage = getBotResponse(userMessage);
      addMessage(botMessage, "bot-message");
    }, 1000);
  }
}

// Função para gerar resposta automática com base no conteúdo da mensagem do usuário
function getBotResponse(userMessage) {
  const lowerCaseMessage = userMessage.toLowerCase();
  
  // Respostas para palavras-chave
  if (lowerCaseMessage.includes("olá") || lowerCaseMessage.includes("oi")) {
    return "Lembre-se de configura a mensagem no app.py";
  } else if (lowerCaseMessage.includes("oi")) {
    return " Lembre-se de configura a mensagem no app.py";
  } else if (lowerCaseMessage.includes("oi")) {
    return "Lembre-se de configura a mensagem no app.py";
  } else if (lowerCaseMessage.includes("oi")) {
    return "Lembre-se de configura a mensagem no app.py";
  } else if (lowerCaseMessage.includes("oi")) {
    return "Lembre-se de configura a mensagem no app.py";
  } else {
    return "Lembre-se de configura a mensagem no app.py";
  }
}

// Executa a função de iniciar o bot automaticamente ao carregar a página
window.onload = startBot;