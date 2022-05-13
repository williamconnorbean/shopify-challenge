import React from 'react';
import ProductList from '../product/ProductList';
import AddProduct from '../product/AddProduct';

const Home = () => {
  return (
    <div>
      <h1>Shopify Backend Challenge</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
};

export default Home;
