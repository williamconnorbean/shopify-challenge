import axios from 'axios';

const CREATE_DELETION_COMMENT_BEGIN = 'CREATE_DELETION_COMMENT_BEGIN';
const CREATE_DELETION_COMMENT_SUCCESS = 'CREATE_DELETION_COMMENT_SUCCESS';
const CREATE_DELETION_COMMENT_FAILURE = 'CREATE_DELETION_COMMENT_FAILURE';

const createDeletionCommentBegin = () => ({
  type: CREATE_DELETION_COMMENT_BEGIN,
});

const createDeletionCommentSuccess = (product) => ({
  type: CREATE_DELETION_COMMENT_SUCCESS,
  payload: product
});

const createDeletionCommentError = (error) => ({
  type: CREATE_DELETION_COMMENT_FAILURE,
  payload: { error }
});

const createDeletionComment = (
  productId,
  commentText
) => (dispatch) => {
  dispatch(createDeletionCommentBegin());

  return axios
    .post(`/api/products/${productId}/comment`, {
      commentText
    })
    .then((response) => dispatch(createDeletionCommentSuccess(response.data)))
    .catch((error) => dispatch(createDeletionCommentError(error.response)));
};

export {
  CREATE_DELETION_COMMENT_BEGIN,
  CREATE_DELETION_COMMENT_SUCCESS,
  CREATE_DELETION_COMMENT_FAILURE,
  createDeletionCommentBegin,
  createDeletionCommentSuccess,
  createDeletionCommentError,
  createDeletionComment
};
