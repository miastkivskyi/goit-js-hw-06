const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const createElem = ingredients.map((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item");
  return li;
});
list.append(...createElem);
console.log(createElem);
