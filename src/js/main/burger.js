const menuBtn = document.querySelector(".menu__button");
const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu__item");
const mediaQuery = window.matchMedia("(min-width: 768px)");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("open");
});

menuItem.forEach((elem) => {
  elem.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    menu.classList.remove("open");
  });
});

function handleScreenWidthChange(e) {
  if (e.matches) {
      menu.classList.remove("open");
      menuBtn.classList.remove("open");
  }
}

handleScreenWidthChange(mediaQuery);
mediaQuery.addEventListener('change', handleScreenWidthChange);
