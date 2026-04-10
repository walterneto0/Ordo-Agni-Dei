const siteNav = document.getElementById("site-nav");
const backToTopButton = document.querySelector(".back-to-top");
let lastScrollY = window.scrollY;

const updateNavVisibility = () => {
    const currentScrollY = window.scrollY;
    const scrollingUp = currentScrollY < lastScrollY;
    const nearTop = currentScrollY <= 24;

    siteNav.classList.toggle("nav-visible", scrollingUp || nearTop);
    lastScrollY = currentScrollY;
};

siteNav.classList.add("nav-visible");
window.addEventListener("scroll", updateNavVisibility, { passive: true });

backToTopButton?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});