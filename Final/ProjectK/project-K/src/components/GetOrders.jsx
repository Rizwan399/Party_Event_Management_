import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/GetOrder.css"
function Ordersvalue() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders data from backend API
    axios
      .get("http://localhost:8081/bookings")
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
          <h1>Booked Orders</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>EventName</th>
                <th>CustomerName</th>
                <th>BookingDate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.eventName}</td>
                  <td>{order.customerName}</td>
                  <td>{order.bookingDate}</td>
                  <td>{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
    
    </div>
  );
}

export default Ordersvalue;
