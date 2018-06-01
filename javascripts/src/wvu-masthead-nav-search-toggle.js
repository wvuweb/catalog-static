// Required JS for "WVU Masthead w/Nav + Search Toggle"

// First, get the ID's of what we want to add classes to:
var inactiveSearch = document.getElementById('js-wvu-nav__search-toggle');
var mastheadSearchSlider = document.getElementById('js-wvu-masthead__search-slider');
var mastheadSearchInput = document.getElementById('js-wvu-masthead__search-input');

// Find the search toggle, then, on click
// If there is not a class of `wvu-nav__custom-search-toggle--active-search`, add it. This changes the icon to an `×`
// At the same time, make the search pattern visible by adding the `wvu-masthead__search-slider--is-visible` class to the search container.
// Finally, add focus to the <input>.
inactiveSearch.addEventListener('click', function () {
  if (!this.classList.contains('wvu-nav__custom-search-toggle--active-search')) {
    this.classList.add('wvu-nav__custom-search-toggle--active-search');
    mastheadSearchSlider.classList.add('wvu-masthead__search-slider--is-visible');
    mastheadSearchInput.focus();
  }
  // When the button has already been clicked (and has the class we added above), the search is visible.
  // Remove the `wvu-nav__custom-search-toggle--active-search` to change the `×` icon back to a search icon.
  // Also remove the `wvu-masthead__search-slider--is-visible` to hide the search.
  // Then, finally, restore focus to the search button.
  else {
    this.classList.remove('wvu-nav__custom-search-toggle--active-search');
    mastheadSearchSlider.classList.remove('wvu-masthead__search-slider--is-visible');
    this.focus();
  }
});
