const refs = {
  inputText: document.querySelector("#validation-input"),
};
function OnInputBlur(event) {
  if (event.currentTarget.value.length === attribute) {
    refs.inputText.classList.remove("invalid");
    refs.inputText.classList.add("valid");
  } else {
    refs.inputText.classList.remove("valid");
    refs.inputText.classList.add("invalid");
  }
}

refs.inputText.addEventListener("blur", OnInputBlur);
const attribute = Number(refs.inputText.getAttribute("data-length"));
