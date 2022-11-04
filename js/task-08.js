const data = document.querySelector(".login-form");

data.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const data = event.currentTarget.elements;
  const passwordText = data.password.value;
  const emailText = data.email.value.toLowerCase();

  if (emailText === "" || passwordText === "") {
    return alert("Всі поля повинні бути заповнені");
  }
  const userDetails = { email: emailText, password: passwordText };
  console.log(userDetails);

  event.currentTarget.reset();
}
