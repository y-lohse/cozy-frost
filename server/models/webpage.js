var cozydb = require('cozydb');

var WebPage = cozydb.getModel('WebPage', {
	'url': {
		type: String
	},
	'title': {
		type: String
	},
	'description': {
		type: String
	},
	'slug': {
		type: String
	},
	'processed': {
		type: Boolean
	},
	'archived': {
		type: Date
	},
	'tags': {
		type: Array
	},
});

module.exports = WebPage;
