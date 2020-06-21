// Header buttons
let headerActions = document.querySelector(".header-main__items");
let btnNavigation = document.querySelector(".header-main__navigation-toggle");
let btnAccount = document.querySelector(".header-main__actions-account");
let btnCart = document.querySelector(".header-main__actions-cart");

//Navigation containers
let navPrimary = document.querySelector(".navigation-wrapper");
let pageOverlay = document.querySelector(".navigation-overlay");

// Tu otvaram navigaciju
headerActions.addEventListener("click", function (event) {
  if (event.target == btnNavigation) {
    pageOverlay.classList.add("overlay-active");
    navPrimary.classList.add("navigation-active");
  }
});

// Tu se roštiljaju podizbornici i zatvara navigacija
let openedSubmenus = Array.from(
  document.getElementsByClassName("main-menu-submenu")
);

navPrimary.addEventListener("click", function (event) {
  if (event.target.parentElement.classList.contains("parent")) {
    let target = event.target.parentElement;
    target.children[1].classList.add("main-menu-submenu__active");
  } else if (event.target.className == "back") {
    openedSubmenus.forEach((item) => {
      item.classList.remove("main-menu-submenu__active");
    });
  } else if (event.target.className == "close") {
    pageOverlay.classList.remove("overlay-active");
    navPrimary.classList.remove("navigation-active");
    openedSubmenus.forEach((item) => {
      item.classList.remove("main-menu-submenu__active");
    });
  }
});

//
let myAccount = document.querySelector(".my-account");

// Otvaranje my accounta
btnAccount.addEventListener("click", function (event) {
  if (event.target == btnAccount) {
    myAccount.classList.toggle("my-account-active");
  } else if (event.target != btnAccount) {
  }
});

document.addEventListener("click", function (event) {
  if (event.target !== btnAccount) {
    myAccount.classList.remove("my-account-active");
  }
});

// Otvaranje minicarta
let miniCart = document.querySelector(".minicart");
btnCart.addEventListener("click", function (event) {
  if (event.target == btnCart) {
    miniCart.classList.toggle("minicart-active");
    pageOverlay.classList.add("overlay-active");

    let miniCartClose = document.querySelector(".minicart .close");
    miniCartClose.addEventListener("click", function (event) {
      if (event.target == miniCartClose) {
        miniCart.classList.remove("minicart-active");
        pageOverlay.classList.remove("overlay-active");
      }
    });
  }
});
