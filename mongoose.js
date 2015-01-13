var
    mongoose = require('mongoose');

module.exports = {
    connect : function () {

    var mongoOptions = {
        db: {
            safe: true
        },
        server: {
            auto_reconnect: true,
            socketOptions: {
                connectTimeoutMS: 5000,
                keepAlive: 1,
                socketTimeoutMS: 3600000
            }
        }
    };

    mongoose.connect('mongodb://localhost/mongo-test', mongoOptions);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('database connection opened');
    });
        
        db.once('close', function callback() {
        console.log('database connection closed');
    });
},
    disconnect : function(){
        console.log('disconnect');
        mongoose.disconnect();
    }

    
} 
