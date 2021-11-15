const { Schema, model } = require('mongoose');

const toiletSchema = new Schema({
    username: {
        type: String,
    },
    overallRating: {
        type: String,
        trim: true
      },
      location: {
        type: String,
        trim: true
      },
      genderNeutral: {
        type: String,

      },
      cleanliness: {
          type: String,
      },
      changingTable: {
          type: String,
      },
      handicapAccessible: {
          type: String,
      },
      toiletPaper: {
          type: String,
      },
      keys: {
          type: String,
      },
      comment: {
          type: String,
      }
})

const Toilet = new model('Toilet', toiletSchema)

module.exports = Toilet;