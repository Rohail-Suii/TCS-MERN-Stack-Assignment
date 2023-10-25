var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    teamname: {
        type: String,
        required: true
    },

}
);

module.exports = mongoose.model('team', Schema);


