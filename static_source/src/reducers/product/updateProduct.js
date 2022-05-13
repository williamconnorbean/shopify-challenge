import {
  UPDATE_PRODUCT_BEGIN,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE
} from '../../actions/product/updateProduct';
import createReducer from '../createReducer';

const initialState = {
  product: {},
  loading: false,
  error: null
};

const updateProductBeginState = (state) => ({
  ...state,
  loading: true,
  error: null
});

const updateProductSuccessState = (state, action) => ({
  ...state,
  loading: false,
  product: action.payload.product
});

const updateProductFailureState = (state, action) => ({
  ...state,
  loading: false,
  error: action.payload.error
});

const updateProduct = createReducer(initialState, {
  [UPDATE_PRODUCT_BEGIN]: updateProductBeginState,
  [UPDATE_PRODUCT_SUCCESS]: updateProductSuccessState,
  [UPDATE_PRODUCT_FAILURE]: updateProductFailureState
});

export default updateProduct;
