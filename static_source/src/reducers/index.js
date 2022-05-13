import { combineReducers } from 'redux';
import { getProducts, updateProduct, deleteProduct, createProduct } from './product';

export default combineReducers({
  product: combineReducers({
    getProducts,
    updateProduct,
    deleteProduct,
    createProduct
  })
});
