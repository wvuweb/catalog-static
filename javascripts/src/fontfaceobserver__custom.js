// Set custom fonts we're loading as variables for FontFaceObserver
var options = {
  "fonts" : [
    {
      "family" : "HelveticaNeueW01-97Blac",
      "weight" : "normal"
    },
    {
      "family" : "HelveticaNeueW01-45Ligh",
      "weight" : "normal"
    }
  ],
  "timeOut": 8000,
  "latinChars": null
}

// Then check to see if they've been loaded OR are unavailable.
// Custom timeout set at 8 seconds
var fontCheck = [];
for (var font in options.fonts) {
  var face = new FontFaceObserver(options.fonts[font].family, options.fonts[font].weight);
  fontCheck.push(face.check(options.latinChars,options.timeOut));
}

Promise.all(fontCheck).then(function() {
  document.documentElement.className += " fonts-loaded";
}, function() {
  document.documentElement.className += " fonts-unavailable";
});
