import { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img from "../assets/images/img1.jpg";
import img1 from "../assets/images/img2.jpg";
import { useNavigate } from "react-router-dom";
import "../assets/css/User.css";
import { useDispatch, useSelector } from "react-redux";
import ActionAreaCard from "./card";
import { removeCart } from "../Redux/actions/action";
import Ordersvalue from "./GetOrders";

function Admin() {
  const dispatch = useDispatch();
  const allProd = useSelector((state) => state);
  const products = allProd.allProducts.cartProduct;
  const [selectedOption, setSelectedOption] = useState(1);
  const [admissionDetails, setAdmissionDetails] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const formdata = JSON.parse(localStorage.getItem("user"));

    setAdmissionDetails(formdata);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    navigate('/usersvalue');
  };

  const handleEdit = (index) => {
    console.log("Editing item at index:", index);
  };


  const navigateProfile = () => {
  
    navigate("/admin");
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
          <ul>
            <li onClick={() => handleOptionClick(1)}>Users</li>
            <li onClick={navigateProfile}>Booked</li>
            <li onClick={navigateHome}>Home</li>
            <li onClick={navigateThemes}>Themes</li>
            <li onClick={navigatelogout}>Logout</li>
          </ul>
        </div>
        <div>
          <div>
            <Ordersvalue />
          </div>
          <div className="cards" >
            {/* <ActionAreaCard /> */}
            {products.map((prod) => (
              <div style={{ maringLeft: "25px" }}>
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

export default Admin;
