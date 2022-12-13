const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/job-rater', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
<<<<<<< HEAD
  useCreateIndex: true,
  useFindAndModify: false,
=======
  // useCreateIndex: true,
  // useFindAndModify: false,
>>>>>>> d547f2f90a9fda64293fda3e74962f4068c294bc
});

module.exports = mongoose.connection;
