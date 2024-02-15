import React, { useState } from 'react';
import '../assets/css/Themes.css'; 
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { cartProducts } from '../Redux/actions/action';
import { useNavigate } from 'react-router-dom';




const Themes = () => {
  const navigation=useNavigate();
  const dispatch=useDispatch();
  const [display, setDisplay] = useState([
    {
      id: 1,
      img: "https://www.gosfield-hall.co.uk/wp-content/uploads/2023/02/shutterstock_1782138530-scaled.jpg",
      butt: "RESERVE",
      title: "City Lights and Cocktails",
      subtitle: "Cheers to Urban Love Stories",
      amnt: " ₹10,000 - ₹15,000",
      caut: "Comming Soon",
      date: "Available From 21.02.2024",
      desc: "A stylish city celebration with twinkling lights, ",
    },
    {
      id: 2,
      img: "https://floraandgrace.com/wp-content/uploads/sites/6288/2019/10/London_Luxury_Wedding_Photographer_Flora_and_Grace-55-von-84.jpg",
      butt: "BOOK NOW",
      title: "Vintage Romance Soiree",
      subtitle: "Love in Every Vintage Detail",
      amnt: "₹15,000 - ₹16,000",
      caut: "Limited Bookings",
      date: "Available Now",
      desc: "A nostalgic journey celebrating love with vintage furniture",
    },

    {
      id: 3,
      img: "https://i0.wp.com/theweddingnotebook.com/wp-content/uploads/2021/05/21-1109-juanmolet-fotologue-jf-1-DSC03032.jpg",
      butt: "BOOK NOW",
      title: "Fairy Lights Fiesta",
      subtitle: "Under the Stars,Love Sparkles",
      amnt: "₹15,000 - ₹18,000",
      caut: "Closes Soon",
      date: "Availabe Now",
      desc: "An enchanting evening filled with fairy lights.",
    },
    {
      id: 4,
      img: "https://shaadiwish.com/blog/wp-content/uploads/2020/03/couple-portrait.jpg",
      butt: "BOOK NOW",
      title: "Cocktail Extravaganza",
      subtitle: "Cocktails, Glam, and Love on the Rocks",
      amnt: "₹20,000 - ₹25,000",
      caut: "Booking Fast",
      date: "Available Now",
      desc: "A glamorous engagement party with chic cocktails",
    },
    {
      id: 5,
      img: "https://shaadiwish.com/blog/wp-content/uploads/2020/03/couple-portrait.jpg",
      butt: "BOOK NOW",
      title: "Cocktail Extravaganza",
      subtitle: "Cocktails, Glam, and Love on the Rocks",
      amnt: "₹20,000 - ₹25,000",
      caut: "Booking Fast",
      date: "Available Now",
      desc: "A glamorous engagement party with chic cocktails",
    },
    {
      id: 6,
      img: "https://shaadiwish.com/blog/wp-content/uploads/2020/03/couple-portrait.jpg",
      butt: "BOOK NOW",
      title: "Cocktail Extravaganza",
      subtitle: "Cocktails, Glam, and Love on the Rocks",
      amnt: "₹20,000 - ₹25,000",
      caut: "Booking Fast",
      date: "Available Now",
      desc: "A glamorous engagement party with chic cocktails",
    },
  ]);

    
          return (
                <>
            <ResponsiveAppBar />
                      <div className='th' >
                      {display.map( (e=>{
                        return (
                          <div className="indide" key={e.id}>
                            <ul
                              style={{
                                justifyContent: "center",
                                display: "flex",
                                flexWrap: "wrap",
                                listStyle: "none",
                                padding: "0",
                              }}
                            >
                              <li
                                className="booking-card"
                                style={{ backgroundImage: `url(${e.img})` }}
                              >
                                <div className="book-container">
                                  <div className="content">
                                    <button
                                      className="btn"
                                      onClick={() => {
                                        dispatch(cartProducts(e)).then(
                                          navigation("/book")
                                        ),
                                          2000;
                                      }}
                                    >
                                      {e.butt}
                                    </button>
                                  </div>
                                </div>
                                <div className="informations-container">
                                  <h2 className="title">{e.title}</h2>
                                  <p className="sub-title">{e.subtitle}</p>
                                  <p className="price">
                                    <svg
                                      className="icon"
                                      style={{ width: "24px", height: "24px" }}
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z"
                                      />
                                    </svg>{" "}
                                    {e.amnt}
                                  </p>
                                  <div className="more-information">
                                    <div className="info-and-date-container">
                                      <div className="box info">
                                        <svg
                                          className="icon"
                                          style={{
                                            width: "24px",
                                            height: "24px",
                                          }}
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
                                          />
                                        </svg>
                                        <p>{e.caut}</p>
                                      </div>
                                      <div className="box date">
                                        <svg
                                          className="icon"
                                          style={{
                                            width: "24px",
                                            height: "24px",
                                          }}
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"
                                          />
                                        </svg>
                                        <p>{e.date} </p>
                                      </div>
                                    </div>
                                    <p className="disclaimer">{e.desc}</p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        );
                    }))}
                    </div>
                      
                     <Footer />

                     </>
                  );
                }
           export default Themes;