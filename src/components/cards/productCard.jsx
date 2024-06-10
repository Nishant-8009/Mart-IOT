import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Card from 'react-bootstrap/Card';
import './productCard.css'; // Import the CSS file for custom styling

function ProductCard({ image, title, description }) {
  return (
    <Link to='/products' className="product-link"> {/* Wrap only the clickable part with Link component */}
      <Card className="product-card">
        <div className="image-wrapper">
          <Card.Img
            src={image} // Updated image placeholder URL to match the desired size
            alt="Card image"
            className="card-image"
          />
          <div className="gradient-overlay"></div>
        </div>
        <Card.ImgOverlay className="card-text-overlay">
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text className="card-description">
            {description}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
}

export default ProductCard;
