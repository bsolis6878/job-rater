const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const commentSchema = require('./Comment');

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
    comments: [commentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
blogSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});
const Blog = model('Blog', blogSchema);

module.exports = Blog;
