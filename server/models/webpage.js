var cozydb = require('cozydb');

var WebPage = cozydb.getModel('WebPage', {
	'url': {
		type: String
	}
});

module.exports = WebPage;
