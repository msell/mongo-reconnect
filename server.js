var app = require('./app.js');

// recreate data

var server = app.listen(3000, function () {
    console.log('api listening on ', server.address().port);
});