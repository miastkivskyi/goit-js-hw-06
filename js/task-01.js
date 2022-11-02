const itemOfCategories = document.querySelectorAll("li.item");

console.log("Number of categories:", itemOfCategories.length);

itemOfCategories.forEach((element) => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});
