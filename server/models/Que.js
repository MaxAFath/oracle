const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const queSchema = new Schema({
    watchDate:{
        type: Date,
        default: Date.now
    },
    watched:[
        {type: Schema.Types.ObjectId,
        ref: 'Show'}
    ]
});

const Que = mongoose.model('Que', queSchema);

module.exports= Que;