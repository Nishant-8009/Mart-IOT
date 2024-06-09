import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/home.css';
import '../../App.css';
import ProductCard from '../cards/productCard';
import CardComponent from '../cards/card';
import { cardsData } from '../../assets/data/Data';
import { products } from '../../assets/data/Data';
import Testimonials from '../testimonials/testimonials';
import FaqSection from '../faq/faq';
import Footer from '../footer/footer';
import Circle from '../circle/Circle';

const HomePage = () => {
  return (
    <>
    
    <div className="banner">
    <div class="box">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
    <div className="left-banner">
          <h5>Welcome to <br /><span>Mart IoT</span> </h5>
          <p>Empowering businesses with cutting-edge IoT, AI, and data analytics solutions.</p>
          <div className="stylish-button">Read more</div>
    </div>
    <div className="right-banner">
    <Circle/>
    </div>
    
    </div>
    
    <div className="chooseUs">
      <div className="btn-section">Why Choose us</div>
      <h2 style={{background: 'linear-gradient(90deg, #37C592 -0.99%, #7D25EC 104.61%)', // Define your gradient here
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'}}>Why Choose Mart Iot</h2>
      <p
       style={{
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #9F54FD 22.27%, #FFC69C 105.76%)', // Define your gradient here
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    padding: '8px',
    display: 'inline-block'}}>Join a community of innovators and leaders by choosing Mart IoT for your technology solutions.</p>
      <div className="cards-container">
      {cardsData.map((card, index) => (
        <CardComponent 
          key={index} 
          title={card.title} 
          content={card.content} 
          icon={card.icon} 
        />
      ))}
      </div>
    </div>
    <div className="product">
    <div className="btn-section">Products</div>
      <h2 style={{background: 'linear-gradient(90deg, #37C592 -0.99%, #7D25EC 104.61%)', // Define your gradient here
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'}}>Our Products</h2>
    <div className="product-container">
    {products.map((card, index) => (
        <ProductCard 
          key={index} 
          title = {card.title} 
          image = {card.image}
          description={card.description}
        />
      ))}
    </div>
    </div>
    <Testimonials/>
    <FaqSection/>
      <Footer/>
    </>
  );
};

export default HomePage;
