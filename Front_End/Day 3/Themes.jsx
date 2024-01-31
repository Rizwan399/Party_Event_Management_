import React from 'react';
import '../assets/css/Themes.css'; 
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';


const Themes = () => {
   const navigation=useNavigate();
  const handleOpen =()=>{
       navigation('/book');
  }
    
          return (
            
                    <div className='th'>
                        <ResponsiveAppBar />
                     
                      <ul style={{paddingTop:'50px'}}>
                        <li className="booking-card" style={{backgroundImage: 'url(https://www.gosfield-hall.co.uk/wp-content/uploads/2023/02/shutterstock_1782138530-scaled.jpg)'}}>
                          <div className="book-container">
                            <div className="content">
                              <button className="btn" onClick={handleOpen}>RESERVE</button>
                            </div>
                          </div>
                          <div className="informations-container">
                            <h2 className="title">City Lights and Cocktails</h2>
                            <p className="sub-title">Cheers to Urban Love Stories</p>
                            <p className="price"><svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                              </svg> ₹10,000 - ₹15,000</p>
                            <div className="more-information">
                              <div className="info-and-date-container">
                                <div className="box info">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                  </svg>
                                  <p>Comming Soon</p>
                                </div>
                                <div className="box date">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                                  </svg>
                                  <p>Available From 21.02.2024 </p>
                                </div>
                              </div>
                              <p className="disclaimer">A stylish city celebration with twinkling lights, cityscape views, and sophisticated cocktails, offering an elegant setting for an urban engagement party.</p>
                            </div>
                          </div>
                        </li>
                        <li className="booking-card" style={{backgroundImage: 'url(https://floraandgrace.com/wp-content/uploads/sites/6288/2019/10/London_Luxury_Wedding_Photographer_Flora_and_Grace-55-von-84.jpg)'}}>
                          <div className="book-container">
                            <div className="content">
                              <button className="btn" onClick={handleOpen}>Book Now</button>
                            </div>
                          </div>
                          <div className="informations-container">
                            <h2 className="title">Vintage Romance Soiree</h2>
                            <p className="sub-title">Love in Every Vintage Detail</p>
                            <p className="price"><svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                              </svg>₹15,000 - ₹16,000</p>
                            <div className="more-information">
                              <div className="info-and-date-container">
                                <div className="box info">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                  </svg>
                                  <p>Limited Bookings</p>
                                </div>
                                <div className="box date">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                                  </svg>
                                  <p>Available Now</p>
                                </div>
                              </div>
                              <p className="disclaimer">A nostalgic journey celebrating love with vintage furniture, lace, and soft pastels, creating a timeless and romantic engagement party atmosphere.</p>
                            </div>
                          </div>
                        </li>
                        <li className="booking-card" style={{backgroundImage: 'url(https://i0.wp.com/theweddingnotebook.com/wp-content/uploads/2021/05/21-1109-juanmolet-fotologue-jf-1-DSC03032.jpg)'}}>
                          <div className="book-container">
                            <div className="content">
                              <button className="btn" onClick={handleOpen}>Book Now</button>
                            </div>
                          </div>
                          <div className="informations-container">
                            <h2 className="title">Enchanting Fairy Lights Fiesta</h2>
                            <p className="sub-title">Under the Stars, Love Sparkles Bright</p>
                            <p className="price"><svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                              </svg>₹15,000 - ₹18,000</p>
                            <div className="more-information">
                              <div className="info-and-date-container">
                                <div className="box info">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                  </svg>
                                  <p>Closes Soon</p>
                                </div>
                                <div className="box date">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                                  </svg>
                                  <p>Availabe Now</p>
                                </div>
                              </div>
                              <p className="disclaimer">An enchanting evening filled with fairy lights, whimsical decor, and a starlit atmosphere, creating a magical and romantic engagement party.</p>
                            </div>
                          </div>
                        </li>
                        <li className="booking-card" style={{backgroundImage: 'url(https://shaadiwish.com/blog/wp-content/uploads/2020/03/couple-portrait.jpg)'}}>
                          <div className="book-container">
                            <div className="content">
                              <button className="btn" onClick={handleOpen}>Book Now</button>
                            </div>
                          </div>
                          <div className="informations-container">
                            <h2 className="title">Glamorous Cocktail Extravaganza</h2>
                            <p className="sub-title">Cocktails, Glam, and Love on the Rocks</p>
                            <p className="price"><svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                              </svg>₹20,000 - ₹25,000</p>
                            <div className="more-information">
                              <div className="info-and-date-container">
                                <div className="box info">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                  </svg>
                                  <p>Booking Fast</p>
                                </div>
                                <div className="box date">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                                  </svg>
                                  <p>Available Now</p>
                                </div>
                              </div>
                              <p className="disclaimer">A glamorous engagement party with chic cocktails, elegant decor, and a touch of Hollywood glamour, setting the stage for a night of celebration.</p>
                            </div>
                          </div>
                        </li>
                        <li className="booking-card" style={{backgroundImage: 'url(https://shaadiwish.com/blog/wp-content/uploads/2020/03/couple-portrait.jpg)'}}>
                          <div className="book-container">
                            <div className="content">
                              <button className="btn" onClick={handleOpen}>Book Now</button>
                            </div>
                          </div>
                          <div className="informations-container">
                            <h2 className="title">Glamorous Cocktail Extravaganza</h2>
                            <p className="sub-title">Cocktails, Glam, and Love on the Rocks</p>
                            <p className="price"><svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                              </svg>₹20,000 - ₹25,000</p>
                            <div className="more-information">
                              <div className="info-and-date-container">
                                <div className="box info">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                  </svg>
                                  <p>Booking Fast</p>
                                </div>
                                <div className="box date">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                                  </svg>
                                  <p>Available Now</p>
                                </div>
                              </div>
                              <p className="disclaimer">A glamorous engagement party with chic cocktails, elegant decor, and a touch of Hollywood glamour, setting the stage for a night of celebration.</p>
                            </div>
                          </div>
                        </li>
                        <li className="booking-card" style={{backgroundImage: 'url(https://shaadiwish.com/blog/wp-content/uploads/2020/03/couple-portrait.jpg)'}}>
                          <div className="book-container">
                            <div className="content">
                              <button className="btn" onClick={handleOpen}>Book Now</button>
                            </div>
                          </div>
                          <div className="informations-container">
                            <h2 className="title">Glamorous Cocktail Extravaganza</h2>
                            <p className="sub-title">Cocktails, Glam, and Love on the Rocks</p>
                            <p className="price"><svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                              </svg>₹20,000 - ₹25,000</p>
                            <div className="more-information">
                              <div className="info-and-date-container">
                                <div className="box info">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                  </svg>
                                  <p>Booking Fast</p>
                                </div>
                                <div className="box date">
                                  <svg className="icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                                  </svg>
                                  <p>Available Now</p>
                                </div>
                              </div>
                              <p className="disclaimer">A glamorous engagement party with chic cocktails, elegant decor, and a touch of Hollywood glamour, setting the stage for a night of celebration.</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                     <Footer />
                    </div>
                  );
                }
           export default Themes;