const { Schema, model } = require('mongoose');

const toiletSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    overallRating: {
        type: Number,
        required: true,
        trim: true
      },
      location: {
        type: String,
        required: true,
        trim: true
      },
      genderNeutral: {
        type: Boolean,
        required: true,
      },
      cleanliness: {
          type: Number,
          require: true,
      },
      changingTable: {
          type: Boolean,
          require: true,
      },
      handicapAccessible: {
          type: Number,
          require: true,
      },
      toiletPaper: {
          type: Boolean,
          require: true,
      },
      keys: {
          type: Boolean,
          require: true,
      },
      comment: {
          type: String,
          require: true
      }
})

const Toilet = new model('Toilet', toiletSchema)

module.exports = Toilet;