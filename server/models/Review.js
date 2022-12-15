const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema(
  {
    employerName: {
      type: String,
      required: 'you need to add the name of Employer',
      minlength: 1,
      maxlength: 100,
    },
    reviewText: {
      type: String,
      required: 'You need to leave a review',
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
const Review = model('Review', reviewSchema);

module.exports = Review;
