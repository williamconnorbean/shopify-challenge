import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { createDeletionComment } from '../../actions/comment/createDeletionComment';
import './Comment.css';

const DeletionComment = (props) => {
  const {
    productId,
    commentLoading,
    deleteLoading
  } = props;

  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateComment = async () => {
    await props.dispatch(createDeletionComment(
      productId,
      comment
    ));

    handleClose();
  };

  return (
    <div>
      <Button
        size="small"
        color="error"
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth={true}>
        <DialogTitle>Add deletion comment</DialogTitle>
        <DialogContent>
          <div className='comment__text-field'>
            <TextField
              type='text'
              variant="outlined"
              label="Comment"
              multiline
              maxRows={Infinity}
              fullWidth
              onChange={e => setComment(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={commentLoading || deleteLoading}>Cancel</Button>
          <Button
            onClick={() => handleCreateComment()}
            disabled={commentLoading || deleteLoading}
            variant="contained"
            color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // from redux
  commentLoading: state.comment.createDeletionComment.loading,
  deleteLoading: state.product.deleteProduct.loading
});

export default connect(mapStateToProps)(DeletionComment);
