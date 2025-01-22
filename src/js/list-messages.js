const messageListContainer = document.querySelector(".message-list");

async function loadUserMessages() {
  const userSession = localStorage.getItem("user");

  if (!userSession) {
    alert("Por favor, faça login para acessar suas mensagens.");
    window.location.href = "index.html";
    return;
  }

  const user = JSON.parse(userSession);

  try {
    const response = await api.get(`/messages/${user.email}`);
    const messages = response.data.messages || [];

    if (messages.length === 0) {
      messageListContainer.innerHTML = "<p>Nenhuma mensagem encontrada.</p>";
      return;
    }

    messageListContainer.innerHTML = "";

    messages.forEach((message) => {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message-card");

      messageElement.innerHTML = `
        <h3 class="card-title">${message.title}</h3>
        <p class="card-description">${message.description}</p>
        <div class="card-icons">
          <i class="bi bi-pencil" data-id="${message.id}" onclick="editMessage('${message.id}')"></i>
          <i class="bi bi-trash" data-id="${message.id}" onclick="deleteMessage('${message.id}')"></i>
        </div>
      `;

      messageListContainer.appendChild(messageElement);
    });
  } catch (error) {
    console.error("Erro ao carregar mensagens:", error);
    alert("Erro ao carregar mensagens.");
  }
}

function editMessage(messageId) {
  try {
    localStorage.setItem("editMessageId", messageId);
    console.log(`Mensagem com ID ${messageId} armazenada.`);

    window.location.href = "update-messages.html";
  } catch (error) {
    console.error("Erro ao redirecionar para edição:", error);
    alert("Erro ao redirecionar para edição.");
  }
}

function redirectToAddMessage() {
  window.location.href = "add-messages.html";
}

loadUserMessages();
