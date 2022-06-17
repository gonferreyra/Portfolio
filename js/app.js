const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];
// // Como va a retornar un array de 3 elementos, le ponemos la posicion 0 para que retorne el primero

// toggleButton.addEventListener("click", () => {
//   navBarLinks.classList.toggle("active");
// });
// Si la clase 'active' no esta, la agrega y si esta la quita

function showHide() {
  let navLinks = document.getElementsByClassName("navbar-links");
  navBarLinks.classList.toggle("active");
}