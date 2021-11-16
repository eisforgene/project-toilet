const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    zipcode: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
        unique: true
      },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
    })

const Location = new model('Location', locationSchema);

module.exports = Location;