const { Schema, model } = require('mongoose');

const toiletSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    overallRating: {
        type: String,
        required: true,
        trim: true
      },
      location: {
        type: String,
        required: true,
        trim: true
      },
      genderNeutral: {
        type: String,
        required: true,
      },
      cleanliness: {
          type: String,
          required: true,
      },
      changingTable: {
          type: String,
          required: true,
      },
      handicapAccessible: {
          type: String,
          required: true,
      },
      toiletPaper: {
          type: String,
          required: true,
      },
      keys: {
          type: String,
          required: true,
      },
      comment: {
          type: String,
          required: true
      }
})

const Toilet = new model('Toilet', toiletSchema)

module.exports = Toilet;