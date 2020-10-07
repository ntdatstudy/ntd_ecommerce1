const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Categories', new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  }
}, { timestamps: true }));