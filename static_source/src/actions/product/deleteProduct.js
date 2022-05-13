import axios from 'axios';

const DELETE_PRODUCT_BEGIN = 'DELETE_PRODUCT_BEGIN';
const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

const deleteProductBegin = () => ({
  type: DELETE_PRODUCT_BEGIN,
});

const deleteProductSuccess = (product) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: product
});

const deleteProductError = (error) => ({
  type: DELETE_PRODUCT_FAILURE,
  payload: { error }
});

const deleteProduct = (id) => (dispatch) => {
  dispatch(deleteProductBegin());

  return axios
    .delete(`/api/products/${id}`)
    .then((response) => dispatch(deleteProductSuccess(response.data)))
    .catch((error) => dispatch(deleteProductError(error.response)));
};

export {
  DELETE_PRODUCT_BEGIN,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  deleteProductBegin,
  deleteProductSuccess,
  deleteProductError,
  deleteProduct
};
