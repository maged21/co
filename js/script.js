var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}

const nav = document.querySelector("nav");

window.addEventListener ("scroll", function() {
  nav.classList.toggle ("sticky", window.scrollY > 0);
}) ;
