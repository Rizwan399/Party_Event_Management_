// src/components/ContactPage.jsx

import React, { useState } from 'react';
import '../assets/css/Contact.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/Footer';
// import { Map } from '@googlemaps/react-wrapper'
const Contact = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    // For now, let's just show the success pop-up
    setShowSuccessPopup(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    
  };

  return (
    <>
   <ResponsiveAppBar />
   <div className='temp'>
    <div className="contact-container">
      
      <div className="contact-form">
        <h2>Send a Happy Wish</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="contactNo">Contact Number:</label>
          <input type="tel" id="contactNo" name="contactNo" placeholder="Your Contact Number" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" placeholder="Your Location" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" required />
          {/* <Map apiKey="YOUR_API_KEY"/> */}

          <button type="submit">Send Wish</button>
         
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Address: Location : 526, 1st floor
3rd Ave, NSK Nagar,
Anna Nagar Main Road,
Chennai, Tamil Nadu 600106</p>
        <p>Contact Number: +91-73582 67789
+91-78248 89970 / 71 / 72 / 73</p>
        <p>Email: shahul@surprisemachi.com
surprisemachi@gmail.com</p>
        <p>Opening Time: Mon - Fri, 9:00 AM - 5:00 PM</p>
      

        {/* Add your map component here, for simplicity, we'll use an image */}
        <h2>Map Location</h2>
        <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.306107560273!2d80.21517047512471!3d13.079776187245638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52638afbf76623%3A0xbc38fb005ab4aef1!2sSurprise%20Machi%20-%20Surprise%20Planners%20in%20Chennai!5e0!3m2!1sen!2sin!4v1706426800152!5m2!1sen!2sin" 
        width="600" height="650"allowFullScreen
        
        loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        
      </div>

      {showSuccessPopup && (
        <div className="success-popup" onClick={closeSuccessPopup}>
          <p>Successfully submitted!</p>
        </div>
      )}
    </div>
    <Footer />
    </div>
    </>
  );
};

export default Contact;