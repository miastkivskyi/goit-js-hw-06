const refs = {
  inputName: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};

refs.inputName.addEventListener("input", () => {
  refs.inputName.value.length === null
    ? (refs.outputName.textContent = "Anonymous")
    : (refs.outputName.textContent = refs.inputName.value);
});
