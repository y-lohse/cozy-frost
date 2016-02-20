var archives = require('./archives');

module.exports = {
    '': {
        get: archives.index
    }
};