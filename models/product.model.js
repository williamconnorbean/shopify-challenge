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
      required: true
    },
    costPrice: {
      type: Number,
      required: true
    },
    stock: {
      type: Number,
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
