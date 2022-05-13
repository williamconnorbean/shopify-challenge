import { combineReducers } from 'redux';
import { getProducts, updateProduct } from './product';

export default combineReducers({
  product: combineReducers({
    getProducts,
    updateProduct
  })
});
