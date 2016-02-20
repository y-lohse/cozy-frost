var americano = require('americano');

var port = process.env.PORT || 9250;
americano.start({name: 'yourapp', port: port});