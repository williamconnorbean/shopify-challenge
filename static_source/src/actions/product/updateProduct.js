import axios from 'axios';

const UPDATE_PRODUCT_BEGIN = 'UPDATE_PRODUCT_BEGIN';
const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';

const updateProductBegin = () => ({
  type: UPDATE_PRODUCT_BEGIN,
});

const updateProductSuccess = (product) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: product,
});

const updateProductError = (error) => ({
  type: UPDATE_PRODUCT_FAILURE,
  payload: { error },
});

const updateProduct = (
  id,
  name,
  description,
  salePrice,
  costPrice,
  stock
) => (dispatch) => {
  dispatch(updateProductBegin());

  return axios
    .put(`/api/products/update/${id}`, {
      name,
      description,
      salePrice,
      costPrice,
      stock
    })
    .then((response) => dispatch(updateProductSuccess(response.data)))
    .catch((error) => dispatch(updateProductError(error.response)));
};

const undoProductDeletion = (id) => (dispatch) => {
  dispatch(updateProductBegin());

  return axios
    .put(`/api/products/update/${id}`, {
      isDeleted: false
    })
    .then((response) => dispatch(updateProductSuccess(response.data)))
    .catch((error) => dispatch(updateProductError(error.response)));
};

export {
  UPDATE_PRODUCT_BEGIN,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  updateProductBegin,
  updateProductSuccess,
  updateProductError,
  updateProduct,
  undoProductDeletion
};
