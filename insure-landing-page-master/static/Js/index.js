// Getting the needed divs
const body = document.querySelector("body");
const nav = document.getElementById('nav');
const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById("close-nav");

console.log("Hollla worlda")

document.addEventListener("DOMContentLoaded", () => {

    // To open the nav
    openNav.addEventListener('click', () => {
        nav.style.display = "block";
        closeNav.style.display = "block";
        body.style.overflow = "hidden";
    })
    // To close the nav
    closeNav.addEventListener('click', () => {
        nav.style.display = "none";
        closeNav.style.display = "none";
        body.style.overflow = "scroll";
    })
});