import React from 'react';
import Card from 'react-bootstrap/Card';
import './productCard.css'; // Import the CSS file for custom styling


function ProductCard({image, title, description}) {
  return (
    <Card className="product-card">
      <div className="image-wrapper">
        <Card.Img 
          src={image}// Updated image placeholder URL to match the desired size
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
  );
}

export default ProductCard;
