/* Menu */
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

/* Esconder NavBar */
const lastScrollTop = 0;
bar = document.getElementById("bar");
subbar = document.getElementById("subnavbar");
window.addEventListener("scroll", function () {
  const scrollTop =
    this.window.pageXOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    bar.style.top = "-100px";
    navbar.style.top = "-295%";
  } else {
    bar.style.top = "0";
    navbar.style.top = "100%";
  }
  lastScrollTop = scrollTop;
});