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
    newList.innerHTML = "'<a href='#" + href + "'>" + text + "</a>'";
    return newList;
}


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


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


