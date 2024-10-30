const list = document.querySelector(".overlay");
const burger = document.querySelector(".burgerBtn");
const body = document.body;

burger.addEventListener("click", () => {
  list.classList.toggle("active");
  body.classList.toggle("noScroll");
});
list.addEventListener("click", () => {
  list.classList.toggle("active");
  body.classList.toggle("noScroll");
});
