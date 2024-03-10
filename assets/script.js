const email = document.getElementById("email");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  if (email.value === "") {
    alert("Preencha o campo de email");
  }

  event.preventDefault();
});

function validatorEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}
