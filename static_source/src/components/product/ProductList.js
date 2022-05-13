import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/product/getProducts';
import Product from './Product';
import './Product.css';

const ProductList = (props) => {
  const {
    products
  } = props;

  // on mount
  useEffect(() => {
    props.dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

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
    </div>
  );
};

const mapStateToProps = (state) => ({
  // from redux
  products: state.product.getProducts.products,
  loading: state.product.getProducts.loading,
  error: state.product.getProducts.error
});

export default connect(mapStateToProps)(ProductList);
