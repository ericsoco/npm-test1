var hasher = require('./hasher.js');

var hash = hasher(window.location.toString());

window.document.querySelector('div').innerHTML = hash;