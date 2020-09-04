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
/* Create a li element for the navigation menu */
function createListElement (href, text) {
    const newList = document.createElement('li');
    /* newList.classList.add('menu__link'); */
    newList.innerHTML = "<a href='#" + href + "' class='menu__link'>" + text + "</a>";
    return newList;
}

// Helper to check if an element is in viewport
// https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
// https://gist.github.com/davidtheclark/5515733
function isInViewport (elem) {
    var rect = elem.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document. documentElement.clientWidth)
  );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
/* Get all elements with tag section */
const sections = document.getElementsByTagName('section');

/* Get the ul element of the navigation menu */
const ulNav = document.getElementById('navbar__list');

/* For each section, add a li element in the navigation menu with the hyperlink to the section */
for (let i=0; i < sections.length; i++) {
    ulNav.appendChild(createListElement(sections[i].id, sections[i].dataset.nav));
};

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', function () {
    const sections = document.getElementsByTagName('section');
    for (section of sections) {
        const activeNavLi = document.getElementById(`section${section.dataset.nav.slice(8, 9)}`);
        console.log(section.dataset.nav.slice(8, 9));

        if (isInViewport(section)) {
            section.classList.add('active_section');
            activeNavLi.className = 'active_section';
            console.log(`${section.dataset.nav} is in viewport!`);

        } else {
            section.classList.remove('active_section');
            activeNavLi.className = '';
            console.log(`${section.dataset.nav} is NOT in viewport!`);
        }
    }
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


