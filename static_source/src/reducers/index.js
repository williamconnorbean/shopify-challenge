import { combineReducers } from 'redux';
import { getProducts, updateProduct, deleteProduct } from './product';

export default combineReducers({
  product: combineReducers({
    getProducts,
    updateProduct,
    deleteProduct
  })
});
