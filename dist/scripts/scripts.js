let toggleHelp = document.querySelector(".toggle-help");
let toggleCs = document.querySelector(".toggle-customer-services");

let contentHelp = document.querySelector(".header-help");
let contentCs = document.querySelector(".header-customer-services");

let dropHelp = (event) => {
  toggleHelp.classList.toggle("toggle-active");
  contentHelp.classList.toggle("active");
  toggleCs.classList.remove("toggle-active");
  contentCs.classList.remove("active");
}

let dropCs = (event) => {
    toggleCs.classList.toggle("toggle-active");
    contentCs.classList.toggle("active");
    toggleHelp.classList.remove("toggle-active");
    contentHelp.classList.remove("active");
}

toggleHelp.onclick = dropHelp;
toggleCs.onclick = dropCs;
