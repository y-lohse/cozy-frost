var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.status(200).sendFile('index.html');
});

// Export the router instance to make it available from other files.
module.exports = router;
