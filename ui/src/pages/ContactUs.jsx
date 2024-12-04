import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div style={{backgroundColor:"white"}} className="contact-us-container">
      
      <div className="contact-content">
        <div>
        <img src="/src/assets/cover-photo.jpg" alt="Image Description" height='100%' width='60%'
                    style={{ width: '100%', height: '380px', objectFit: 'cover' }}/>
        </div>
        <div className="contact-text" style={{padding: "25px"}}>
          <h4>Contact Information</h4>
          <p>
            Have questions or need assistance? Reach out to us anytime. We're here to help!
          </p>
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="icon" />
              <p>Email: <a href="mailto:info@plugngo.com">info@plugngo.com</a></p>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <p>Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <p>Address: 123 Charging Street, Electric City, 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
