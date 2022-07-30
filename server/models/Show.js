const mongoose = require('mongoose');
const { Schema } = mongoose;

const showSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: null
    },
    url:{
        type:String,
        default: null
    }
});

const Show = mongoose.model('Show', showSchema);

module.exports = Show;