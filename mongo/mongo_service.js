const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || require("../env").connectionString,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise;

module.exports = {
  User: require("./users/user.model")
};
