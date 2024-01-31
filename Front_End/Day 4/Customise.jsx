// Customize.jsx

import React, { useState } from 'react';
import '../assets/css/Customise.css'; // Import the CSS file for styling
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';


const Customize = () => {
  const [formData, setFormData] = useState({
    name: '',
    venueType: '',
    location: '',
    calendar: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can also make an API call to send the form data
    console.log('Form submitted:', formData);
    // Display a message to the user
    alert('Our team member will contact you soon.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <ResponsiveAppBar />
    <div className='fo' style={{marginBottom:'10px'}}>

     <div style={{justifyContent:'center'}}>
    <div className="custom-form" >
        <h1>CUSTOMIZE :</h1>
      <form onSubmit={handleSubmit}>
        <label style={{marginTop:'30px'}}>
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Venue Type:
          <input
            type="text"
            name="venueType"
            value={formData.venueType}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Calendar:
          <input
            type="text"
            name="calendar"
            value={formData.calendar}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Type your creative ideas for the event:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default Customize;