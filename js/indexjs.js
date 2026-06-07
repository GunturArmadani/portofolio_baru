// Mobile Menu Toggle

function toggleMenu() {
    document
        .getElementById("mobileMenu")
        .classList.toggle("active");
}

// Close menu when clicking outside

document.addEventListener("click", function (e) {

    const menu = document.getElementById("mobileMenu");
    const hamburger = document.querySelector(".hamburger");

    if (
        !menu.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        menu.classList.remove("active");
    }

});

// Close menu after clicking a navigation link

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("mobileMenu")
            .classList.remove("active");

    });

});