const FADE_DELAY = 300;

const hamburgerHandler = document.querySelector(".menuHandler");
const closedMenuLogo = document.querySelector(".hamburger--close");
const openedMenuLogo = document.querySelector(".hamburger--open");
const navigation = document.querySelector(".navigation");
let menuIsOpen = false;

document.querySelectorAll(".navigation__list--item").forEach((list) => {
  list.addEventListener("click", handleMenuItem);
});
hamburgerHandler.addEventListener("click", handleMenu);

function handleMenuItem(e) {
  const arrow = this.nextElementSibling;
  const menuItems = e.target.parentNode.lastElementChild;

  arrow.classList.toggle("animationRotate");
  menuItems.classList.toggle("visually-hidden");
}

function handleMenu() {
  if (window.getComputedStyle(navigation).display === "none") {
    closedMenuLogo.style.display = "none";
    openedMenuLogo.style.display = "block";
    navigation.style.display = "block";
  } else {
    closedMenuLogo.style.display = "block";
    openedMenuLogo.style.display = "none";
    navigation.style.display = "none";
  }
}
