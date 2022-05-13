const mongoose = require('mongoose');
const { Schema } = mongoose;

const COMMENT_TYPES = {
  DELETE: 'DELETE'
};

const commentSchema = new Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'product'
    },
    type: {
      type: String,
      enum: [COMMENT_TYPES.DELETE],
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model('comment', commentSchema);

module.exports = {
  Comment,
  COMMENT_TYPES
};
