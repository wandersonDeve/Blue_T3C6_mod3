const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose.connect("process.env.Db_URL"),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
};

module.exports = connectToDb;
