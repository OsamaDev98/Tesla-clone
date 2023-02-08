const asideElement = document.querySelector("aside");
const asideLinks = document.querySelectorAll("aside a");
const overlayElement = document.querySelector(".overlay");
const menuElement = document.querySelector(".menu");
const closeElement = document.querySelector(".close-icon");

menuElement.addEventListener("click", () => {
  asideElement.classList.toggle("open");
  overlayElement.classList.toggle("active");
  document.body.style.overflow = "hidden";
});
closeElement.addEventListener("click", () => {
  asideElement.classList.toggle("open");
  overlayElement.classList.toggle("active");
  document.body.style.overflow = "auto";
});
overlayElement.addEventListener("click", () => {
  asideElement.classList.toggle("open");
  overlayElement.classList.toggle("active");
  document.body.style.overflow = "auto";
});
asideLinks.forEach((item) => {
  item.addEventListener("click", () => {
    asideElement.classList.toggle("open");
    overlayElement.classList.toggle("active");
    document.body.style.overflow = "auto";
  });
});
