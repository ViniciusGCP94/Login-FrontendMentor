const email = document.getElementById("email");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});

email.addEventListener("blur", () => {
  checkInputEmail();
});

function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "Digite seu email!");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

function checkForm() {
  checkInputEmail();

  const formItems = document.querySelectorAll(".form-content");
  const isValid = Array.from(formItems).every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    window.location.href = "./assets/page/obrigado.html";
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");
  textMessage.innerText = message;
  formItem.className = "form-content error";
}

// Atualiza a mensagem de confirmação com o email de inscrição
/*const emailValue = email.value;
document.getElementById(
  "confirmation-message"
).textContent = `Um email de confirmação de inscrição foi enviado para ${emailValue}.`;*/
