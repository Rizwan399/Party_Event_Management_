// AboutUsPage.jsx

import React from 'react';
import '../assets/css/About.css';

import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const About = () => {
  return (
    <>
  <ResponsiveAppBar/>
    <div className='color'>
    <div className="about-us-container">
      <header>
       <div className='me'> <h1 style={{paddingTop:'30px',fontFamily:'Courier New'}}>ABOUT US</h1></div>
      </header>
      <section className="main-content">
        <div className="centered-image">
          <img src="https://www.surprisemachi.com/wp-content/uploads/2021/07/abt.jpg" alt="Surprise Image" />
        </div>
        <div className="text-section" style={{fontFamily:'cursive',fontSize:'15px'}}>
          <p><b>
            Bringing out a big fat smile on our loved one's faces is probably the best feeling
            in the world. Give yourself and your loved one this Happiness. The best way to do
            this would be by planning a surprise for them that can melt their heart away. Who
            better than Surprise Machi to help you plan an extraordinary surprise for your
            loved ones to make them smile.</b>
          </p>
          <p><b>
            Surprise Machi is a surprise planning company based in Chennai. We orchestrate
            various surprises and events for all kinds of occasions - birthdays, anniversaries,
            weddings, baby showers, etc., and aim at providing high-quality services at
            affordable prices.</b>
          </p>
          <p><b>
            Our team of happiness specialists understands the budget and requirements of each
            of our clients personally and comes up with a customized package according to the
            given inputs, making each surprise unique and special in its own way. From
            customized gifts to customized surprises, we do it all. Though we are based in
            Chennai, we do take up outstation orders as well and are willing to travel down to
            spread some happiness.</b>
          </p>
          <p><b>
            With millions of happy clients across the globe, We, Surprise Machi, aim at
            bringing out the best smile on people’s faces. We also offer you plenty of
            surprise events such as flash mob surprises, yacht surprises, etc.</b>
          </p>
        </div>
      </section>
      <section className="image-section">
        <div className="image-description" style={{marginRight:'15px',fontFamily:'cursive'}}>
          <img src="https://www.surprisemachi.com/wp-content/uploads/2021/07/our-mission.jpg" alt="Image 1" />
          <h1 style={{paddingTop:'15px'}}>What do we do?</h1><p style={{paddingTop:'10px'}}> With millions of happy clients across the globe, We, Surprise Machi, aim at bringing out the best smile on people’s faces.</p>
        </div>
        <div className="image-description" style={{marginRight:'15px',fontFamily:'cursive'}}>
          <img src="https://www.surprisemachi.com/wp-content/uploads/2021/07/Girl.jpg" alt="Image 2" />
          <h1 style={{paddingTop:'15px'}}>Our Mission </h1><p style={{paddingTop:'10px'}}>Our Happiness Soldiers work all day, every day to ensure loads of smiles.</p>
        </div>
        <div className="image-description" style={{fontFamily:'cursive'}}>
          <img src="https://www.surprisemachi.com/wp-content/uploads/2021/07/what-we-do.jpg" alt="Image 3" />
         <h1 style={{paddingTop:'15px'}}> History Of Surprise Machi </h1><p style={{paddingTop:'10px'}}>It was started on the 1st of August, 2016. Since then, we have managed to make millions of people smile and bring about a sense of satisfaction on our client’s faces.</p>
        </div>
      </section>
      <footer>
        {/* <p>&copy; 2024 Surprise Machi. All rights reserved.</p> */}
      </footer>
    </div>
    <Footer/>
    </div>
    </>
  );
};

export default About;