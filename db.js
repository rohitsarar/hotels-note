const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/host';

mongoose.connect(mongoUrl, {

});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB server');
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB server');
});

db.on('error', (err) => {
  console.error('Error connecting to MongoDB server:', err);
});

module.exports = db;
