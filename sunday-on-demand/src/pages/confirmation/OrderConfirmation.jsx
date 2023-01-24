import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOrderDetails } from "../../contexts/OrderDetail";
import { Button } from "react-bootstrap";
import AlertBanner from "../../common/AlertBanner";
export default function OrderConfirmation({ setOrderPhase }) {
  const { resetOrder } = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .post(`http://localhost:3030/order`)
      .then((res) => {
        setOrderNumber(res.data.orderNumber);
      })
      .catch((error) => setError(true));
  }, []);

  function resetHandler() {
    resetOrder();
    setOrderPhase("inProgress");
  }

  const newOrderButton = (
    <Button onClick={resetHandler}>Create new Order</Button>
  );

  if (error) {
    return (
      <>
        <AlertBanner
          message={"An unexpected error occurred. Please try again later."}
          variant={null}
        />
        {newOrderButton}
      </>
    );
  }

  if (orderNumber) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Thank You!</h1>
        <p>Your order number is {orderNumber}</p>
        <p style={{ fontSize: "25%" }}>
          as per our terms and conditions, nothing will happen now
        </p>
        {newOrderButton}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
