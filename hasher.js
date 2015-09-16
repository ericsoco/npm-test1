var url = require('url');

module.exports = function (urlStr) {
	var parsed = url.parse(urlStr);
	return parsed.hash;
};