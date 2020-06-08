let dropdowns = Array.from(document.getElementsByClassName("dropdown-toggle"));

dropdowns.forEach((item) => {
  item.addEventListener("click", function(){

    // Ovo mora ići prvo jer u suprotnom na kraju forEacha vraća aktivnu klasu
    this.classList.toggle("toggle-active");

    // Tu sam napravio array od .this da mogu izvući child elemente
    let content = Array.from(this.children);
    //console.log(content[1]); // Ovo je array item koji gađam (.content)

    // Ovo tu pali i gasi .content klasu na klik. Ovo treba izmjeniti da mjenja klasu zbog transforma, a ne CSS kroz JS
    if (this.classList.contains("toggle-active")){
      content[1].style.display = "block";
    } else {
      content[1].style.display = "";
    }

    // Ovo roštilja kroz dropdowns array i traži onaj koji nije "this" da mu makne aktivnu klasu
    for (let i = 0; i < dropdowns.length; i++) {

      if (dropdowns[i] !== this) {
        dropdowns[i].classList.remove("toggle-active"); // Ovo konkretno miče klasu
        //console.log(dropdowns[i].children[1]); // Tu sam provjevarao mogu li upecati child od onoga što nije "this"
        dropdowns[i].children[1].style.display = "none"; // Tu sam tom childu promjenio CSS display
      }

    }

  });
});
