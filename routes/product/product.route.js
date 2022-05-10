const router = require('express').Router();
const productService = require('../../services/product/product.service');

// Create
router.post('/', productService.create);

// Read
router.get('/', productService.read);

// Update
router.post('/update/:id', productService.update);

// Delete
router.delete('/:id', productService.remove);

module.exports = router;
