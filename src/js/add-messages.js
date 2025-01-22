const formAddMessage = document.getElementById("form-add-message");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");

formAddMessage.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userSession = localStorage.getItem("user");
  if (!userSession) {
    alert("Por favor, faça login para adicionar uma mensagem.");
    window.location.href = "login.html";
    return;
  }

  const user = JSON.parse(userSession);

  const newMessage = {
    email: user.email,
    title: titleInput.value,
    description: descriptionInput.value,
  };

  try {
    const response = await api.post("/messages", newMessage);

    if (response.status === 201) {
      alert("Mensagem adicionada com sucesso!");
      window.location.href = "list-messages.html";
    }
  } catch (error) {
    console.error("Erro ao adicionar mensagem:", error);
    alert("Não foi possível adicionar a mensagem.");
  }
});