import axios from 'axios';

const GET_PRODUCTS_BEGIN = 'GET_PRODUCTS_BEGIN';
const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

const getProductsBegin = () => ({
  type: GET_PRODUCTS_BEGIN,
});

const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = (error) => ({
  type: GET_PRODUCTS_FAILURE,
  payload: { error },
});

const getProducts = () => (dispatch) => {
  dispatch(getProductsBegin());

  return axios
    .get('/api/products')
    .then((response) => dispatch(getProductsSuccess(response.data)))
    .catch((error) => dispatch(getProductsError(error.response)));
};

export {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  getProductsBegin,
  getProductsSuccess,
  getProductsError,
  getProducts
};
