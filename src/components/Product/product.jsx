import React from 'react';
import './product.css'; // Import the CSS file for custom styling
import { products } from '../../assets/data/Data'; // Import the products data
import defaultProductImage from '../../assets/images/logo.png'; // Default product image path

function ProductProfile() {
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <div key={index} className={`product-detail-card ${index % 2 !== 0 ? 'rowreverse-direction' : ''}`}>
          <img src={product.image || defaultProductImage} alt={product.title} className="product-detail-image" />
          <div className="product-detail-content">
            <h3 className="product-detail-title">{product.title}</h3>
            <p className="product-detail-description">{product.detailed_description}</p>
            <ul className="product-features">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="stylish-button"><a href="/Mart-IOT/contact">Contact Us</a></div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default ProductProfile;
