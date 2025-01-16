// Disable Zoom
document.addEventListener("touchmove", function (event) {
  if (event.scale !== 1) {
    event.preventDefault();
  }
}, { passive: false });

// Toggle Menu
function toggleMenu(icon) {
  icon.classList.toggle("change");
  const sideMenu = document.getElementById("sideMenu");
  sideMenu.style.left = sideMenu.style.left === "0px" ? "-250px" : "0px";
}
