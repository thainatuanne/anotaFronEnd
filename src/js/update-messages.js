const formUpdateMessage = document.getElementById("form-update-message");
const titleInput = document.getElementById("title-update");
const descriptionInput = document.getElementById("description-update");

const messageId = localStorage.getItem("editMessageId");

async function populateEditForm() {
  try {
    const response = await api.get(`/messages/details/${messageId}`);
    const message = response.data.data;

    if (message) {
      titleInput.value = message.title;
      descriptionInput.value = message.description;
    } else {
      alert("Mensagem não encontrada.");
      window.location.href = "list-messages.html";
    }
  } catch (error) {
    console.error("Erro ao carregar mensagem:", error);
    alert("Erro ao carregar a mensagem.");
  }
}

populateEditForm();

formUpdateMessage.addEventListener("submit", async (event) => {
  event.preventDefault();

  const updatedMessage = {
    title: titleInput.value,
    description: descriptionInput.value,
  };

  try {
    const response = await api.put(`/messages/${messageId}`, updatedMessage);

    if (response.status === 200) {
      alert("Mensagem atualizada com sucesso!");
      window.location.href = "list-messages.html";
    }
  } catch (error) {
    console.error("Erro ao atualizar mensagem:", error);
    alert("Erro ao atualizar mensagem.");
  }
});