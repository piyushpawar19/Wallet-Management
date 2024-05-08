

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const mongoURI = process.env.MONGODB_URI||'mongodb://localhost:27017/WalletManagement';

// Connect to MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
