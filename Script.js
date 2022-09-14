/* BURGERMENU */
// En variabel som vi kan referer til som toggle-btn senere
const btn = document.querySelector(".toggle-btn");

const btn_img = document.querySelector(".btn_img");
// Variabel til ".main-menu"
const menu = document.querySelector(".menu");

// Funktion kaldet togglemenu
function toggleMenu() {
  // ClassList.toggle gør at menu at der sker noget når klassen bliver vist (shown)
  menu.classList.toggle("shown");

  // Variablen menuShown skal indeholde shown -brug ClassList contains
  const menuShown = menu.classList.contains("shown");

  // Bruger if sætning til at spørge om funktionen er shown eller ej
  if (menuShown) {
    console.log(menuShown);

    btn_img.src = "kryds.svg";
    //hvis der bliver trykket på knappen så den toggler bliver billedet af krydset vist
  } else {
    console.log(menuShown);

    //  bliver til burgermenu ikonet igen hvis menuShown ikke er til stede (false)
    btn_img.src = "burger_ikon.svg";
  }
}

// lytter efter klik til "knappen" menu. dette starter funktionen
btn.addEventListener("click", toggleMenu);
