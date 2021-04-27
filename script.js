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
  let arrow = window.getComputedStyle(this, ":after");
  this.nextElementSibling.classList.toggle("visually-hidden");

  console.log(arrow.getPropertyValue("width"));
  arrow.style.transform = "rotate(180deg)";
  // const target = e.currentTarget.lastElementChild;
  // // const arrow = e.currentTarget;
  // if (target.classList.contains("visually-hidden")) {
  //   e.target.children[0].style.transform = "rotate(180deg)";
  //   target.classList.remove("visually-hidden");
  //   target.classList.add("fade-in");
  // } else {
  //   target.classList.add("fade-out");

  //   setTimeout(() => {
  //     target.classList.remove("fade-out");
  //     target.classList.remove("fade-in");
  //     target.classList.add("visually-hidden");
  //     e.target.children[0].style.transform = "rotate(0deg)";
  //   }, FADE_DELAY);
  // }
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
