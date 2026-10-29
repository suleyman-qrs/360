document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".site-header-burger");
  const mobileMenu = document.querySelector("#mobile-menu");
  if (!burger || !mobileMenu) return;

  burger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", isOpen);
  });
});
