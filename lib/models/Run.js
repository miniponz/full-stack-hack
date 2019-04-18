const mongoose = require('mongoose');

const runSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  pace: {
    type: Number,
    required: true
  },
  notes: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Run', runSchema);
