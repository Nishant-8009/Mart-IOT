// CardComponent.js
import React from 'react';
import Card from 'react-bootstrap/Card';

const CardComponent = ({ title, content, icon }) => {
  return (
    <Card className="enhanced-card" style={styles.card}>
      <Card.Body style={styles.cardBody}>
        {icon && <div style={styles.icon}>{icon}</div>} {/* Render icon if provided */}
        <Card.Title style={styles.cardTitle}>{title}</Card.Title>
        <Card.Text style={styles.cardText}>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const styles = {
  
    card: {
      width: '18rem',
      height: '420px',
      margin: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s, box-shadow 0.3s',
      backgroundColor: 'white',
    },
    cardBody: {
      textAlign: 'left',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    icon: {
      marginBottom: '20px',
      color: 'var(--dark-shade-1)',
      fontSize: '40px',
      textAlign: 'left'
    },
    cardTitle: {
        fontSize:'1.5em',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #9F54FD 22.27%, #FFC69C 105.76%)', // Define your gradient here
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
      textAlign: 'left',
      marginBottom: '10px',
      marginTop: '30px'
    },
    cardText: {
      fontSize: '14px',
      textAlign: 'left',
      color: '#333'
    }
  };

export default CardComponent;
