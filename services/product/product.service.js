const Product = require('../../models/product.model');

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
      return res.status(201).json({
        message: 'Product created successfully',
        product
      });
    })
    .catch((error) => {
      return res.status(400).json({
        message: 'Failed to create product',
        error
      });
    });
};

const read = (req, res) => {
  // TODO: look into adding pagination
  Product.find()
    .then((products) => {
      return res.status(200).json({
        products: products
      });
    })
    .catch((error) => {
      return res.status(400).json({
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
    stock
  } = req.body;

  Product.findById(req.params.id)
    .then((product) => {
      if (name) product.name = name;
      if (description) product.description = description;
      if (salePrice) product.salePrice = salePrice;
      if (costPrice) product.costPrice = costPrice;
      if (stock) product.stock = stock;

      product.save()
        .then((product) => {
          return res.status(200).json({
            message: 'Updated product successfully',
            product
          });
        })
        .catch((error) => {
          return res.status(400).json({
            message: 'Failed to update product details',
            error
          });
        });
    })
    .catch((error) => {
      return res.status(400).json({
        message: 'Failed to update product details',
        error
      });
    });
};

const remove = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true })
    .then((product) => {
      return res.status(200).json({
        message: 'Product deleted successfully',
        product
      });
    })
    .catch((error) => {
      return res.status(400).json({
        message: 'Failed to delete product',
        error
      });
    });
};

module.exports = {
  create,
  read,
  update,
  remove
};
