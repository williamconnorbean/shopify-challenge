const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI;

const connectDb = async () => {
  try {
    mongoose.connect(uri, { useNewUrlParser: true });
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log('MongoDB database connection established successfully');
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = { connectDb };
