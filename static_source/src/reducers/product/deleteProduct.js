import {
  DELETE_PRODUCT_BEGIN,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE
} from '../../actions/product/deleteProduct';
import createReducer from '../createReducer';

const initialState = {
  product: {},
  loading: false,
  error: null
};

const deleteProductBeginState = (state) => ({
  ...state,
  loading: true,
  error: null
});

const deleteProductSuccessState = (state, action) => ({
  ...state,
  loading: false,
  product: action.payload.product
});

const deleteProductFailureState = (state, action) => ({
  ...state,
  loading: false,
  error: action.payload.error
});

const deleteProduct = createReducer(initialState, {
  [DELETE_PRODUCT_BEGIN]: deleteProductBeginState,
  [DELETE_PRODUCT_SUCCESS]: deleteProductSuccessState,
  [DELETE_PRODUCT_FAILURE]: deleteProductFailureState
});

export default deleteProduct;
