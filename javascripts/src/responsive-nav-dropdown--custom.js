// Init responsive nav
var customToggle = document.getElementById('nav-toggle');
var navigation = responsiveNav(".nav-collapse", {
  animate: true,                // Boolean: Use CSS3 transitions, true or false
  insert: "before",             // String: Insert the toggle before or after the navigation
  transition: 600,              // Integer: Speed of the transition, in milliseconds
  customToggle: "#nav-toggle",  // Selector: Specify the ID of a custom toggle
  enableFocus: true,            // Boolean: Do we add 'focus' class in nav elements
  enableDropdown: true,         // Boolean: Do we use multi level dropdown
  menuItems: "menu-items",      // String: Class that is added only to top ul element
  subMenu: "sub-menu",
  openPos: "relative",          // String: Class that is added to sub menu ul elements
  openDropdown: '<span class="screen-reader-text">Open sub menu</span>',    // String: Label for opening sub menu
  closeDropdown: '<span class="screen-reader-text">Close sub menu</span>',  // String: Label for closing sub menu
  open: function () {
    customToggle.innerHTML = '<img src="https://static.wvu.edu/global/images/icons/wvu/hamburger-menu--1.0.0.svg" alt="Menu icon" />Close Menu';
  },
  close: function () {
    customToggle.innerHTML = '<img src="https://static.wvu.edu/global/images/icons/wvu/hamburger-menu--1.0.0.svg" alt="Menu icon" />Open Menu';
  },
  resizeMobile: function () {
    customToggle.setAttribute( 'aria-controls', 'nav' );
  },
  resizeDesktop: function () {
    customToggle.removeAttribute( 'aria-controls' );
  },
});
