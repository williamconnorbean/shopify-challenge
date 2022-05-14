import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import { undoProductDeletion } from '../../actions/product/updateProduct';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const DeletionAlert = (props) => {
  const {
    productId,
    isOpen,
    setIsOpen,
    updateLoading
  } = props;

  const vertical = 'bottom';
  const horizontal = 'center';

  const handleUndo = async () => {
    await props.dispatch(undoProductDeletion(productId));
    setIsOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="inherit" size="small" onClick={handleUndo} disabled={updateLoading}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
        disabled={updateLoading}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar open={isOpen} autoHideDuration={15000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} action={action}>
          Product Deleted
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // from redux
  updateLoading: state.product.updateProduct.loading,
});

export default connect(mapStateToProps)(DeletionAlert);
