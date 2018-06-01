// Required JS for "WVU Masthead w/Nav + Search Toggle"

// First, get the ID's of what we want to add classes to:
var inactiveSearch = document.getElementById('js-wvu-nav__search-toggle');
var mastheadSearchSlider = document.getElementById('js-wvu-masthead__search-slider');

// On click toggle the class `.active-search` to the search button. This changes it to an `×`
// On click toggle the class `.closed` to the search. This pulls it from being offscreen into view.
inactiveSearch.addEventListener('click', function () {
  inactiveSearch.classList.toggle('active-search');
  mastheadSearchSlider.classList.toggle('closed');
});
