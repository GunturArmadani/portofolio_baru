/* ==========================
MOBILE MENU
========================== */

const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = document.querySelectorAll(".mobile-menu a");

function toggleMenu() {
    mobileMenu.classList.toggle("active");
}

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

/* ==========================
AOS
========================== */

AOS.init({
    duration: 1000,
    offset: 120,
    easing: "ease-out-cubic",
    once: true
});