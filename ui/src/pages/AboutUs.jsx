import React from 'react';

const AboutUs = () => {
  return (
    <div style={{backgroundColor: "white"}} className="about-us-container">
      
      <div className="about-content">
      <div>
        <img src="/src/assets/cover-photo-about-us.jpg" alt="Image Description" height='100%' width='60%'
                    style={{ width: '100%', height: '350px', objectFit: 'cover' }}/>
        </div>
        <div className="about-text" style={{padding:"20px"}}>
        <h3>About Us</h3>
          <h4>Our Mission</h4>
            At EV ChargePro, our mission is to lead the way in sustainable transportation by providing cutting-edge charging solutions for electric vehicles (EVs). 
            We are dedicated to reducing the carbon footprint of transportation and making EV charging accessible to everyone. Whether you're a homeowner, a business owner, or an electric vehicle enthusiast, we have the solutions to meet your charging needs.
            Our charging stations are designed for efficiency, reliability, and user-friendliness. We strive to create a seamless charging experience, ensuring that EV owners can confidently embrace the electric future of mobility.
            With a commitment to innovation and sustainability, EV ChargePro is driving the transition to electric transportation and a greener, cleaner planet.
          
        </div>
       
      </div>
    </div>
  );
};

export default AboutUs;