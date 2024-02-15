// Customize.jsx

import React, { useState } from 'react';
import '../assets/css/Customise.css'; // Import the CSS file for styling
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import axios from 'axios';


const Customize = () => {
  const [formData, setFormData] = useState({
    id:0,
    name: '',
    venueType: '',
    location: '',
    date: '',
    ideas: '',
  });

  const handleSubmit = async (e) => {

  
    e.preventDefault();

    console.log(e);
    console.log('Form submitted:', formData);
    const id=formData.id;
   const customerName=formData.name;
   const venueType=formData.venueType;
   const location=formData.location;
   const date=formData.date;
   const ideas=formData.ideas;

     try {
      const response = await axios.post(
        "http://localhost:8081/customized-party-bookings",
        { id,customerName, venueType, location, date, ideas }
      );

      if (response.status === 200) {
       alert("Our Team Will Contact U Soon")
      } else {
        alert(response.data.message || "Submission failed.");
      }
    } catch (error) {
      console.log(error);
    }

  
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <ResponsiveAppBar />

      <center>
        <div className="fo" style={{ marginBottom: "10px" }}>
          <div style={{ justifyContent: "center" }}>
            <div className="custom-form">
              <h1>CUSTOMIZE :</h1>
              <form onSubmit={handleSubmit}>
                <label style={{ marginTop: "30px" }}>
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
                  Date:
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Type your creative ideas for the event:
                  <textarea
                    name="ideas"
                    value={formData.ideas}
                    onChange={handleChange}
                  />
                </label>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </center>
      <Footer />
    </>
  );
};

export default Customize;