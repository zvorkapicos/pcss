let dropdowns = Array.from(document.getElementsByClassName("dropdown-toggle"));

let headerHelp = dropdowns[0];
let headerCs = dropdowns[1];

let showDropdown = (event) => {
  let dropdownActive = event.target;
  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].classList.remove("toggle-active");

    if (dropdownActive) {
      dropdownActive.classList.add("toggle-active");
    }
  }
/*
  dropdowns.forEach(dropdownsItem => {
    dropdownsItem.classList.remove("toggle-active");
  });
*/
//  event.target.classList.toggle("toggle-active");
};

headerHelp.onclick = showDropdown;
headerCs.onclick = showDropdown;

/*

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

*/
