import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";

function PaymentsPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    const bill = parseFloat(localStorage.getItem("totalBill")) || 0;
    if (items) {
      setCartItems(items);
    }
    if (bill) {
      setTotalBill(bill);
    }
  }, []);

  const confirmOrder = () => {
    const orderData = {
      items: cartItems,
      totalBill: totalBill,
      username: localStorage.getItem("username"), // Assuming you store the username in localStorage
    };

    console.log("hello");

    axios
      .post("/api/cart/checkout", orderData)

      .then((response) => {
        console.log("Order confirmed:", response.data);
        // Optionally clear the cart
        localStorage.removeItem("cartItems");
        localStorage.removeItem("totalBill");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error confirming order:", error);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Payment Page</h2>
          <h3>Total Bill: ₹{totalBill}</h3>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - ₹{item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p>No items in the cart</p>
          )}
          <Button onClick={confirmOrder}>Confirm Order</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PaymentsPage;
