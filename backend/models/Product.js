const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Products', new Schema({
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Categories',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  images: [{
    type: String,
    required: true,
  }],
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  salePrice: {
    type: Number,
    min: 0,
  },
  sizes: [{
    size: {
      type: String,
    },
    quantity: {
      type: Number,
      default: 0,
    },
  }],
  description: {
    type: String,
  },
  isTrending: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true }));