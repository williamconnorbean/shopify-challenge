const router = require('express').Router();
const productService = require('../../services/product/product.service');
const requiredValidator = require('../../middleware/validation/general/required.validation');
const productValidator = require('../../middleware/validation/product/product.validation');

// Create
router.post(
  '/',
  requiredValidator.requiredFields(['name', 'description', 'salePrice', 'costPrice']),
  productValidator.validateProductBody(),
  productService.create
);

// Read
router.get('/', productService.read);

// Update
router.put(
  '/update/:id',
  productValidator.validateProductBody(),
  productService.update
);

// Delete
router.delete('/:id', productService.remove);

// Create comment
router.post(
  '/:id/comment',
  requiredValidator.requiredFields(['commentText']),
  productValidator.validateComment(),
  productService.createComment
);

module.exports = router;
