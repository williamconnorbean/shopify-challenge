import axios from 'axios';

const CREATE_PRODUCT_BEGIN = 'CREATE_PRODUCT_BEGIN';
const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';

const createProductBegin = () => ({
  type: CREATE_PRODUCT_BEGIN,
});

const createProductSuccess = (product) => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: product,
});

const createProductError = (error) => ({
  type: CREATE_PRODUCT_FAILURE,
  payload: { error },
});

const createProduct = (
  name,
  description,
  salePrice,
  costPrice,
  stock
) => (dispatch) => {
  dispatch(createProductBegin());

  return axios
    .post(`/api/products`, {
      name,
      description,
      salePrice,
      costPrice,
      stock
    })
    .then((response) => dispatch(createProductSuccess(response.data)))
    .catch((error) => dispatch(createProductError(error.response)));
};

export {
  CREATE_PRODUCT_BEGIN,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  createProductBegin,
  createProductSuccess,
  createProductError,
  createProduct
};
