const refs = {
  inputFontSize: document.querySelector("#font-size-control"),
  fontText: document.querySelector("#text"),
};

refs.inputFontSize.addEventListener("input", () => {
  refs.fontText.style.fontSize = refs.inputFontSize.value + "px";
});
