// ProductDetailPage.jsx

import React, { useState } from 'react';
import '../assets/css/Book.css';
import Footer from './Footer';
import ResponsiveAppBar from './ResponsiveAppBar';
import { useNavigate } from 'react-router-dom';

// import { Navbar } from 'react-bootstrap';

const Book = () => {
  const [selectedImage, setSelectedImage] = useState('https://img.freepik.com/premium-photo/enchanting-shabe-yalda-celebration-photos-yalda-night-aesthetics_978786-13326.jpg?size=626&ext=jpg&uid=R44903832&ga=GA1.1.711032542.1689741970&semt=ais');
  const [smallImages, setSmallImages] = useState([
    'https://img.freepik.com/free-photo/nightlife-with-people-dancing-club_23-2149052695.jpg?size=626&ext=jpg&uid=R44903832&ga=GA1.1.711032542.1689741970&semt=ais',
    'https://img.freepik.com/free-photo/friends-club-2018-celebrations_23-2147717244.jpg?w=1060&t=st=1706640611~exp=1706641211~hmac=792a3a30fbc06d16b10aec3e07b02c18b7903b755bd8adfe3f6ab04dfe40bf5c',
    'https://img.freepik.com/premium-photo/silhouette-head-arm-fingers-man-front-firework-explosion_1048944-17988353.jpg?size=626&ext=jpg&uid=R44903832&ga=GA1.1.711032542.1689741970&semt=ais',
    
  ]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const navigation=useNavigate();

  const handleClick =() =>{
     navigation('/payment')
  }

  return (
  <>
 <ResponsiveAppBar />
 
    <div className='page'>
    <div className="product-detail-container">
      <div className="product-images">
        <div className="main-image">
          <img src={selectedImage} alt="Product Main" />
        </div>
        <div className="small-images">
          {smallImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Small ${index + 1}`}
              onClick={() => handleImageClick(image)}/>
          ))}
        </div>
      </div>
      <div className="product-description-section">
      <div className="product-details">
        <h2>Starlit Soiree</h2>
        <p className="product-price"> Rs:15000</p>
        <button className="buy-now-button" onClick={handleClick}>Book Now</button>
      </div>
        <h3>Theme Description</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
       <div className='key'><h2 style={{padding:'20px',fontSize:'30px'}}>Key Features</h2></div>
       <div className='para'>  
        <p>
        1. Starry Ambiance: Transform the venue into a celestial wonderland with starry backdrops, twinkling fairy lights, and shimmering drapes. Create a magical atmosphere that transports attendees to a night under the stars.
        </p></div>
       <div className='para'> <p>
        2. Glamorous Decor: Incorporate glamorous decor elements such as gold and silver accents, luxurious fabrics, and stylish furnishings. Elegant centerpieces and tasteful table settings contribute to the overall upscale ambiance.
        </p></div>
        <div className='para'> <p>
        3. Live Entertainment: Arrange for live entertainment such as a jazz band, acoustic performance, or a DJ playing a mix of classic hits and current favorites. This ensures a lively atmosphere and gets everyone in the celebratory spirit.
        </p></div>
        {/* <div className='para'> <p>
        Alumni Memorabilia Corner: Dedicate a corner to showcase memorabilia from the past, including yearbooks, photographs, and other artifacts. This nostalgic display encourages attendees to take a trip down memory lane and share stories.
        </p></div> */}
      </div>
      
    </div>
    
    </div>
    <Footer />

    
     </>
  );
};

export default Book;