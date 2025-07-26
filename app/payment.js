// pages/payment.js
"use client";

import React from "react";

const PaymentPage = () => {
  const handlePay = () => {
    // Replace with your actual Stripe Payment Link
    window.location.replace = "https://buy.stripe.com/test_7sI5nW3Dk4N43GU3cc";
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <p>Click the button below to proceed to payment</p>
      <button
        onClick={handlePay}
        style={{
          backgroundColor: "#6772e5",
          color: "#fff",
          border: "none",
          padding: "12px 24px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "6px",
        }}
      >
        Pay with Stripe
      </button>
    </div>
  );
};

export default PaymentPage;
