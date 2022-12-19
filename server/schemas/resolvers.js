const { AuthenticationError } = require('apollo-server-express');
const { User, Review, Blog } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('reviews')
          .populate('blogs');

        console.log(userData);
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('reviews')
        .populate('blogs');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('reviews')
        .populate('blogs');
    },
    reviews: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Review.find(params).sort({ createdAt: -1 });
    },
    review: async (parent, { _id }) => {
      return Review.findOne({ _id });
    },
    blogs: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Blog.find(params).sort({ createdAt: -1 });
    },
    blog: async (parent, { _id }) => {
      return Blog.findOne({ _id });
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      // checking if user exists with email and credentials
      if (!user) {
        // if not throw an error
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addReview: async (parent, args, context) => {
      if (context.user) {
        const review = await Review.create({
          ...args,
          username: context.user.username,
        });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { reviews: review._id } },
          { new: true }
        );
        return review;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addBlog: async (parent, args, context) => {
      if (context.user) {
        const blog = await Blog.create({
          ...args,
          username: context.user.username,
        });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { blogs: blog._id } },
          { new: true }
        );
        return blog;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { blogId, commentBody }, context) => {
      if (context.user) {
        const updatedBlog = await Blog.findOneAndUpdate(
          { _id: blogId },
          {
            $push: {
              comments: { commentBody, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );
        return updatedBlog;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeBlog: async (parent, { blogId }) => {
      return await Blog.findByIdAndDelete({ _id: blogId });
    },
    updateBlog: async (parent, { blogId, title, bodyText }, context) => {
      if (context.user) {
        const updatedBlog = await Blog.findOneAndUpdate(
          { _id: blogId },
          { title, bodyText }
        );
        return updatedBlog;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
