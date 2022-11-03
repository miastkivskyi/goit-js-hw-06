const CounterValue = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this.value = initialValue;
  this.step = step;
  this.refs = this.getRefs(rootSelector);
  this.bindEvents();
};

CounterValue.prototype.getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
  refs.value = refs.container.querySelector("#value");
  refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
  return refs;
};

CounterValue.prototype.bindEvents = function () {
  this.refs.incrementBtn.addEventListener("click", () => {
    this.increment();
    this.updateValueUI();
  });
  this.refs.decrementBtn.addEventListener("click", () => {
    this.decrement();
    this.updateValueUI();
  });
};

CounterValue.prototype.updateValueUI = function () {
  this.refs.value.textContent = this.value;
};

CounterValue.prototype.increment = function () {
  this.value += this.step;
};
CounterValue.prototype.decrement = function () {
  this.value -= this.step;
};

new CounterValue({ rootSelector: "#counter", step: 1 });
