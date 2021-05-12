/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const hamburgerButton = document.querySelector("#hamburger_button");
const nav_menu_overlay = document.querySelector('#nav_menu_overlay');

function triggerOverlay(){

    hamburgerButton.children[0].classList.toggle("open-first-child");
    hamburgerButton.children[1].classList.toggle("open-second-child");
    hamburgerButton.children[2].classList.toggle("open-third-child");
    document.querySelector('#ham_overlay').classList.toggle('overlay');
    nav_menu_overlay.classList.toggle('display_menu');
    document.querySelector('body').classList.toggle('no_scroll');
}
function removeOverlayForDesktop(){
    if (window.matchMedia("(min-width: 760px)").matches && nav_menu_overlay.classList.contains('display_menu')) {
        hamburgerButton.children[0].classList.remove("open-first-child");
        hamburgerButton.children[1].classList.remove("open-second-child");
        hamburgerButton.children[2].classList.remove("open-third-child");
        document.querySelector('#ham_overlay').classList.remove('overlay');
        nav_menu_overlay.classList.remove('display_menu');
        document.querySelector('body').classList.remove('no_scroll');
    }
}

function sayHello(){
    section3.scrollIntoView({
               behavior: "smooth",
    });
}


// build the overlay

hamburgerButton.addEventListener('click', triggerOverlay);

nav_menu_overlay.addEventListener('click',triggerOverlay);

window.addEventListener('resize', removeOverlayForDesktop);



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


