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
const sections = document.getElementsByTagName('section');
function createListElement (href, text) {
    const newList = document.createElement('li');
    newList.innerHTML = "'<a href='#" + href + "'>" + text + "</a>'";
    return newList;
}

const ulNav = document.getElementById('navbar__list');
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


