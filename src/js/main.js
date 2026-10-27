const burger = document.querySelector(".site-header-burger");
const mobileMenu = document.querySelector("#mobile-menu");

burger.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", isOpen);
});
