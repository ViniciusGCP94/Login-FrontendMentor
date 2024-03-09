const email = document.getElementById("email");
const form = document.querySelector("form");

//Evento de envio de formulário
form.addEventListener("submit", (event) => {
  if (email.value === "") {
    ("Preencha com algum email válido!");
  }
  //Para não recarregar a página e os valores nos inputs permanecerem
  event.preventDefault();
});
