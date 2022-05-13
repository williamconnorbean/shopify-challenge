import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { createProduct } from '../../actions/product/createProduct';
import { getProducts } from '../../actions/product/getProducts';
import usePrevious from '../../hooks/usePrevious';
import './Product.css';

const AddProduct = (props) => {
  const {
    loading,
    error
  } = props;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [salePrice, setSalePrice] = useState(0);
  const [costPrice, setCostPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const prevLoading = usePrevious(loading);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    props.dispatch(createProduct(
      name,
      description,
      salePrice,
      costPrice,
      stock
    ));
  };

  useEffect(() => {
    if (prevLoading && !loading && error == null) {
      props.dispatch(getProducts());
      handleClose();
    }
    // eslint-disable-next-line
  }, [loading]);

  return (
    <div>
      <div className='product__add-btn'>
        <Button
          size="small"
          variant="contained"
          onClick={handleClickOpen}
        >
          Add to product inventory
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth={true}>
        <DialogTitle>Add product inventory</DialogTitle>
        <DialogContent>
          <TextField
            className='product__add-field'
            type='text'
            variant='standard'
            label="Product name"
            fullWidth
            onChange={e => setName(e.target.value)}
          />
          <TextField
            className='product__add-field'
            type='text'
            variant='standard'
            label="Product description"
            fullWidth
            onChange={e => setDescription(e.target.value)}
          />
          <TextField
            className='product__add-field'
            type='number'
            variant='standard'
            label="Sale price"
            fullWidth
            onChange={e => setSalePrice(e.target.value)}
          />
          <TextField
            className='product__add-field'
            type='number'
            variant='standard'
            label="Cost price"
            fullWidth
            onChange={e => setCostPrice(e.target.value)}
          />
          <TextField
            className='product__add-field'
            type='number'
            variant='standard'
            label="Units of stock"
            fullWidth
            onChange={e => setStock(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleCreate()} variant="contained">Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // from redux
  loading: state.product.createProduct.loading,
  error: state.product.createProduct.error
});

export default connect(mapStateToProps)(AddProduct);
