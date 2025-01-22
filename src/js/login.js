const loginForm = document.getElementById("login-form");
const signupButton = document.getElementById("signup-button");

signupButton.addEventListener("click", () => {
  window.location.href = "signup.html";
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await api.post("/users/login", { email, password });

    if (response.status === 200) {
      alert(`Bem-vindo, ${response.data.user.name}!`);

      localStorage.setItem("user", JSON.stringify(response.data.user));

      window.location.href = "list-messages.html";
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    alert("Não foi possível fazer login. Verifique seu email ou senha.");
  }
});