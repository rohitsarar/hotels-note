const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  test: {
    type: String,
    unique: true,
    required: true,
  },
  swad: {
    type: String,
    required: true,
  },
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
