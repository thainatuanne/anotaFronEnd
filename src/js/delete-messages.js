async function deleteMessage(messageId) {
  try {
    const response = await api.delete(`/messages/${messageId}`);
    if (response.status === 200) {
      alert("Mensagem excluída com sucesso!");
      location.reload();
    }
  } catch (error) {
    console.error("Erro ao excluir mensagem:", error);
    alert("Erro ao excluir mensagem.");
  }
}