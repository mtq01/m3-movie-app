const mobileMenu = document.getElementById("primary-nav-menu");
const menuToggle = document.getElementById("hamburger");
const menuLinks = mobileMenu.querySelectorAll("a");

menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    // add 'toggled' class if its missing, remove if its there
    mobileMenu.classList.toggle("toggled");

    // check if its open (boolean)
    const isOpen = mobileMenu.classList.contains("toggled");

    // update button to tell screen readers its current state
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// close menu if clicking outside
document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && mobileMenu.classList.contains("toggled")) {
        closeMenu();
    }
});

// loop thru each link and add a click listener (close menu when link clicked)
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

// cleanup code to keep it DRY using this closeMenu() function
function closeMenu() {
    // reset attribute when closing menu
    mobileMenu.classList.remove("toggled");
    menuToggle.setAttribute("aria-expanded", "false");
}


// track resize of screen and close the menu at the breakpoints
window.addEventListener("resize", () => {
    if (window.innerWidth >= 600) {
        closeMenu();
    }
});