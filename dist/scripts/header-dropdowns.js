let dropdowns = Array.from(document.getElementsByClassName("dropdown-toggle"));

dropdowns.forEach((item) => {
  item.addEventListener("click", function () {
    // Kliknutom toggleu dodaje aktivnu klasu.
    // Ovo mora ići prvo jer u suprotnom na kraju forEacha vraća aktivnu klasu svakom (foreach jel...)
    this.classList.toggle("toggle-active");

    // Ovo roštilja kroz dropdowns array i traži onaj koji nije ".this".
    // Onda njima miče aktivnu klasu.
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i] !== this) {
        dropdowns[i].classList.remove("toggle-active");
        //console.log(dropdowns[i].children[1]); // Tu sam provjevarao mogu li upecati child od onoga što nije "this"
        dropdowns[i].children[1].classList.remove("content-visible"); // Tu sam tom childu promjenio CSS display
      }
    }

    // Array od .this da se mogu izvući .chldren jer je .this objekt (typeof this vraća object) i ne mogu mu ući direktno sa .children.
    // Ovo mi treba da izvučem .content divove od svakog toggle-a. Content je child od togglea u DOMu
    let content = Array.from(this.children);
    //console.log(content[1]);  Ovo je array item koji gađam taj .content div, tj probao sam da li to uopće radi

    // Ovo pali i gasi .content div aktivnu klasu pod uvjetom da njego .this ima aktivnu klasu.
    // U suprotnom ju gasi
    if (this.classList.contains("toggle-active")) {
      content[1].classList.add("content-visible");
    } else {
      content[1].classList.remove("content-visible");
    }
  });
});

document.addEventListener("click", function (event) {
  //console.log(event.target);  Tu sam checkirao na što uopće klikam. Headsup - gasi pointer events na span u cssu ako brlja target

  //Ovo čekira da li je klik bio na .dropdown-toggle ili ne.
  // Meni treba event kojem target !nije taj class
  if (!event.target.matches(".dropdown-toggle")) {
    //console.log("Nema match");  Tu sam testirao da li mi event.target.matches radi

    //Ovo opet roštilja dropdowns array i content divove i sve što ima aktivne klase gasi ako event.target nije taj dropdown-toggle.
    for (let i = 0; i < dropdowns.length; i++) {
      if (
        dropdowns[i].classList.contains("toggle-active") &&
        dropdowns[i].children[1].classList.contains("content-visible")
      ) {
        //console.log("success");
        dropdowns[i].classList.remove("toggle-active");
        dropdowns[i].children[1].classList.remove("content-visible");
      }
    }
  }

});
