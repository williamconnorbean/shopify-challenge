import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE
} from '../../actions/product/getProducts';
import createReducer from '../createReducer';

const initialState = {
  products: [],
  loading: false,
  error: null
};

const getProductsBeginState = (state) => ({
  ...state,
  loading: true,
  error: null
});

const getProductsSuccessState = (state, action) => ({
  ...state,
  loading: false,
  products: action.payload.products
});

const getProductsFailureState = (state, action) => ({
  ...state,
  loading: false,
  error: action.payload.error
});

const getProducts = createReducer(initialState, {
  [GET_PRODUCTS_BEGIN]: getProductsBeginState,
  [GET_PRODUCTS_SUCCESS]: getProductsSuccessState,
  [GET_PRODUCTS_FAILURE]: getProductsFailureState,
});

export default getProducts;
