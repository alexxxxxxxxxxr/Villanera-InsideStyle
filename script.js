const headerNav = document.querySelector  (".header_nav");
// const headNav ay variable para hiramin ang header_nav sa html
const toggleMenu = document.querySelector  (".toggle_menu");

//arrow function : return
//toggle: click once to open/do something
toggleMenu.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    toggleMenu.classList.toggle("open");
});






























