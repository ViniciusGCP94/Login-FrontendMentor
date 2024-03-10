// Obtenha o parâmetro de consulta de email da URL (supondo que o parâmetro seja chamado "email")
const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get("email");

// Mensagem de confirmação com o email inserido
const mensagem = `Foi enviado um e-mail de confirmação para ${email}. Abra-o e clique no botão para confirmar a sua subscrição.`;

// Encontre o parágrafo pelo ID
const paragrafo = document.getElementById("mensagem");

// Crie um nó de texto com a mensagem
const texto = document.createTextNode(mensagem);

// Adicione o nó de texto ao parágrafo
paragrafo.appendChild(texto);
