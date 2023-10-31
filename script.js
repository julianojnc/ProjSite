/* Menu */
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

/* PopUpMap */ 
const button = document.querySelector("#openPopUpMap")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog a")

button.onclick = function(){
    modal.showModal()
}

buttonClose.onclick = function(){
    modal.close()
}

/* Esconder NavBar */
const lastScrollTop = 100;
bar = document.getElementById("bar");
subbar = document.getElementById("subnavbar");
window.addEventListener("scroll", function () {
  const scrollTop =
    this.window.pageXOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    bar.style.top = "-100px";
    subbar.style.top = "-500px";
    navbar.style.top = "-295%";
  } else {
    bar.style.top = "0";
    subbar.style.top = "0";
    navbar.style.top = "100%";
  }
  lastScrollTop = scrollTop;
});
