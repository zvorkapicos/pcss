const md = window.matchMedia("(max-width:1023px)");

let headerActions = document.querySelector(".header-main__items");
let btnNavigation = document.querySelector(".header-main__navigation-toggle");
/* let btnAccount = document.querySelector(".header-main__actions-account");
let btnCart = document.querySelector(".header-main__actions-cart"); */

let navPrimary = document.querySelector(".navigation-wrapper");
let pageOverlay = document.querySelector(".navigation-overlay");

function mainMenu(md) {
if (md.matches) {
  
// Tu otvaram navigaciju
headerActions.addEventListener("click", function (event) {
  /* console.log(event.target); */
  if (event.target == btnNavigation) {
    /* console.log("Navigation"); */
    pageOverlay.classList.add("overlay-active");
    navPrimary.classList.add("navigation-active");
  }
});

// Ovdje vadim parent width i dodajem ju na podizbornike jer position fixed ne jebe parenta nego window
let parent = document.querySelector(".parent");
let parentStyles = window.getComputedStyle(parent);
let parentWidth = parentStyles.getPropertyValue("width");
let submenus = Array.from(document.querySelectorAll(".main-menu-submenu"));
submenus.forEach((item) => {
  item.style.width = parentWidth;
});

// Tu se roštiljaju podizbornici i zatvara navigacija
let parentMenus = Array.from(document.getElementsByClassName("parent"));
let goBack = Array.from(document.getElementsByClassName("back"));
let openedSubmenus = Array.from(document.getElementsByClassName("main-menu-submenu"));

navPrimary.addEventListener("click", function (event) {
  if (event.target.parentElement.classList.contains("parent")) {
    let target = event.target.parentElement;
    target.children[1].classList.add("main-menu-submenu__active");

  } else if (event.target.className == "back") {
    openedSubmenus.forEach((item) => {
      item.classList.remove("main-menu-submenu__active");
    });
  } 
  else if (event.target.className == "close") {
    pageOverlay.classList.remove("overlay-active");
    navPrimary.classList.remove("navigation-active");
    openedSubmenus.forEach((item) => {
      item.classList.remove("main-menu-submenu__active");
    });
  }
});
}
} 

md.addListener(mainMenu);