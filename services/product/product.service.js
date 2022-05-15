const Product = require('../../models/product.model');
const { Comment, COMMENT_TYPES } = require('../../models/comment.model');

const create = (req, res) => {
  const {
    name,
    description,
    salePrice,
    costPrice,
    stock
  } = req.body;

  const newProduct = new Product({
    name,
    description,
    salePrice,
    costPrice,
    stock
  });

  newProduct.save()
    .then((product) => {
      res.status(201).json({
        message: 'Product created successfully',
        product
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: 'Failed to create product',
        error
      });
    });
};

const read = (req, res) => {
  // TODO: In a future state I would look to add pagination to this service
  // and support some kind of frontend pagination as well to prevent performance issues
  // with large product inventories
  Product
    .find({ isDeleted: { $ne: true } } )
    .populate({
      path: 'comments',
      model: 'comment'
    })
    .then((products) => {
      res.status(200).json({
        products
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: 'Failed to find products',
        error
      });
    });
};

const update = (req, res) => {
  const {
    name,
    description,
    salePrice,
    costPrice,
    stock,
    isDeleted
  } = req.body;

  Product.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      salePrice,
      costPrice,
      stock,
      isDeleted
    },
    { new: true })
    .then((product) => {
      res.status(200).json({
        message: 'Product deleted successfully',
        product
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: 'Failed to delete product',
        error
      });
    });
};

const remove = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true })
    .then((product) => {
      res.status(200).json({
        message: 'Product deleted successfully',
        product
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: 'Failed to delete product',
        error
      });
    });
};

const createComment = (req, res) => {
  const { id } = req.params;
  const { commentText } = req.body;

  Product.findById(id)
    .then((product) => {
      const newComment = new Comment({
        productId: id,
        type: COMMENT_TYPES.DELETE,
        comment: commentText
      });

      newComment.save()
        .then((comment) => {
          product.updateOne(
            { $push: { comments: comment } },
            (error) => {
              if (error) {
                res.status(400).json({
                  message: 'Failed to link comment to product',
                  error
                });
              } else {
                res.status(200).json({
                  message: 'Comment created successfully',
                  product
                });
              }
            }
          );
        })
        .catch((error) => res.status(400).json({
          message: 'Failed to create comment',
          error
        }));
    })
    .catch((error) => res.status(400).json({
      message: 'Failed to find product',
      error
    }));
};

module.exports = {
  create,
  read,
  update,
  remove,
  createComment
};
