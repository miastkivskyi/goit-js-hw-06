const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const itemList = document.createElement("li");
  itemList.textContent = `${element}`;
  itemList.classList.add("item");
  list.append(itemList);
});
