import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { getProducts } from '../../actions/product/getProducts';
import { updateProduct } from '../../actions/product/updateProduct';
import { deleteProduct } from '../../actions/product/deleteProduct';
import usePrevious from '../../hooks/usePrevious';

const Product = (props) => {
  const {
    id,
    name,
    description,
    salePrice,
    costPrice,
    stock,
    updateLoading,
    updateError,
    deleteLoading,
    deleteError
  } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [newSalePrice, setNewSalePrice] = useState(salePrice);
  const [newCostPrice, setNewCostPrice] = useState(costPrice);
  const [newStock, setNewStock] = useState(stock);

  const prevUpdateLoading = usePrevious(updateLoading);
  const prevDeleteLoading = usePrevious(deleteLoading);

  useEffect(() => {
    if (prevUpdateLoading && !updateLoading && updateError == null) {
      props.dispatch(getProducts());
      setIsEdit(false);
    }
    // eslint-disable-next-line
  }, [updateLoading])

  useEffect(() => {
    if (prevDeleteLoading && !deleteLoading && deleteError == null) {
      props.dispatch(getProducts());
      setIsEdit(false);
    }
    // eslint-disable-next-line
  }, [deleteLoading])

  const handleSave = () => {
    props.dispatch(updateProduct(
      id,
      newName,
      newDescription,
      newSalePrice,
      newCostPrice,
      newStock
    ));
  };

  const handleDelete = () => {
    props.dispatch(deleteProduct(id));
  };

  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        {isEdit ? (
          <>
            <TextField
              type='text'
              variant='standard'
              label="Product name"
              defaultValue={name}
              onChange={e => setNewName(e.target.value)}
            />
            <TextField
              type='text'
              variant='standard'
              label="Product description"
              defaultValue={description}
              onChange={e => setNewDescription(e.target.value)}
            />
            <TextField
              type='number'
              variant='standard'
              label="Sale price"
              defaultValue={salePrice}
              onChange={e => setNewSalePrice(e.target.value)}
            />
            <TextField
              type='number'
              variant='standard'
              label="Cost price"
              defaultValue={costPrice}
              onChange={e => setNewCostPrice(e.target.value)}
            />
            <TextField
              type='number'
              variant='standard'
              label="Units of stock"
              defaultValue={stock}
              onChange={e => setNewStock(e.target.value)}
            />
          </>
        ) : (
          <>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2">
              Sale price: {salePrice}
              <br />
              Cost price: {costPrice}
              <br />
              Units in stock: {stock}
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        {isEdit ? (
          <>
            <Button
              size="small"
              variant="contained"
              onClick={() => handleSave()}
              disabled={updateLoading}
            >
              Save
            </Button>
            <Button
              size="small"
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button
              size="small"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </Button>
            <Button
              size="small"
              color="error"
              onClick={() => handleDelete()}
            >
              Delete
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  // from redux
  updateLoading: state.product.updateProduct.loading,
  updateError: state.product.updateProduct.error,
  deleteLoading: state.product.deleteProduct.loading,
  deleteError: state.product.deleteProduct.error
});

export default connect(mapStateToProps)(Product);
