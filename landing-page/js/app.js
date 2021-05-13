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
const hamburgerButton = document.querySelector("#hamburger_button");
const nav_menu_overlay = document.querySelector('#nav_menu_overlay');
const sections = document.querySelectorAll('section');
const section__links_desktop = document.querySelector(".section__links_desktop");
const section__links_mobile = document.querySelector(".section__links_mobile");;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


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

function createSections() {
    const fragment1 = document.createDocumentFragment();
    const fragment2 = document.createDocumentFragment();
    sections.forEach(element => {
        let new_ul1 = document.createElement("ul");
        let new_ul2 = document.createElement("ul");
        new_ul1.setAttribute("class","nav_items");
        new_ul1.setAttribute("data-nav",`${element.getAttribute('data-nav')}`);
        new_ul1.innerText = `${element.getAttribute('data-nav')}`;
        new_ul2.innerHTML += `<ul class ="nav_items" data-nav ="${element.getAttribute('data-nav')}"> ${element.getAttribute('data-nav')} </ul>`;
        
        new_ul1.addEventListener('click',function () {
            element.scrollIntoView({
                behavior: 'smooth'
            })
        })
                
        new_ul2.addEventListener('click',function () {
            element.scrollIntoView({
                behavior: 'smooth'
            })
        })

        fragment1.appendChild(new_ul1);
        fragment2.appendChild(new_ul2);
    })
    section__links_desktop.appendChild(fragment1);
    section__links_mobile.appendChild(fragment2);
}

function appendEmail(){
    let email = document.createElement('ul');
    email.innerHTML = `<a class ="nav_items"><a href= "/">Send an Email</a>`;
    section__links_mobile.appendChild(email);
}

function inViewport (element) {
    const viewportSize = element.getBoundingClientRect();

    return (
        viewportSize.top >= 0 &&
        viewportSize.x >= 0 &&
        viewportSize.bottom <= (document.documentElement.clientHeight || window.innerHeight) &&
        viewportSize.right <= (document.documentElement.clientWidth || window.innerWidth)
    );
}

function addActiveClass (){
    sections.forEach(element => {
        const nav_item = document.querySelector(".section__links_desktop").querySelector(`[data-nav*="${element.getAttribute('data-nav')}"]`);
        if (inViewport(element)){
            element.classList.add("your-active-class");
            nav_item.classList.add("active-section");
        }
        else{
            element.classList.remove("your-active-class");
            nav_item.classList.remove("active-section");
        }
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the overlay

hamburgerButton.addEventListener('click', triggerOverlay);

nav_menu_overlay.addEventListener('click',triggerOverlay);

window.addEventListener('resize', removeOverlayForDesktop);

window.addEventListener('scroll',addActiveClass)

// Add class 'active' to section when near top of viewport




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
createSections();
appendEmail();


// Build menu 

// Scroll to section on link click

// Set sections as active


