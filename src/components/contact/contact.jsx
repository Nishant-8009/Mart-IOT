import React from 'react';
import './contact.css'; // Import the CSS file for styling
import Footer from '../footer/footer';

const ContactPage = () => {
  return (
    <>
    <div className="contact-container">
      <h2>Contact <span style={{background: 'linear-gradient(90deg, #37C592 -0.99%, #7D25EC 104.61%)', // Define your gradient here
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '500'}}>Mart-IOT</span></h2>
      <p>Get answers to your questions about anything   Mart-IOT </p>
      <div className="contact-details">
      <div className="contact-info">
        <h3 className='contact-subhead'>Talk To Us</h3>
        <p><strong>Contact:</strong> 9535894879 / 7386407533</p>
        <p><strong>Email:</strong> <a href="mailto:info@martiot.in">info@martiot.in</a></p>
        <p><strong>Website:</strong> <a href="https://www.martiot.in" target="_blank" rel="noopener noreferrer">www.martiot.in</a></p>
      </div>

      <div className="address-section">

        
        <div className="address-block">
          <h3 className="office-header contact-subhead">Head Office</h3>
          <p>Ground floor, 192</p>
          <p>25 feet road</p>
          <p>Near Shiv Mandir</p>
          <p>Mukundpur phase II</p>
          <p>Delhi - 110042</p>
        </div>
        
        <div className="address-block">
          <h3 className="office-header contact-subhead">Branch Office</h3>
          <p>Near Metro Pillar 19</p>
          <p>90 Feet Road, Bhabha colony</p>
          <p>Kankarbagh</p>
          <p>Patna - 800020</p>
        </div>
      </div>
      </div>
    </div>
<Footer/>
</>
  );
};

export default ContactPage;
