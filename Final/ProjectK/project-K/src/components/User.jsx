
import { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img from "../assets/images/img1.jpg";
import img1 from "../assets/images/img2.jpg";
import { useNavigate } from "react-router-dom";
import '../assets/css/User.css'
import {useDispatch, useSelector} from 'react-redux'
import ActionAreaCard from "./card";
import { removeCart } from "../Redux/actions/action";

function User() {
  const dispatch=useDispatch();
  const allProd=useSelector(state=>state)
  const products=allProd.allProducts.cartProduct
  const [selectedOption, setSelectedOption] = useState(1);
  const [admissionDetails, setAdmissionDetails] = useState([]);
  useEffect(() => {
    const formdata = JSON.parse(localStorage.getItem("user"));

    setAdmissionDetails(formdata);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleEdit = (index) => {
    console.log("Editing item at index:", index);
  };

  const navigate =useNavigate();

  const navigateProfile = () => {
    navigate("/profile");
  };

  const navigateHome = () => {
    navigate("/");
  };
  const navigateThemes = () => {
    navigate("/themes");
  };
  const navigatelogout = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="sidebar">
          {/* <h2>Dashboard</h2> */}
          <ul>
            <li onClick={() => handleOptionClick(1)}>Dashboard</li>
            <li onClick={navigateProfile}>Profile</li>
            <li onClick={navigateHome}>Home</li>
            <li onClick={navigateThemes}>Themes</li>
            <li onClick={navigatelogout}>Logout</li>
          </ul>
        </div>
        <div>
          <h1>Selected Themes</h1>
          <div className="cards">
            {/* <ActionAreaCard /> */}
            {products.map((prod) => (
              <div>
                <h1>{prod.id}</h1>
                <h1>{prod.title}</h1>
                <button onClick={() => dispatch(removeCart(prod))}>
                  Cancel
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default User;