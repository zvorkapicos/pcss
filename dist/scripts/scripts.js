let dropdowns = Array.from(document.getElementsByClassName("dropdown-toggle"));

dropdowns.forEach((item) => {
  item.addEventListener("click", function(){

    this.classList.toggle("toggle-active");
    for (let i = 0; i < dropdowns.length; i++) {

      if (dropdowns[i] !== this) {
        dropdowns[i].classList.remove("toggle-active");
      }

    }

  });
});
