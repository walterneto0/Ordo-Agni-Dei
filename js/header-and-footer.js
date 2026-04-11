const siteNav = document.getElementById("site-nav");
const mainFloatButtons = document.querySelector(".main-scroll-buttons");
const backToTopButton = document.querySelector(".back-to-top");
const backToBottomButton = document.querySelector(".back-to-bottom");
let lastScrollY = window.scrollY;

const updateNavVisibility = () => {
    const currentScrollY = window.scrollY;
    const scrollingUp = currentScrollY < lastScrollY;
    const nearTop = currentScrollY <= 24;

    const shouldShow = scrollingUp || nearTop;
    siteNav.classList.toggle("nav-visible", shouldShow);
    mainFloatButtons?.classList.toggle("visible", shouldShow);
    lastScrollY = currentScrollY;
};

siteNav.classList.add("nav-visible");
window.addEventListener("scroll", updateNavVisibility, { passive: true });

backToTopButton?.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#titulo-da-confissao")?.scrollIntoView({ behavior: "smooth" });
});

backToBottomButton?.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#fim-do-documento")?.scrollIntoView({ behavior: "smooth" });
});