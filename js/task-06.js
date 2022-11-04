const refs = {
  inputText: document.querySelector("#validation-input"),
};
function OnInputBlur(event) {
  console.log(event.currentTarget.value.length);
  event.currentTarget.value.length === attribute
    ? refs.inputText.classList.add("valid")
    : refs.inputText.classList.add("invalid");
}

refs.inputText.addEventListener("blur", OnInputBlur);
const attribute = Number(refs.inputText.getAttribute("data-length"));
