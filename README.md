# Anota+ FronEnd

- O **Anota+FrontEnd** é a interface web do sistema **Anota+**, uma aplicação simples para gerenciamento de recados. Ele permite que os usuários façam login, cadastrem-se, adicionem, editem, excluam e visualizem recados. O front-end se comunica com o backend para armazenar e recuperar os dados, garantindo uma experiência intuitiva e eficiente para o usuário.

🌐 Demonstração
🔗 Back-end API: Anota+ API https://anota.onrender.com/
🔗 Front-end: Anota+ FrontEnd https://anota-fron-end.vercel.app/

## 🚀 Funcionalidades

- **Login de Usuário**: Acesso ao sistema com email e senha.
- **Cadastro de Usuário**: Permite criar uma conta com nome, email e senha.
- **Listagem de Recados**: Exibe todos os recados do usuário logado.
- **Adicionar Recado**: Criação de novos recados com título e descrição.
- **Editar Recado**: Alteração de título ou descrição de recados existentes.
- **Excluir Recado**: Remoção de recados.

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estrutura das páginas.
- **CSS**: Estilização e design.
- **JavaScript**: Lógica da aplicação e manipulação do DOM.
- **Axios**: Comunicação com a API do backend.
- **Bootstrap Icons**: Ícones estilizados para melhorar a interface.
- **Google Fonts**: Tipografia utilizada no projeto (DM Sans).

## 📂 Estrutura do Projeto

```plaintext
/src
  /css
    style.css           # Arquivo de estilos global
  /images
    messages-icon.svg   # Ícone do sistema
  /js
    api.js              # Configuração da API Axios
    login.js            # Lógica de login
    signup.js           # Lógica de cadastro
    add-messages.js     # Lógica de adicionar recados
    update-messages.js  # Lógica de editar recados
    list-messages.js    # Lógica de listar recados
  add-messages.html      # Página de adição de recados
  list-messages.html     # Página de listagem de recados
  login.html             # Página de login
  signup.html            # Página de cadastro
  update-messages.html   # Página de edição de recados

---
  📡 Endpoints da API

- A API do Anota+ está disponível em: https://anota.onrender.com/


## Login 
![Login](../anotaFronEnd/src/images/login.png)

## Cadastro 
![Cadastro](../anotaFronEnd/src/images/cadastro.png)

## Recados
![Recados](../anotaFronEnd/src/images/recados.png)

## Adicionar Recado
![Adicionar Recado](../anotaFronEnd/src/images/addRecados.png)

## Mensagens
![Mensagens](../anotaFronEnd/src/images/mensagemAdd.png)