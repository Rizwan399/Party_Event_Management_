import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import'../assets/css/Home.css';
import Footer from "../components/Footer";
import img1 from"../assets/images/img1.jpg";
import img2 from"../assets/images/img2.jpg";
import img3 from"../assets/images/img3.jpg";
import img4 from"../assets/images/img4.jpg";
import img5 from"../assets/images/img5.jpg";
import img6 from"../assets/images/img6.jpg";

import ActionAreaCard from '../components/card';
function Home() {
        const images = [
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
        ];
   
    return (
      <>
       
        <div>
            <ResponsiveAppBar />
        </div>

        <div className="div1">
          <img
            src="./src/assets/images/home.jpg"
            alt="no image"
            width={1263}
            height={550}
            style={{ marginTop: "50px" }}
          />
          <div className="centered">
            <marquee>Welcome To EventPro</marquee>
          </div>
        </div>
        <h3
          style={{
            textAlign: "center",
            padding: "30px",
            fontFamily: "cursive",
          }}
        >
          Our journey began with a vision to redefine event management by
          combining innovation, precision, and a deep understanding of our
          clients' needs. With a diverse team of experts in event planning,
          logistics, and technology, we strive to elevate every event to new
          heights.
        </h3>
        <div className="im" style={{ width: "100%" }}>
          <Zoom scale={1.0} indicators={true}>
            {images.map((each, index) => (
              <div key={index} style={{ width: "100%", height: "30rem" }}>
                <img
                  style={{ objectFit: "cover", width: "100%" }}
                  alt="Slide Image"
                  src={each}
                />
              </div>
            ))}
          </Zoom>
        </div>

        <div className="card">
          <ActionAreaCard />
        </div>
        <Footer />
      </>
    );
}

export default Home;