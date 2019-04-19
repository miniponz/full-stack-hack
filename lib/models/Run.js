const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const runSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  title: {
    type: String,
  },
  date: {
    type: Schema.Types.Mixed,
    match: /(\d{2}[/.]){2}\d{4}/,
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
  }
});

module.exports = mongoose.model('Run', runSchema);
