import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import './footer.css'; // Import custom CSS
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="footer">
      <h2 style={{color:'var(--dark-shade-3)'}}>Mart Iot</h2>
      <div className="footer-links">
        <Link to ='' style = {{color: 'var(--color-black-ex)'}}>Privacy Policy</Link>
        <span>|</span>
        <Link to ='' style = {{color: 'var(--color-black-ex)'}}>Terms And Condition</Link>
        <span>|</span>
        <Link to ='' style = {{color: 'var(--color-black-ex)'}}>Contact Us</Link>
      </div>
      <div className="copyright">
      <div className="col-md-12">
              <p>&copy; 2024 Company Name. All rights reserved.</p>
            </div>
      </div>
      
      <div className="social-links">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
     
    </footer>
  );
}

export default Footer;
