import React from 'react';
import '../../assets/styles/products.css';
import Footer from '../footer/footer';
import ProductProfile from '../Product/product';
import { products } from '../../assets/data/Data'; // Import the products data

function Products() {
  return (
    <>
      <div className="products-lists">
        <h2><span>Products</span></h2>
        <ProductProfile products={products} />
      </div>
      <Footer />
    </>
  )
}

export default Products;
