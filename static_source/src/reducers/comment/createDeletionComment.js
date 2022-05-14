import {
  CREATE_DELETION_COMMENT_BEGIN,
  CREATE_DELETION_COMMENT_SUCCESS,
  CREATE_DELETION_COMMENT_FAILURE
} from '../../actions/comment/createDeletionComment';
import createReducer from '../createReducer';

const initialState = {
  product: {},
  loading: false,
  error: null
};

const createDeletionCommentBeginState = (state) => ({
  ...state,
  loading: true,
  error: null
});

const createDeletionCommentSuccessState = (state, action) => ({
  ...state,
  loading: false,
  product: action.payload.product
});

const createDeletionCommentFailureState = (state, action) => ({
  ...state,
  loading: false,
  error: action.payload.error
});

const createDeletionComment = createReducer(initialState, {
  [CREATE_DELETION_COMMENT_BEGIN]: createDeletionCommentBeginState,
  [CREATE_DELETION_COMMENT_SUCCESS]: createDeletionCommentSuccessState,
  [CREATE_DELETION_COMMENT_FAILURE]: createDeletionCommentFailureState
});

export default createDeletionComment;
