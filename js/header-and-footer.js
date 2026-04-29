const siteNav = document.getElementById("site-nav");
const mainFloatButtons = document.querySelector(".main-scroll-buttons");
const backToTopButton = document.querySelector(".back-to-top");
const backToBottomButton = document.querySelector(".back-to-bottom");
let lastScrollY = window.scrollY;

if (siteNav) {
    const navLinks = siteNav.querySelector(".nav-links");
    const searchInput = document.getElementById("searchInput");
    if (navLinks) {
        if (!navLinks.id) {
            navLinks.id = "nav-links";
        }

        let navToggle = siteNav.querySelector(".nav-toggle");
        if (!navToggle) {
            navToggle = document.createElement("button");
            navToggle.type = "button";
            navToggle.className = "nav-toggle";
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-controls", navLinks.id);
            navToggle.setAttribute("aria-label", "Abrir menu");
            navToggle.innerHTML = "<span class=\"nav-toggle-icon\" aria-hidden=\"true\">☰</span>";
            siteNav.insertBefore(navToggle, navLinks);
        }

        navToggle.addEventListener("click", (e) => {
            e.preventDefault();
            const opened = siteNav.classList.toggle("nav-open");
            navToggle.setAttribute("aria-expanded", opened ? "true" : "false");
            searchInput.style.display = opened ? "none" : "block";
        });
    }
}

const updateNavVisibility = () => {
    const currentScrollY = window.scrollY;
    const scrollingUp = currentScrollY < lastScrollY;
    const nearTop = currentScrollY <= 170;

    const shouldShow = scrollingUp || nearTop;
    siteNav.classList.toggle("nav-visible", shouldShow);
    mainFloatButtons?.classList.toggle("visible", shouldShow);
    lastScrollY = currentScrollY;
};

siteNav.classList.add("nav-visible");
window.addEventListener("scroll", updateNavVisibility, { passive: true });

backToTopButton?.addEventListener("click", (event) => {
    event.preventDefault();
    const topTarget = document.querySelector("#titulo-da-confissao") || document.querySelector("#TOP") || document.documentElement;
    topTarget?.scrollIntoView({ behavior: "smooth" });
});

backToBottomButton?.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#fim-do-documento")?.scrollIntoView({ behavior: "smooth" });
});