import { combineReducers } from 'redux';
import getProducts from './product/getProducts';

export default combineReducers({
  product: combineReducers({
    getProducts
  })
});
