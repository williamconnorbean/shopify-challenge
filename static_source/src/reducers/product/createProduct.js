import {
  CREATE_PRODUCT_BEGIN,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE
} from '../../actions/product/createProduct';
import createReducer from '../createReducer';

const initialState = {
  product: {},
  loading: false,
  error: null
};

const createProductBeginState = (state) => ({
  ...state,
  loading: true,
  error: null
});

const createProductSuccessState = (state, action) => ({
  ...state,
  loading: false,
  product: action.payload.product
});

const createProductFailureState = (state, action) => ({
  ...state,
  loading: false,
  error: action.payload.error
});

const createProduct = createReducer(initialState, {
  [CREATE_PRODUCT_BEGIN]: createProductBeginState,
  [CREATE_PRODUCT_SUCCESS]: createProductSuccessState,
  [CREATE_PRODUCT_FAILURE]: createProductFailureState
});

export default createProduct;
