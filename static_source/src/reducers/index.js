import { combineReducers } from 'redux';
import { getProducts, updateProduct, deleteProduct, createProduct } from './product';
import { createDeletionComment } from './comment';

export default combineReducers({
  product: combineReducers({
    getProducts,
    updateProduct,
    deleteProduct,
    createProduct
  }),
  comment: combineReducers({
    createDeletionComment
  })
});
