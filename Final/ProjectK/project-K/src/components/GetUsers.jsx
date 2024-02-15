import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/GetOrder.css";
import Admin from "./Admin";
function Usersvalue() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders data from backend API
    axios
      .get("http://localhost:8081/customized-party-bookings")
      .then((response) => {
        // Set the fetched orders data to the state
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    
    <div className="orders-container">
      <center>
        <h1>Customized Orders</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>CustomerName</th>
              <th>VenueType</th>
              <th>Location</th>
              <th>Date</th>
              <th>Ideas</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.venueType}</td>
                <td>{order.location}</td>
                <td>{order.date}</td>
                <td>{order.ideas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Usersvalue;
