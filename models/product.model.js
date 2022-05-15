const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    salePrice: {
      type: Number,
      min: [0, 'Must be greater than or equal to 0'],
      required: true
    },
    costPrice: {
      type: Number,
      min: [0, 'Must be greater than or equal to 0'],
      required: true
    },
    stock: {
      type: Number,
      min: [0, 'Must be greater than or equal to 0'],
      default: 0
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'comment'
    }],
    isDeleted: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;
