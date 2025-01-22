const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await api.post("/users/signup", { name, email, password });

    if (response.status === 201) {
      alert(`Cadastro realizado com sucesso! Seja bem-vindo, ${name}.`);

      window.location.href = "index.html";
    }
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    alert("Não foi possível realizar o cadastro. Tente novamente.");
  }
});