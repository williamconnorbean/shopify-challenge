import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/product/getProducts';

const Home = (props) => {
  // on mount
  useEffect(() => {
    props.dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Testing</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // from redux
  products: state.product.getProducts.products,
  loading: state.product.getProducts.loading,
  error: state.product.getProducts.error
});

export default connect(mapStateToProps)(Home);
