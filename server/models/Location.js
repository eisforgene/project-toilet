const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    location: {
        type: Number,
        required: true,
        trim: true
      },
    toilets: [{
        type: Schema.Types.ObjectId,
        ref: 'Toilet'
    }]
    })

const Location = new model('Location', locationSchema);

module.exports = Location;