var mongoose = require('mongoose');

var WidgetSchema = new mongoose.Schema({
    name: String
});


module.exports = mongoose.model('Widget', WidgetSchema);