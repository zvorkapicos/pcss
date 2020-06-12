let headerActions = document.querySelector(".header-main__items");
let btnNavigation = document.querySelector(".header-main__navigation-toggle");
let btnAccount = document.querySelector(".header-main__actions-account");
let btnCart = document.querySelector(".header-main__actions-cart");

let mainMenu = document.querySelector(".navigation-wrapper");
let navPrimary = document.querySelector(".navigation-wrapper");
let pageOverlay = document.querySelector(".navigation-overlay");


// Tu otvaram navigaciju
headerActions.addEventListener("click", function(event){
    console.log(event.target);
    if(event.target == btnNavigation){
        console.log("Navigation")
        pageOverlay.classList.add("overlay-active");
        navPrimary.classList.add("navigation-active");
    }

});

// Ovdje vadim parent width i dodajem ju na podizbornike jer position fixed ne jebe parenta
    let parent = document.querySelector(".parent");
    let parentStyles = window.getComputedStyle(parent);
    let parentWidth = parentStyles.getPropertyValue("width");
    document.querySelector(".main-menu-submenu").style.width = parentWidth;


// Tu zatvaram navigaciju i jebavam podizbornike
mainMenu.addEventListener("click", function (event){
    let btnClose = document.querySelector(".close");
    if(event.target == btnClose){
        pageOverlay.classList.remove("overlay-active");
        navPrimary.classList.remove("navigation-active");
    }

    
    

    let parentMenu = Array.from(document.getElementsByClassName("parent"));
    console.log("tu sam");

    


});
