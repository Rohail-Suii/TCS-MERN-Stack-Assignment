var mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
}
);

module.exports = mongoose.model('Employee', Schema);


