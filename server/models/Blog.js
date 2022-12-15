const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const blogSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    bodyText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      require: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
const Blog = model('Blog', blogSchema);

module.exports = Blog;
