const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/menu';

// Connect to MongoDB
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const menudb = mongoose.connection;

// Event listeners for connection events
menudb.on('connected', () => {
  console.log('Connected to MongoDB server menu');
});

menudb.on('error', (err) => {
  console.log('Error connecting to MongoDB:', err);
});

menudb.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

module.exports = menudb;
