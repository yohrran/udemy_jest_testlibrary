import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOrderDetails } from "../../contexts/OrderDetail";
import { Button } from "react-bootstrap";

export default function OrderConfirmation({ setOrderPhase }) {
  const { resetOrder } = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    axios
      .post(`http://localhost:3030/order`)
      .then((res) => {
        setOrderNumber(res.data.orderNumber);
      })
      .catch((error) => console.log(error));
  }, []);

  function resetHandler() {
    resetOrder();
    setOrderPhase("inProgress");
  }

  if (orderNumber) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Thank You!</h1>
        <p>Your order number is {orderNumber}</p>
        <p style={{ fontSize: "25%" }}>
          as per our terms and conditions, nothing will happen now
        </p>
        <Button onClick={resetHandler}>Create new order</Button>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
