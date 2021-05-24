// console.log("hello world");

const humburgerIconEl = document.querySelector(".humburger-icon");
const humburgerLinks = document.querySelector(".humburger-links");

humburgerIconEl.addEventListener("click", function () {
  console.log("i clicked");
  humburgerLinks.classList.toggle("active");
});
