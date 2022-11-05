const refs = {
  valueElement: document.querySelector("#value"),
  incrementButton: document.querySelector('button[data-action="increment"]'),
  decrementButton: document.querySelector('button[data-action="decrement"]'),
};
console.log(refs.incrementButton);

const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
    return (refs.valueElement.textContent = this.value);
  },
  increment() {
    this.value += 1;
    return (refs.valueElement.textContent = this.value);
  },
};

refs.decrementButton.addEventListener("click", function () {
  counterValue.decrement();
  console.log(counterValue);
});
refs.incrementButton.addEventListener("click", function () {
  counterValue.increment();
  console.log(counterValue);
});
