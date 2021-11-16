const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    username: {
        type: String
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
        type: String

      },
      cleanliness: {
          type: String
      },
      changingTable: {
          type: String
      },
      handicapAccessible: {
          type: String
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

const Review = new model('Review', reviewSchema)

module.exports = Review;