import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/product/getProducts';
import { deleteProduct } from '../../actions/product/deleteProduct';
import usePrevious from '../../hooks/usePrevious';
import Product from './Product';
import './Product.css';
import DeletionAlert from '../alerts/DeletionAlert';

const ProductList = (props) => {
  const {
    products,
    updateLoading,
    updateError,
    commentProduct,
    commentLoading,
    commentError,
    productDeleted,
    deleteLoading,
    deleteError
  } = props;

  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);

  const prevUpdateLoading = usePrevious(updateLoading);
  const prevCommentLoading = usePrevious(commentLoading);
  const prevDeleteLoading = usePrevious(deleteLoading);

  const isUpdateSuccessful = () => prevUpdateLoading && !updateLoading && updateError == null;
  const isCommentSuccessfull = () => prevCommentLoading && !commentLoading && commentError == null;
  const isDeleteSuccessful = () => prevDeleteLoading && !deleteLoading && deleteError == null;

  // on mount
  useEffect(() => {
    props.dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isUpdateSuccessful()) {
      props.dispatch(getProducts());
    }
    // eslint-disable-next-line
  }, [isUpdateSuccessful]);

  useEffect(() => {
    if (isDeleteSuccessful()) {
      props.dispatch(getProducts());
      setDeleteAlertOpen(true);
    }
    // eslint-disable-next-line
  }, [isDeleteSuccessful]);

  useEffect(() => {
    if (isCommentSuccessfull()) {
      props.dispatch(deleteProduct(commentProduct._id));
    }
    // eslint-disable-next-line
  }, [isCommentSuccessfull]);

  const productCards = products.map((p) => (
    <div 
      key={p._id}
      className='product__item-wrapper'>
      <Product
        id={p._id}
        name={p.name}
        description={p.description}
        salePrice={p.salePrice}
        costPrice={p.costPrice}
        stock={p.stock}
      />
    </div>
  ));

  return (
    <div className='product__container'>
      {productCards}
      <DeletionAlert
        productId={productDeleted._id}
        isOpen={deleteAlertOpen}
        setIsOpen={setDeleteAlertOpen} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  // from redux
  products: state.product.getProducts.products,
  updateLoading: state.product.updateProduct.loading,
  updateError: state.product.updateProduct.error,
  commentProduct: state.comment.createDeletionComment.product,
  commentLoading: state.comment.createDeletionComment.loading,
  commentError: state.comment.createDeletionComment.error,
  productDeleted: state.product.deleteProduct.product,
  deleteLoading: state.product.deleteProduct.loading,
  deleteError: state.product.deleteProduct.error
});

export default connect(mapStateToProps)(ProductList);
